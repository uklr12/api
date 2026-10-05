import { NextResponse } from 'next/server';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    const apiKeys = [
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
      process.env.GEMINI_API_KEY,
    ].filter(Boolean);

    if (apiKeys.length === 0) {
      return NextResponse.json(
        { error: 'No API keys configured in environment variables.' },
        { status: 500 }
      );
    }

    // جلب مفتاح عشوائي
    const selectedKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

    const maxRetries = 2;
    let attempt = 0;

    while (attempt <= maxRetries) {
      attempt++;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${selectedKey}`,
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

      // إذا وصلنا للحد المسموح (429)، ننتظر 8 ثوانٍ للتعافي وإعادة المحاولة
      if (response.status === 429 && attempt <= maxRetries) {
        await delay(8000);
        continue;
      }

      return NextResponse.json(
        { error: data.error?.message || 'Failed to generate content.' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { error: 'Rate limit reached. Please wait a few seconds and try again.' },
      { status: 429 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}