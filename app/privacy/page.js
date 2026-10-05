export const metadata = {
  title: 'Privacy Policy - Free AI Tools',
  description: 'Learn about how we collect, use, and protect your data when using our AI tools.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to Free AI Tools. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and protect your information when you use our AI-powered tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Usage data such as pages visited, time spent on the site, and tool interactions</li>
              <li>Device information including browser type, operating system, and IP address</li>
              <li>Cookies and similar tracking technologies for analytics and advertising purposes</li>
              <li>Input data you provide to our AI tools (processed temporarily and not stored permanently)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To provide and improve our AI tools and services</li>
              <li>To analyze usage patterns and enhance user experience</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To prevent abuse and ensure fair usage of our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Advertising</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies to enhance your browsing experience and serve personalized advertisements through Google AdSense. 
              These cookies may collect information about your browsing behavior across different websites.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can manage your cookie preferences through your browser settings. However, disabling cookies may affect 
              the functionality of our website and the relevance of advertisements you see.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our AI tools may use third-party services (such as Google's Generative AI) to process your requests. 
              These third parties have their own privacy policies, and we encourage you to review them.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We also use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior 
              visits to this website or other websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access information about the data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Opt-out of personalized advertising</li>
              <li>Object to the processing of your personal data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information 
              from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, 
              please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy 
              on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> khalidahmedalwafi@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
