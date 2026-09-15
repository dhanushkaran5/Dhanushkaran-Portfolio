'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += 6;
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 100);
      } else {
        setProgress(current);
      }
    }, 20);

    const hardTimeout = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(hardTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col items-center justify-center bg-[#0F0E0E] text-white"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-white/[0.04] blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6">
            {/* Monogram / Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md flex items-center justify-center shadow-2xl">
                <span className="font-mono text-xl font-bold tracking-tighter text-white">
                  DM
                </span>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/20 to-transparent blur-sm -z-10 animate-pulse" />
            </motion.div>

            {/* Name */}
            <div className="text-center mb-8">
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-300 font-bold">
                Dhanushkaran M
              </p>
              <p className="text-[10px] font-mono text-zinc-500 mt-1">
                AI &amp; Data Science Developer
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-white/[0.08] h-[2px] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-zinc-400 via-zinc-200 to-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Progress counter */}
            <div className="mt-3 flex justify-between w-full font-mono text-[11px] text-zinc-500">
              <span>INITIALIZING</span>
              <span className="text-white font-medium">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
