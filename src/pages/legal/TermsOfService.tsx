import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 2026">
      <section className="mb-12">
        <h2 className="text-3xl mb-6">Agreement to Terms</h2>
        <p>
          By accessing or using the Tejas Labs website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Use of Service</h2>
        <p>
          You agree to use our website and services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account and password.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Intellectual Property</h2>
        <p>
          The Tejas Labs website and its original content, features, and functionality are and will remain the exclusive property of Tejas Labs Private Limited. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Product Information</h2>
        <p>
          We attempt to be as accurate as possible in describing our engineering kits. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Limitation of Liability</h2>
        <p>
          In no event shall Tejas Labs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
        </p>
      </section>
    </LegalLayout>
  );
}
