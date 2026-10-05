import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userInput, systemPrompt } = await req.json();

    // 1. المحاولة الأولى: Gemini API (المزود الأساسي)
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: systemPrompt || '' }] },
              contents: [{ parts: [{ text: userInput }] }],
            }),
          }
        );

        const data = await res.json();

        // إذا نجح Gemini يرجع النتيجة فوراً
        if (res.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          return NextResponse.json({ result: data.candidates[0].content.parts[0].text });
        }

        console.warn('Gemini quota reached or failed. Falling back to Groq...', data.error?.message);
      } catch (err) {
        console.error('Gemini connection error:', err.message);
      }
    }

    // 2. المحاولة الثانية: Groq API (الخيار البديل الأول والشرس بالسرعة)
    const groqKey = process.env.GROQ_API_KEY;
    if (groqKey) {
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${groqKey}`,
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
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

        console.warn('Groq failed or rate limited. Falling back to OpenRouter...', data.error?.message);
      } catch (err) {
        console.error('Groq connection error:', err.message);
      }
    }

    // 3. المحاولة الثالثة: OpenRouter API (الخيار البديل الثاني)
    const openRouterKey = process.env.OPENROUTER_API_KEY;
    if (openRouterKey) {
      try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openRouterKey}`,
          },
          body: JSON.stringify({
            model: 'meta-llama/llama-3.3-70b-instruct:free',
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
        console.error('OpenRouter connection error:', err.message);
      }
    }

    // إذا فشلت جميع المزودات الثلاثة
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