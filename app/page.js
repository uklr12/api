'use client';

import { useState } from 'react';
import Link from 'next/link';
import tools from '../data/tools.js';
import SEOContent from './components/SEOContent';
import ScrollAnimation from './components/ScrollAnimation';

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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section 1: Hero + Main Interactive Tool (Above the Fold) */}
        <header className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-700 font-semibold text-sm">✨ Free AI-Powered Tools</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6 leading-tight">
            AI Tools for Students<br className="hidden sm:block" /> and Employment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of free and fast AI tools to help you build your resume, summarize your research, and prepare for interviews.
          </p>
        </header>

        {/* Main Interactive Tool */}
        <ScrollAnimation>
          <section className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{mainTool.h1_heading}</h2>
                <p className="text-gray-500 text-sm">{mainTool.meta_description}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">Input Text:</label>
              <textarea
                className="w-full p-5 border-2 border-gray-200 rounded-xl mb-4 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none text-gray-800 text-lg transition-all duration-200 resize-none"
                rows="6"
                placeholder={mainTool.input_placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating with AI...
                  </span>
                ) : 'Generate Result'}
              </button>
            </form>

            {result && (
              <div className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-blue-200 rounded-xl relative animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Result:
                  </h3>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-md"
                  >
                    {copied ? (
                      <>
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy Text
                      </>
                    )}
                  </button>
                </div>
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-base">
                  {result}
                </div>
              </div>
            )}
          </div>
        </section>
        </ScrollAnimation>

        {/* Section 2: Other Tools Grid */}
        <ScrollAnimation delay={100}>
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Explore More Tools</h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.slice(1).map((tool, index) => (
                <ScrollAnimation key={tool.slug} delay={index * 100}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-6 flex flex-col justify-between transform hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{tool.h1_heading}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {tool.meta_description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Try the tool now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* AI Apps Card Section */}
        <ScrollAnimation delay={200}>
          <section className="mb-12">
            <Link
              href="/arabic-seo"
              className="group block bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative">
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">🚀 AI Development</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Building AI Applications with Next.js
                </h2>
                <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                  Discover how we build advanced AI applications using Next.js with integrated programmatic SEO solutions
                </p>
                <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors group-hover:gap-4 transition-all">
                  Read More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </section>
        </ScrollAnimation>

        {/* Section 3: SEO Content (Bottom - for Google SEO) */}
        <ScrollAnimation delay={300}>
          <SEOContent />
        </ScrollAnimation>
      </div>
    </main>
  );
}
