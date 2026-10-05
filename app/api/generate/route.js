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

    // استخدام Google Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `${systemPrompt}\n\nUser: ${userInput}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text() || 'No response';

    return NextResponse.json({ result: responseText });
  } catch (error) {
    console.error('API Error Details:');
    console.error('Error Message:', error.message);
    console.error('Error Stack:', error.stack);
    console.error('Full Error Object:', JSON.stringify(error, null, 2));
    
    return NextResponse.json(
      { 
        error: `An error occurred: ${error.message}`,
        details: error.stack,
        fullError: JSON.stringify(error, null, 2)
      },
      { status: 500 }
    );
  }
}
