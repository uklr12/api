export default function SEOContent() {
  return (
    <section className="max-w-5xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Transform Your Academic and Professional Journey with AI-Powered Tools
        </h2>
        
        <p className="text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Our suite of free AI tools is designed to empower students and job seekers with cutting-edge technology. 
          Whether you're crafting the perfect resume, summarizing complex research papers, or preparing for 
          important interviews, our tools help you achieve your goals faster and more efficiently.
        </p>

        {/* How It Works Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <div className="text-blue-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Input Your Content</h4>
              <p className="text-gray-600 text-sm">
                Simply enter your text, paste your content, or upload your document into our intuitive interface.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
              <div className="text-green-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">AI Processing</h4>
              <p className="text-gray-600 text-sm">
                Our advanced AI algorithms analyze and process your content using advanced machine learning models.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
              <div className="text-purple-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Get Results</h4>
              <p className="text-gray-600 text-sm">
                Receive instant, high-quality output that you can copy, download, or further customize.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800">100% Free to Use</h4>
                <p className="text-gray-600 text-sm">Access all our AI tools without any cost or subscription fees.</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800">Lightning Fast Processing</h4>
                <p className="text-gray-600 text-sm">Get results in seconds with our optimized AI infrastructure.</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800">No Account Required</h4>
                <p className="text-gray-600 text-sm">Start using our tools immediately without registration or login.</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800">Privacy Focused</h4>
                <p className="text-gray-600 text-sm">Your data is processed securely and not stored permanently.</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800">High-Quality Output</h4>
                <p className="text-gray-600 text-sm">Professional-grade results powered by state-of-the-art AI models.</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-800">Mobile Friendly</h4>
                <p className="text-gray-600 text-sm">Access our tools from any device with a responsive design.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-2">Are these AI tools really free?</h4>
              <p className="text-gray-600 text-sm">
                Yes, all our AI tools are completely free to use. We believe in making AI technology accessible 
                to everyone, especially students and job seekers who may not have the budget for expensive tools.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-2">Is my data safe and private?</h4>
              <p className="text-gray-600 text-sm">
                Absolutely. We take privacy seriously. Your input data is processed temporarily to generate results 
                and is not stored permanently on our servers. We use industry-standard security measures to protect 
                your information.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-2">Do I need to create an account?</h4>
              <p className="text-gray-600 text-sm">
                No account registration is required. You can start using our tools immediately without signing up. 
                This makes the process quick and hassle-free.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-2">Can I use the generated content for commercial purposes?</h4>
              <p className="text-gray-600 text-sm">
                Yes, you own the content generated by our tools. However, we recommend reviewing and editing the 
                AI-generated content to ensure it meets your specific needs and standards before using it for 
                commercial or academic purposes.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-2">How accurate are the AI-generated results?</h4>
              <p className="text-gray-600 text-sm">
                Our AI tools use advanced machine learning models to provide high-quality results. However, 
                AI-generated content may occasionally contain errors or require refinement. We always recommend 
                reviewing the output before final use.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-2">Can I use these tools on my mobile device?</h4>
              <p className="text-gray-600 text-sm">
                Yes, our website is fully responsive and optimized for mobile devices. You can access and use 
                all our AI tools from your smartphone or tablet with the same experience as on a desktop computer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
