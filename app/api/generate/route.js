import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

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

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // استخدام نموذج gemini-1.5-flash المباشر
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: systemPrompt,
    });

    const result = await model.generateContent(userInput);
    const responseText = result.response.text();

    return NextResponse.json({ result: responseText });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: `حدث خطأ: ${error.message}` },
      { status: 500 }
    );
  }
}