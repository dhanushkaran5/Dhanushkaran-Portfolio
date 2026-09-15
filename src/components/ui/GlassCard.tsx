'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      {...props}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
      className={`relative rounded-3xl p-6 sm:p-8 bg-[#141313]/85 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-colors duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.6)] overflow-hidden ${
        glow ? 'hover:shadow-[0_0_35px_rgba(255,255,255,0.07)]' : ''
      } ${className}`}
    >
      {glow && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-3xl pointer-events-none group-hover:bg-white/[0.04] transition-colors" />
      )}
      {children}
    </motion.div>
  );
}
