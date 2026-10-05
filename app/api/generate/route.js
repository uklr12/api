import { NextResponse } from 'next/server';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    // جلب كل المفاتيح المعرفة في البيئة
    const apiKeys = [
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
      process.env.GEMINI_API_KEY_5,
      process.env.GEMINI_API_KEY,
    ].filter(Boolean);

    if (apiKeys.length === 0) {
      return NextResponse.json(
        { error: 'لم يتم العثور على مفاتيح API في متغيرات البيئة.' },
        { status: 500 }
      );
    }

    // ترتيب المفاتيح عشوائياً
    const shuffledKeys = [...apiKeys].sort(() => Math.random() - 0.5);

    // المحاولة على كل المفاتيح
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

        console.warn(`Key failed with status ${response.status}. Trying next key...`);
      } catch (err) {
        console.error(`Error with key: ${err.message}`);
      }
    }

    // إذا فشلت كل المفاتيح، ننتظر ثانيتين ونحاول مرة أخيرة بمفتاح عشوائي قبل إظهار الخطأ
    await delay(2000);
    const retryKey = shuffledKeys[Math.floor(Math.random() * shuffledKeys.length)];
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
      const responseText = retryData.candidates?.[0]?.content?.parts?.[0]?.text || 'No text generated.';
      return NextResponse.json({ result: responseText });
    }

    return NextResponse.json(
      { error: 'جميع المفاتيح مشغولة حالياً بكثرة الطلبات. يرجى المحاولة بعد 10 ثوانٍ.' },
      { status: 429 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `خطأ في السيرفر: ${error.message}` },
      { status: 500 }
    );
  }
}