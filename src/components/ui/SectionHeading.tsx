'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  badge: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-14 sm:mb-18 ${
        isCentered ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      >
        {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-zinc-400" />}
        <span>{badge}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[0.95] text-white"
        style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-5 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed ${
            isCentered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
