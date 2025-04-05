import React from 'react';

export default function TermsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Terms & <span className="text-[#f59e0b]">Conditions</span>
            </h1>
            <p className="text-gray-300 text-lg text-center mb-12">
              Please read these terms and conditions carefully before using our service.
            </p>

            {/* Terms Content */}
            <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 border border-white/20 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using Teamify's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    When you create an account with us, you guarantee that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The information you provide is accurate and complete</li>
                    <li>You are at least 18 years of age</li>
                    <li>You will maintain the accuracy of your account information</li>
                    <li>You are responsible for maintaining the security of your account</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Service Usage</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Our services are provided "as is" and "as available." You agree to use the services only for lawful purposes and in accordance with these Terms.
                  </p>
                  <p>
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the service in any way that could damage or overburden our systems</li>
                    <li>Attempt to gain unauthorized access to any part of the service</li>
                    <li>Use the service for any illegal or unauthorized purpose</li>
                    <li>Violate any laws in your jurisdiction while using the service</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your use of Teamify's services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Modifications</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service. Your continued use of the service after such modifications constitutes your acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason, including without limitation if you breach these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these Terms, please contact us at <a href="mailto:legal@teamify.com" className="text-[#f59e0b] hover:text-[#f59e0b]/80 transition-colors">legal@teamify.com</a>.
                </p>
              </section>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 