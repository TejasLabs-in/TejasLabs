import React from 'react';
import { motion } from 'motion/react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-app text-text-app pt-32 pb-48 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-16 border-b border-border-app pb-12">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">{title}</h1>
          <p className="text-text-muted uppercase tracking-widest text-xs font-bold">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-p:text-text-muted prose-p:leading-relaxed prose-li:text-text-muted prose-strong:text-text-app prose-strong:font-bold">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
