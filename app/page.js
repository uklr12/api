'use client';

import { useState } from 'react';
import Link from 'next/link';
import tools from '../data/tools.js';
import SEOContent from './components/SEOContent';

export default function HomePage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const mainTool = tools[0];

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
          systemPrompt: mainTool.system_prompt,
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
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section 1: Hero + Main Interactive Tool (Above the Fold) */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            AI Tools for Students and Employment
          </h1>
          <p className="text-lg text-gray-600">
            A collection of free and fast AI tools to help you build your resume, summarize your research, and prepare for interviews.
          </p>
        </header>

        {/* Main Interactive Tool */}
        <section className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{mainTool.h1_heading}</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">{mainTool.meta_description}</p>

          <form onSubmit={handleSubmit} className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Input Text:</label>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              rows="5"
              placeholder={mainTool.input_placeholder}
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
                <h3 className="font-bold text-gray-800 text-lg">Result:</h3>
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
        </section>

        {/* Section 2: Other Tools Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore More Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.slice(1).map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.h1_heading}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {tool.meta_description}
                  </p>
                </div>
                <span className="text-blue-600 font-semibold text-sm hover:underline inline-block mt-2">
                  Try the tool now →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: SEO Content (Bottom - for Google SEO) */}
        <SEOContent />

        {/* Link to Arabic SEO Page */}
        <div className="text-center mt-8 mb-8">
          <Link
            href="/arabic-seo"
            className="inline-block text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            Read Arabic SEO Content →
          </Link>
        </div>
      </div>
    </main>
  );
}
