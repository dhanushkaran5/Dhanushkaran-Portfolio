'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Sparkles, Cpu, Layers, Code2, Database, Terminal, Globe, Server, Box } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import TechIcon from '@/components/ui/TechIcon';

// Technology brand color hints for subtle glowing accents
const techColorMap: Record<string, string> = {
  'Next.js 15': 'hover:border-white/40',
  'React 19': 'hover:border-cyan-500/40 hover:text-cyan-300',
  'TypeScript': 'hover:border-blue-500/40 hover:text-blue-300',
  'Tailwind CSS': 'hover:border-teal-500/40 hover:text-teal-300',
  'Node.js': 'hover:border-emerald-500/40 hover:text-emerald-300',
  'Python': 'hover:border-yellow-500/40 hover:text-yellow-300',
  'Docker': 'hover:border-blue-400/40 hover:text-blue-200',
  'MongoDB': 'hover:border-green-500/40 hover:text-green-300',
  'PostgreSQL': 'hover:border-sky-500/40 hover:text-sky-300',
  'Redis': 'hover:border-red-500/40 hover:text-red-300',
  'Supabase': 'hover:border-emerald-400/40 hover:text-emerald-300',
  'Three.js': 'hover:border-purple-400/40 hover:text-purple-300',
  'Framer Motion': 'hover:border-pink-500/40 hover:text-pink-300',
  'Git / GitHub': 'hover:border-orange-500/40 hover:text-orange-300',
  'Prisma': 'hover:border-indigo-400/40 hover:text-indigo-300',
  'Turbopack': 'hover:border-amber-500/40 hover:text-amber-300',
};

export default function ArsenalSection() {
  const { arsenal } = PORTFOLIO_DATA;

  return (
    <section
      id="arsenal"
      className="relative z-20 py-24 sm:py-32 bg-[#0B0B0C] overflow-hidden"
      aria-label="My Technology Arsenal"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-14 sm:mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.04)]"
          >
            <Wrench className="w-3.5 h-3.5 text-zinc-400" />
            <span className="tracking-widest uppercase font-medium">MY ARSENAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.0] text-white"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Technologies{' '}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              i scale
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto"
          >
            i scale
          </motion.p>
        </div>
      </div>

      {/* Dual Infinite Flowing Marquees with Edge Fade Masks */}
      <div className="relative w-full space-y-4 select-none overflow-hidden">
        {/* Gradient edge masks for smooth appearance/disappearance */}
        <div className="absolute left-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-l from-[#0B0B0C] to-transparent z-10 pointer-events-none" />

        {/* Marquee Row 1 (Forward Flow) */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
            className="flex gap-3.5 shrink-0"
          >
            {[...arsenal.row1, ...arsenal.row1].map((item, idx) => {
              const colorClass = techColorMap[item.name] || 'hover:border-white/30';
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className={`px-5 py-2.5 rounded-2xl bg-[#141314]/90 border border-white/10 ${colorClass} text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2.5 whitespace-nowrap cursor-default hover:scale-105`}
                >
                  <TechIcon name={item.name} className="w-4 h-4 shrink-0" />
                  <span className="tracking-tight">{item.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Reverse Flow) */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
            className="flex gap-3.5 shrink-0"
          >
            {[...arsenal.row2, ...arsenal.row2].map((item, idx) => {
              const colorClass = techColorMap[item.name] || 'hover:border-white/30';
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className={`px-5 py-2.5 rounded-2xl bg-[#141314]/90 border border-white/10 ${colorClass} text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2.5 whitespace-nowrap cursor-default hover:scale-105`}
                >
                  <TechIcon name={item.name} className="w-4 h-4 shrink-0" />
                  <span className="tracking-tight">{item.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Marquee Row 3: Professional Disciplines (Forward Flow) */}
        <div className="flex overflow-hidden pt-2">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 42, ease: 'linear', repeat: Infinity }}
            className="flex gap-3.5 shrink-0"
          >
            {[
              'Full-Stack Architect',
              'AI / ML Engineer',
              'React 19 & Next.js 16 Specialist',
              'TypeScript Pro',
              'SaaS Product Builder',
              'Distributed Systems Engineer',
              'Full-Stack Architect',
              'AI / ML Engineer',
              'React 19 & Next.js 16 Specialist',
              'TypeScript Pro',
              'SaaS Product Builder',
              'Distributed Systems Engineer',
            ].map((role, idx) => (
              <div
                key={`${role}-${idx}`}
                className="px-6 py-2.5 rounded-full bg-white/[0.025] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2.5 whitespace-nowrap"
              >
                <Sparkles className="w-3 h-3 text-[#ff6b3d]/70" />
                <span>{role}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

