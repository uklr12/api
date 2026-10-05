import { NextResponse } from 'next/server';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    // Collect all configured keys or fall back to GEMINI_API_KEY
    const apiKeys = [
      process.env.GEMINI_API_KEY,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
    ].filter(Boolean);

    if (apiKeys.length === 0) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is missing in environment variables.' },
        { status: 500 }
      );
    }

    const shuffledKeys = [...apiKeys].sort(() => Math.random() - 0.5);
    let lastErrorMessage = '';

    // Iterate through all available keys
    for (const key of shuffledKeys) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${key}`,
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
          const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
          return NextResponse.json({ result: responseText });
        }

        lastErrorMessage = data.error?.message || 'Failed to process request.';

        // If rate limited, try next key immediately
        if (response.status === 429) {
          console.warn(`Key rate-limited. Trying next available key...`);
          continue;
        }

        return NextResponse.json(
          { error: lastErrorMessage },
          { status: response.status }
        );
      } catch (err) {
        lastErrorMessage = err.message;
      }
    }

    // Backup retry: wait 8 seconds if all keys are currently rate-limited
    await delay(8000);
    const retryKey = shuffledKeys[0];
    const retryResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${retryKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt || '' }] },
          contents: [{ parts: [{ text: userInput }] }],
        }),
      }
    );

    const retryData = await retryResponse.json();
    if (retryResponse.ok) {
      const responseText = retryData.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
      return NextResponse.json({ result: responseText });
    }

    return NextResponse.json(
      { error: 'Rate limit reached for free tier requests. Please wait a few seconds and try again.' },
      { status: 429 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}