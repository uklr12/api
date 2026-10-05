import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    // جلب كافة المفاتيح المتاحة
    const apiKeys = [
      process.env.GEMINI_API_KEY_1,
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

    // خلط المفاتيح لتجربتها
    const shuffledKeys = [...apiKeys].sort(() => Math.random() - 0.5);

    for (const key of shuffledKeys) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
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

        // إذا كان الخطأ متعلقاً بالحصّة (429)، ينتقل فوراً للمفتاح التالي بدون تأخير
        if (response.status === 429) {
          console.warn('Key limit reached, switching key instantly...');
          continue;
        }

        return NextResponse.json(
          { error: data.error?.message || 'Failed to process request.' },
          { status: response.status }
        );
      } catch (err) {
        console.error('Fetch error:', err.message);
      }
    }

    // إذا استُنفدت كل المفاتيح
    return NextResponse.json(
      { error: 'Daily or minute quota exceeded for all configured keys. Please try again later or use new API keys.' },
      { status: 429 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}