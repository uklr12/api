export const metadata = {
  title: 'Terms of Service - Free AI Tools',
  description: 'Read our terms of service to understand the rules and guidelines for using our AI tools.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing or using Free AI Tools, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Free AI Tools provides a collection of AI-powered tools designed to assist students and job seekers 
              with tasks such as resume building, research summarization, and interview preparation. 
              Our services are provided free of charge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Fair Use Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use our AI tools fairly and responsibly. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Using the tools for legitimate educational and professional purposes</li>
              <li>Not attempting to circumvent usage limits or restrictions</li>
              <li>Not using automated scripts or bots to access our services</li>
              <li>Not reselling or redistributing our services without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Prohibited Uses</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may NOT use our AI tools for any of the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Generating illegal, harmful, or malicious content</li>
              <li>Creating content that promotes violence, discrimination, or hate speech</li>
              <li>Plagiarism or academic dishonesty</li>
              <li>Fraud, deception, or misleading activities</li>
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on intellectual property rights of others</li>
              <li>Harassment, bullying, or threatening behavior</li>
              <li>Spamming or sending unsolicited communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a user of our services, you are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Reviewing and verifying all AI-generated content before use</li>
              <li>Ensuring your use complies with academic and professional standards</li>
              <li>Maintaining the security of your account and access credentials</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. AI Generated Content Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our AI tools generate content based on the input you provide. While we strive for accuracy and quality, 
              AI-generated content may contain errors, inaccuracies, or biases. You should:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Always review and verify AI-generated content before using it</li>
              <li>Not rely solely on AI output for critical decisions</li>
              <li>Use the tools as a supplement to your own judgment and research</li>
              <li>Understand that we are not responsible for consequences of using AI-generated content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All content, features, and functionality of our website, including but not limited to text, graphics, 
              logos, and software, are the exclusive property of Free AI Tools and are protected by international 
              copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You retain ownership of any content you input into our tools. However, by using our services, you grant 
              us a license to process, store, and use your input data solely for the purpose of providing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Service Availability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We strive to maintain high availability of our services. However, we do not guarantee uninterrupted access 
              and reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Modify, suspend, or discontinue any part of our services</li>
              <li>Impose limits on usage to ensure fair access for all users</li>
              <li>Perform maintenance that may temporarily disrupt service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, Free AI Tools shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, use, 
              goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Termination</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our services at any time, without prior notice 
              or liability, for any reason, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Breach of these Terms of Service</li>
              <li>Violation of our fair use policy</li>
              <li>Engaging in fraudulent or illegal activities</li>
              <li>Abuse of our AI tools or systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may modify these terms at any time. We will notify users of significant changes by posting the new 
              terms on this page. Your continued use of our services after such modifications constitutes your acceptance 
              of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms of Service shall be governed by and construed in accordance with applicable laws. 
              Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts 
              in the relevant jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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
