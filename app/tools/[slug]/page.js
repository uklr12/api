'use client';

import { useState } from 'react';
import tools from '../../../data/tools.js';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ToolPage({ params }) {
  const slug = params.slug;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) return notFound();

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');
    setCopied(false);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userInput: input,
          systemPrompt: tool.system_prompt,
        }),
      });

      const data = await res.json();
      setResult(data.result || data.error);
    } catch (err) {
      setResult('Failed to connect to server, please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100">
        <Link href="/" className="text-blue-600 text-sm mb-6 inline-block hover:underline">
          ← Back to Home
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{tool.h1_heading}</h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">{tool.meta_description}</p>

        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">Input Text:</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            rows="5"
            placeholder={tool.input_placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Generating with AI...' : 'Generate Result'}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-lg relative">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-gray-800 text-lg">Result:</h2>
              <button
                onClick={handleCopy}
                className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded transition-colors"
              >
                {copied ? 'Copied!' : 'Copy Text'}
              </button>
            </div>
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm sm:text-base">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
