import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY not found in environment variables' },
        { status: 500 }
      );
    }

    // تهيئة Google Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);

    // استخدام الموديل المستقر وتمرير التعليمات في systemInstruction
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: systemPrompt,
    });

    // إرسال مدخلات المستخدم فقط بشكل مباشر
    const result = await model.generateContent(userInput);
    const responseText = result.response.text() || 'No response';

    return NextResponse.json({ result: responseText });
  } catch (error) {
    console.error('API Error Details:', error);
    
    return NextResponse.json(
      { 
        error: `An error occurred: ${error.message}`,
        details: error.stack
      },
      { status: 500 }
    );
  }
}