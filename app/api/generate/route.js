import { NextResponse } from 'next/server';

export async function POST(req) {
  const errors = {};

  try {
    const { userInput, systemPrompt } = await req.json();

    // 1. Groq API
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
            model: 'llama-3.1-8b-instant',
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
        errors.Groq = data.error?.message || JSON.stringify(data);
      } catch (err) {
        errors.Groq = `Fetch Error: ${err.message}`;
      }
    } else {
      errors.Groq = 'Missing key';
    }

    // 2. OpenRouter API
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
            model: 'google/gemini-2.0-flash-lite-001:free',
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
        errors.OpenRouter = data.error?.message || JSON.stringify(data);
      } catch (err) {
        errors.OpenRouter = `Fetch Error: ${err.message}`;
      }
    } else {
      errors.OpenRouter = 'Missing key';
    }

    // 3. Gemini API
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey.trim()}`,
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
        errors.Gemini = data.error?.message || JSON.stringify(data);
      } catch (err) {
        errors.Gemini = `Fetch Error: ${err.message}`;
      }
    } else {
      errors.Gemini = 'Missing key';
    }

    return NextResponse.json(
      { error: 'All AI services failed.', details: errors },
      { status: 400 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 400 }
    );
  }
}