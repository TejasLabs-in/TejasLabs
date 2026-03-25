import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function ReturnsRefunds() {
  return (
    <LegalLayout title="Returns & Refunds" lastUpdated="March 2026">
      <section className="mb-12">
        <h2 className="text-3xl mb-6">Satisfaction-First Policy</h2>
        <p>
          At Tejas Labs, we take pride in the quality of our engineering kits. If you are not entirely satisfied with your purchase, we're here to help. Our goal is to ensure a seamless and fair return process.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Returns</h2>
        <p>
          You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
        </p>
        <p className="mt-4">
          Please note that partially assembled kits or kits with opened internal component bags cannot be returned unless they are found to be defective.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Refunds</h2>
        <p>
          Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
        </p>
        <p className="mt-4">
          If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Shipping</h2>
        <p>
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-6">Defective Items</h2>
        <p>
          If you receive a defective component or kit, please contact our engineering support team immediately. We will replace any defective parts free of charge, including shipping costs.
        </p>
      </section>
    </LegalLayout>
  );
}
