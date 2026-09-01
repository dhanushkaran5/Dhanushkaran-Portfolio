'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, finish immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 120);
      } else {
        setProgress(current);
      }
    }, 25);

    // Hard fallback: never stay visible longer than 900ms under any circumstance
    const hardTimeout = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 900);

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
          className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col items-center justify-center bg-[#08080A] text-white"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-emerald-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6">
            {/* Monogram / Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center shadow-2xl">
                <span className="font-mono text-xl font-bold tracking-tighter text-white">
                  D<span className="text-emerald-400">M</span>
                </span>
              </div>
              {/* Rotating pulse border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-white/10 blur-sm -z-10 animate-pulse" />
            </motion.div>

            {/* Name */}
            <div className="text-center mb-8">
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-400">
                Dhanushkaran M
              </p>
              <p className="text-[10px] font-mono text-zinc-600 mt-1">
                AI &amp; Data Science Developer
              </p>
            </div>

            {/* Sleek progress bar */}
            <div className="w-full bg-white/[0.06] h-[2px] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Progress counter */}
            <div className="mt-3 flex justify-between w-full font-mono text-[11px] text-zinc-500">
              <span>INITIALIZING SYSTEM</span>
              <span className="text-emerald-400 font-medium">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
