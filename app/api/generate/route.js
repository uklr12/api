import { NextResponse } from 'next/server';

// Delay helper function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is missing in environment variables.' },
        { status: 500 }
      );
    }

    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      attempt++;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt || '' }] },
            contents: [{ parts: [{ text: userInput }] }],
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No text generated.';
        return NextResponse.json({ result: responseText });
      }

      // Retry if rate-limited or experiencing high demand
      if (
        response.status === 429 ||
        response.status === 503 ||
        data.error?.message?.toLowerCase().includes('demand')
      ) {
        console.warn(`Attempt ${attempt} failed due to high demand. Retrying...`);
        if (attempt < maxRetries) {
          await delay(2000); // Wait 2 seconds before retrying
          continue;
        }
      }

      // Return direct API error if it's not a rate limit issue
      return NextResponse.json(
        { error: data.error?.message || 'Failed to process request.' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { error: 'Servers are currently experiencing high demand. Please try again in a few seconds.' },
      { status: 503 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}