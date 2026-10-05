import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY غير موجود في متغيرات البيئة' },
        { status: 500 }
      );
    }

    // تم تغيير اسم الموديل إلى gemini-2.0-flash المعتمد حالياً
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt || '' }]
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
      console.error('Gemini Error:', data);
      return NextResponse.json(
        { error: data.error?.message || 'خطأ في الاستجابة من جوجل' },
        { status: response.status }
      );
    }

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'لم يتم استلام نص';

    return NextResponse.json({ result: responseText });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: `حدث خطأ في الخادم: ${error.message}` },
      { status: 500 }
    );
  }
}