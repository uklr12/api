import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'مفتاح GEMINI_API_KEY غير موجود في متغيرات البيئة' },
        { status: 500 }
      );
    }

    // قائمة النماذج حسب الأولوية لتفادي ضغط الخوادم
    const models = ['gemini-2.5-flash', 'gemini-1.5-flash'];
    let lastError = null;

    for (const model of models) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
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
          const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'لم يتم إنشاء نص';
          return NextResponse.json({ result: responseText });
        }

        // تسجيل الخطأ والانتقال للموديل البديل في الدورة التالية
        lastError = data.error?.message;
        console.warn(`Model ${model} failed, trying fallback...`, lastError);
      } catch (err) {
        lastError = err.message;
      }
    }

    // إذا فشلت كل المحاولات بسبب الضغط العالي
    return NextResponse.json(
      { error: 'الخوادم تشهد ضغطاً عالياً حالياً، يرجى المحاولة بعد بضع ثوانٍ.' },
      { status: 503 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `حدث خطأ في الخادم: ${error.message}` },
      { status: 500 }
    );
  }
}