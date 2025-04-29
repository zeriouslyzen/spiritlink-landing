"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Contact information (name, email address)</li>
          <li>Usage data and analytics</li>
          <li>Device information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>Send important notifications</li>
          <li>Analyze usage patterns</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information.
          However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Access your personal data</li>
          <li>Request correction of your data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <a href="mailto:privacy@yourdomain.com" className="text-blue-600 hover:text-blue-800 ml-2">
            privacy@yourdomain.com
          </a>
        </p>
      </section>
    </div>
  );
} 