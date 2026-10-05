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

    // الطلب المباشر لـ Gemini API دون الاعتماد على مكتبات خروجية قديمة
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [
            {
              parts: [{ text: userInput }]
            }
          ]
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API Error Data:', data);
      return NextResponse.json(
        { error: data.error?.message || 'حدث خطأ أثناء التواصل مع الذكاء الاصطناعي' },
        { status: response.status }
      );
    }

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'لم يتم إنشاء نص';

    return NextResponse.json({ result: responseText });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: `حدث خطأ في الخادم: ${error.message}` },
      { status: 500 }
    );
  }
}