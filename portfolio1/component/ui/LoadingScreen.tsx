'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="relative">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            SB
          </span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: [0.77, 0, 0.18, 1] }}
          className="h-px bg-white/20 absolute bottom-0 left-0"
        />

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-[0.3em]"
        >
          LOADING
        </motion.div>
      </div>
    </motion.div>
  );
}