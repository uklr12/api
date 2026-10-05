import Link from 'next/link';
import tools from '../data/tools.js';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            AI Tools for Students and Employment
          </h1>
          <p className="text-lg text-gray-600">
            A collection of free and fast AI tools to help you build your resume, summarize your research, and prepare for interviews.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{tool.h1_heading}</h2>
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
      </div>
    </main>
  );
}
