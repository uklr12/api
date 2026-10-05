import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    const groqKey = process.env.GROQ_API_KEY;
    if (!groqKey) {
      return NextResponse.json(
        { error: 'Groq API key is missing in environment variables.' },
        { status: 400 }
      );
    }

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${groqKey.trim()}`,
      },
      body: JSON.stringify({
        model: 'gemma2-9b-it', // نموذج مجاني ومستقر تماماً وموجود في كل حسابات Groq
        messages: [
          { role: 'system', content: systemPrompt || 'You are a helpful assistant.' },
          { role: 'user', content: userInput },
        ],
      }),
    });

    const data = await res.json();
    
    if (res.ok && data.choices?.[0]?.message?.content) {
      return NextResponse.json({ result: data.choices[0].message.content });
    }

    return NextResponse.json(
      { error: data.error?.message || 'Failed to generate content from Groq.' },
      { status: 400 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}