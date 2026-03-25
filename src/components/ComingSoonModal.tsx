import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Rocket } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}  
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-bg-card border border-border-app p-8 rounded-[2.5rem] shadow-2xl text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-bg-soft transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="text-primary w-10 h-10" />
            </div>

            <h2 className="text-3xl font-display font-bold mb-4">Coming Soon</h2>
            <p className="text-text-muted mb-8 text-lg">
              We're currently fine-tuning our checkout experience to ensure it's as precise as our engineering kits. Stay tuned!
            </p>

            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-4 rounded-2xl font-semibold hover:bg-blue-600 transition-all"
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
