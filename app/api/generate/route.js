import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    // جلب المفتاح الأساسي أو أي مفاتيح إضافية معرفة
    const apiKeys = [
      process.env.GEMINI_API_KEY,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
    ].filter(Boolean);

    if (apiKeys.length === 0) {
      return NextResponse.json(
        { error: 'API key is missing in environment variables.' },
        { status: 500 }
      );
    }

    // اختيار مفتاح عشوائي للتقليل من استهلاك مفتاح واحد
    const selectedKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

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
      const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No content generated.';
      return NextResponse.json({ result: responseText });
    }

    // إرجاع رسالة الخطأ الأصلية القادمة من جوجل بوضوح
    return NextResponse.json(
      { error: data.error?.message || 'Error processing request.' },
      { status: response.status }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}