import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 2026">
      <section className="mb-12">
        <h2 className="text-3xl mb-6">Introduction</h2>
        <p>
          Tejas Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Tejas Labs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Information Collection</h2>
        <p>
          We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li><strong>Personal Data:</strong> Name, email address, shipping address, and payment information.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, and pages visited.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your experience and gather data about site traffic.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">How We Use Your Information</h2>
        <p>
          Any of the information we collect from you may be used in one of the following ways:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>To personalize your experience.</li>
          <li>To improve our website and products.</li>
          <li>To improve customer service.</li>
          <li>To process transactions.</li>
          <li>To send periodic emails.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Data Protection</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">GDPR & CCPA Compliance</h2>
        <p>
          We are committed to complying with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). You have the right to access, correct, or delete your personal data. Please contact our privacy officer for any requests.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
        </p>
      </section>
    </LegalLayout>
  );
}
