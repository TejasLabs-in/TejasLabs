import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function ShippingPolicy() {
  return (
    <LegalLayout title="Shipping Policy" lastUpdated="March 2026">
      <section className="mb-12">
        <h2 className="text-3xl mb-6">Overview</h2>
        <p>
          At Tejas Labs, we are committed to delivering our engineering kits with the same precision we used to design them. We partner with leading global logistics providers to ensure your orders arrive safely and on time.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Processing Times</h2>
        <p>
          All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Shipping Rates & Delivery Estimates</h2>
        <p>
          Shipping charges for your order will be calculated and displayed at checkout. We offer standard and expedited shipping options.
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li><strong>Standard Shipping:</strong> 5-7 business days</li>
          <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
          <li><strong>International Shipping:</strong> 10-15 business days (depending on location)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Shipment Confirmation & Order Tracking</h2>
        <p>
          You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Customs, Duties, and Taxes</h2>
        <p>
          Tejas Labs is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
        </p>
      </section>
    </LegalLayout>
  );
}
