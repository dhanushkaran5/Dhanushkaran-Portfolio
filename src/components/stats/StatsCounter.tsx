'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

function AnimatedNumber({
  value,
  duration = 1.6,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse target number
    const numericTarget = parseFloat(value);
    const isDecimal = value.includes('.');
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = numericTarget * easeProgress;

      if (isDecimal) {
        setDisplayValue(current.toFixed(2));
      } else {
        setDisplayValue(Math.floor(current).toString().padStart(value.length, '0'));
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function StatsCounter() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-y border-white/[0.06] bg-[#08080A]/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 group"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-emerald-400/40 transition-colors" />

              <div className="flex items-baseline gap-1 font-mono">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                  <AnimatedNumber value={stat.value} />
                </span>
                {stat.suffix && (
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-400">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <h3 className="mt-2 text-xs sm:text-sm font-semibold text-zinc-300 font-sans">
                {stat.label}
              </h3>

              <p className="mt-1 text-[11px] font-mono text-zinc-500 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
