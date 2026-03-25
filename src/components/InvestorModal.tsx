import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvestorModal({ isOpen, onClose }: InvestorModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-bg-card border border-border-app p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-bg-soft transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <TrendingUp size={32} />
              </div>

              <h2 className="text-4xl font-display font-bold mb-6 tracking-tight">Investor Relations</h2>
              
              <p className="text-text-muted mb-10 text-xl font-light leading-relaxed">
                Tejas Labs is scaling the future of STEM education. We are currently preparing our Investor Portal for qualified partners.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-primary"><Users size={20} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Strategic Growth</h4>
                    <p className="text-sm text-text-muted">Expanding our reach to 5,000+ schools by 2027.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-primary"><ShieldCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Secure Equity</h4>
                    <p className="text-sm text-text-muted">Professional-grade governance and transparency.</p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-soft border border-border-app p-6 rounded-2xl mb-10">
                <p className="text-sm text-text-muted italic">
                  "Our mission is to build a sustainable, high-growth ecosystem that empowers the next generation of innovators while delivering long-term value to our stakeholders."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  Register for Updates <ArrowRight size={18} />
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 border border-border-app px-8 py-4 rounded-full font-bold hover:bg-bg-soft transition-all"
                >
                  Contact IR Team
                </button>
              </div>
              
              <p className="mt-8 text-center text-xs text-text-muted uppercase tracking-widest font-bold opacity-50">
                Tejas Labs Private Limited • Investor Relations
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
