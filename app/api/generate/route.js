import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    // 1. المحاولة الأولى: Groq API
    const groqKey = process.env.GROQ_API_KEY;
    if (groqKey) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${groqKey.trim()}`,
          },
          body: JSON.stringify({
            model: 'llama-3.1-70b-versatile',
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
      } catch (err) {
        console.error('Groq error:', err.message);
      }
    }

    // 2. المحاولة الثانية: OpenRouter API (استخدام نموذج Mistral/Qwen المجاني)
    const openRouterKey = process.env.OPENROUTER_API_KEY;
    if (openRouterKey) {
      try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openRouterKey.trim()}`,
          },
          body: JSON.stringify({
            model: 'qwen/qwen-2.5-72b-instruct:free',
            messages: [
              { role: 'system', content: systemPrompt || '' },
              { role: 'user', content: userInput },
            ],
          }),
        });

        const data = await res.json();
        if (res.ok && data.choices?.[0]?.message?.content) {
          return NextResponse.json({ result: data.choices[0].message.content });
        }
      } catch (err) {
        console.error('OpenRouter error:', err.message);
      }
    }

    // 3. المحاولة الثالثة: Gemini API
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey.trim()}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: `${systemPrompt ? systemPrompt + '\n\n' : ''}${userInput}` }] }],
            }),
          }
        );

        const data = await res.json();
        if (res.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          return NextResponse.json({ result: data.candidates[0].content.parts[0].text });
        }
      } catch (err) {
        console.error('Gemini error:', err.message);
      }
    }

    return NextResponse.json(
      { error: 'All AI models are currently busy. Please try again in a moment.' },
      { status: 429 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
}