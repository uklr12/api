import Link from 'next/link';

export const metadata = {
  title: 'Building AI Applications with Next.js',
  description: 'We develop AI applications using advanced Next.js technology and programmatic SEO solutions for entrepreneurs and ambitious developers',
};

export default function AIAppsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:text-blue-800 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Back to Home
        </Link>

        <header className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-700 font-semibold text-sm">🚀 AI Development Services</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6 leading-tight">
            Building AI Applications<br className="hidden sm:block" /> with Next.js
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We develop AI applications using advanced Next.js technology and integrated programmatic SEO solutions for entrepreneurs and ambitious developers
          </p>
        </header>

        <ScrollAnimation>
          <section className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Why Choose AI Application Development?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                In the era of rapid digital transformation, building AI applications with Next.js has become a strategic necessity for startups and entrepreneurs. We offer advanced software solutions that combine the power of artificial intelligence with Next.js's exceptional performance, focusing on achieving outstanding SEO results that guarantee you top rankings in search results.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="font-medium">AI application development with cutting-edge technology and highest security standards</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="font-medium">Advanced Next.js technology ensuring lightning speed and exceptional user experience</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span className="font-medium">AI-powered website programming scalable for continuous growth</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <span className="text-orange-600 text-xl">✓</span>
                  <span className="font-medium">Integrated programmatic SEO solutions to achieve top search rankings</span>
                </li>
              </ul>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <section className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Benefits of Using Next.js in AI Applications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollAnimation delay={50}>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm">1</span>
                      Superior Performance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced Next.js technology features intelligent Rendering systems that ensure your pages load in fractions of a second, enhancing user experience and improving your Google ranking.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm">2</span>
                      Automatic SEO Enhancement
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      When building AI applications with Next.js, you benefit from Server-Side Rendering and Static Generation features that search engines love.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={150}>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm">3</span>
                      Scalability
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      AI-powered website programming requires a flexible architecture, and Next.js provides infrastructure that supports growth from prototype to massive enterprise applications.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm">4</span>
                      Seamless AI API Integration
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Developing AI applications becomes easier with Next.js thanks to its strong support for API Routes and integration with leading AI services.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <section className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-400 opacity-10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Comparison: Traditional Methods vs Modern AI Applications</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600">
                      <th className="border border-blue-500 p-4 text-right font-bold text-white">Criteria</th>
                      <th className="border border-blue-500 p-4 text-right font-bold text-white">Traditional Methods</th>
                      <th className="border border-blue-500 p-4 text-right font-bold text-white">AI Apps with Next.js</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 p-4 font-bold text-gray-900">Loading Speed</td>
                      <td className="border border-gray-200 p-4 text-gray-600">Slow to moderate</td>
                      <td className="border border-gray-200 p-4 text-green-600 font-bold bg-green-50">Very fast</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-200 p-4 font-bold text-gray-900">SEO Enhancement</td>
                      <td className="border border-gray-200 p-4 text-gray-600">Requires extra effort</td>
                      <td className="border border-gray-200 p-4 text-green-600 font-bold bg-green-50">Built-in automatically</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 p-4 font-bold text-gray-900">Interactivity</td>
                      <td className="border border-gray-200 p-4 text-gray-600">Limited</td>
                      <td className="border border-gray-200 p-4 text-green-600 font-bold bg-green-50">Smart and interactive</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-200 p-4 font-bold text-gray-900">Scalability</td>
                      <td className="border border-gray-200 p-4 text-gray-600">Difficult</td>
                      <td className="border border-gray-200 p-4 text-green-600 font-bold bg-green-50">Easy and flexible</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 p-4 font-bold text-gray-900">Long-term Cost</td>
                      <td className="border border-gray-200 p-4 text-gray-600">High</td>
                      <td className="border border-gray-200 p-4 text-green-600 font-bold bg-green-50">Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <section className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-orange-400 to-amber-400 opacity-10 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-4">
                <ScrollAnimation delay={50}>
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">What is building AI applications with Next.js?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      It's the process of developing intelligent web applications that combine AI capabilities with Next.js framework advantages, resulting in fast, responsive applications automatically optimized for search engines.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">How long does it take to develop an AI app with Next.js?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      It depends on project complexity, but thanks to advanced Next.js technology, we can launch an MVP in 4-6 weeks, with gradual scaling according to your business needs.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={150}>
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">How do programmatic SEO solutions help achieve top search rankings?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We apply best technical SEO practices from the infrastructure: Core Web Vitals optimization, clean URL structure, Schema Markup, and Mobile-First optimization, ensuring Google favors your site.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Can AI applications be integrated with existing systems?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Yes, the AI-powered websites we develop are designed for seamless integration with your existing systems, whether CRM, ERP, or any content management platforms.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={250}>
                  <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">What is the expected cost for an AI application development project?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Costs vary based on scope and requirements, but we offer flexible plans to suit different budgets, with guaranteed clear ROI through improved operational efficiency.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Turn Your Idea into Reality?</h2>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg max-w-2xl">
                Let's work together to build an innovative AI application using Next.js that puts you at the top. Our team of experts is ready to transform your vision into a successful digital product.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Contact Us Now
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </main>
  );
}
