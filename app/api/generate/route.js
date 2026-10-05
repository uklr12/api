import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    // جلب كل المفاتيح المعرفة في Vercel
    const apiKeys = [
      process.env.GEMINI_API_KEY,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
      process.env.GEMINI_API_KEY, // المفتاح الأساسي كاحتياطي
    ].filter(Boolean);

    if (apiKeys.length === 0) {
      return NextResponse.json(
        { error: 'No API keys found in environment variables.' },
        { status: 500 }
      );
    }

    // ترتيب المفاتيح عشوائياً لتوزيع الطلبات بالتساوي
    const shuffledKeys = [...apiKeys].sort(() => Math.random() - 0.5);
    let lastError = null;

    // التجربة على المفاتيح فوراً؛ إن كان أحدها متوقفاً ينقل للثاني فوراً دون انتظار
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
          const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No text generated.';
          return NextResponse.json({ result: responseText });
        }

        lastError = data.error?.message;
        console.warn(`Key failed (Status: ${response.status}). Switching to next key...`);
      } catch (err) {
        lastError = err.message;
      }
    }

    return NextResponse.json(
      { error: 'All API keys are currently busy or rate-limited. Please try again shortly.' },
      { status: 429 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}