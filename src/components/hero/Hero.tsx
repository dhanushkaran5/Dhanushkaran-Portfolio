'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import HeroBackground from './HeroBackground';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

// Helper for smooth staggered editorial text
const AnimatedWord = ({
  text,
  delayStart = 0,
}: {
  text: string;
  delayStart?: number;
}) => {
  return (
    <span className="inline-flex overflow-visible">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.6,
            delay: delayStart + index * 0.045,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block will-change-[transform,opacity,filter]"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="sticky top-0 z-10 overflow-hidden w-full min-h-screen bg-[#0B0B0C] flex items-center justify-center select-none"
      aria-label={`${PORTFOLIO_DATA.personal.name} - ${PORTFOLIO_DATA.personal.role}`}
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content={PORTFOLIO_DATA.personal.name} />
      <meta itemProp="jobTitle" content={PORTFOLIO_DATA.personal.role} />
      <meta itemProp="description" content={PORTFOLIO_DATA.personal.bio} />
      <meta itemProp="url" content="https://dhanushkaran-portfolio.vercel.app" />

      {/* Horizon Arc Ambient Lighting Background */}
      <HeroBackground />

      {/* Main Hero Container */}
      <div className="relative z-20 w-full max-w-[1360px] min-h-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center justify-center pt-24 pb-16 pointer-events-auto">
        {/* Top-Left Corner Mono Metadata (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute left-6 md:left-10 lg:left-12 top-24 md:top-28 max-w-[200px] sm:max-w-[240px] text-left select-none pointer-events-none font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-relaxed tracking-[0.12em] text-white/50 hidden sm:block"
        >
          <span className="text-[#ff8e66] font-semibold">DHANUSHKARAN M</span>
          <br />
          AI &amp; DATA SCIENCE DEVELOPER
          <br />
          <span className="text-zinc-500">COIMBATORE, INDIA</span>
        </motion.div>

        {/* Top-Right Corner Status Badge (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute right-6 md:right-10 lg:right-12 top-24 md:top-28 max-w-[220px] text-right select-none pointer-events-none font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-relaxed tracking-[0.12em] text-white/50 hidden sm:block"
        >
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE FOR INTERNSHIP
          </span>
          <br />
          <span className="text-zinc-500">CGPA 8.10 • PATENT INVENTOR</span>
        </motion.div>

        {/* Small Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-300 mb-5 shadow-[0_0_20px_rgba(255,255,255,0.03)]"
        >
          <Sparkles className="w-3 h-3 text-[#ff8e66]" />
          <span className="tracking-widest uppercase">PORTFOLIO // 2025–2027</span>
        </motion.div>

        {/* Large Editorial Headline */}
        <h1
          className="w-full flex flex-col items-center leading-[0.92] select-none text-[clamp(2.7rem,8.5vw,7.8rem)] font-black tracking-[-0.04em] text-white subpixel-antialiased text-center"
          style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.18)',
          }}
          aria-label={`${PORTFOLIO_DATA.personal.name} - ${PORTFOLIO_DATA.personal.role}`}
        >
          {/* Row 1: AI & DS + GitHub */}
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-5 relative">
            <AnimatedWord text="AI & DS" delayStart={0.2} />
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform duration-300 hover:scale-125 text-white/40 hover:text-white pointer-events-auto"
              aria-label={`${PORTFOLIO_DATA.personal.name} on GitHub`}
            >
              <Github className="w-[0.44em] h-[0.44em]" strokeWidth={1.5} />
            </motion.a>
          </div>

          {/* Row 2: LinkedIn + SOFTWARE */}
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-5 mt-1 sm:mt-2 relative">
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform duration-300 hover:scale-125 text-white/40 hover:text-white pointer-events-auto"
              aria-label={`${PORTFOLIO_DATA.personal.name} on LinkedIn`}
            >
              <Linkedin className="w-[0.44em] h-[0.44em]" strokeWidth={1.5} />
            </motion.a>
            <AnimatedWord text="SOFTWARE" delayStart={0.35} />
          </div>

          {/* Row 3: DEVELOPER + Instagram */}
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-5 mt-1 sm:mt-2 relative">
            <AnimatedWord text="DEVELOPER" delayStart={0.5} />
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              href={PORTFOLIO_DATA.personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform duration-300 hover:scale-125 text-white/40 hover:text-white pointer-events-auto"
              aria-label={`${PORTFOLIO_DATA.personal.name} on Instagram`}
            >
              <Instagram className="w-[0.44em] h-[0.44em]" strokeWidth={1.5} />
            </motion.a>
          </div>
        </h1>

        {/* Medium Editorial Portrait Frame (Instruction 10) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex items-center gap-3.5 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all shadow-[0_12px_40px_rgba(0,0,0,0.6)] group pointer-events-auto"
        >
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_15px_rgba(255,107,61,0.2)] group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/portrait.jpg"
              alt="Dhanushkaran M - Software Developer Portrait"
              fill
              sizes="(max-width: 768px) 48px, 56px"
              priority
              className="object-cover object-top"
            />
          </div>
          <div className="text-left font-mono">
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
              Dhanushkaran M
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>B.Tech AI &amp; DS • V.S.B Technical Campus</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 z-30 pointer-events-auto"
        >
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            className="group px-7 py-3 rounded-full font-semibold text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 inline-flex items-center gap-2.5 bg-white text-black hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
            aria-label="View Official Resume"
          >
            <span>View Resume</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#work"
            className="group px-6 py-3 rounded-full font-mono text-xs sm:text-sm text-zinc-300 hover:text-white border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
            aria-label="Explore Projects"
          >
            <span>Explore Work</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
