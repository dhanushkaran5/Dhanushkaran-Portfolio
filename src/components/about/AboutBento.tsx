'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Plus,
  Github,
  Linkedin,
  Instagram,
  Code,
  Brain,
  Database,
  Cpu,
  Award,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function AboutBento() {
  return (
    <section
      id="about"
      className="relative z-20 w-full bg-[#0F0E0E] overflow-x-clip pb-16 sm:pb-24 rounded-t-[32px] md:rounded-t-[48px] lg:rounded-t-[64px] border-t border-white/15 shadow-[0_-24px_48px_rgba(0,0,0,0.8)]"
      aria-label={`About ${PORTFOLIO_DATA.personal.name} - ${PORTFOLIO_DATA.personal.role}`}
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content={PORTFOLIO_DATA.personal.name} />
      <meta itemProp="jobTitle" content={PORTFOLIO_DATA.personal.role} />
      <meta itemProp="description" content={PORTFOLIO_DATA.personal.bio} />
      <meta itemProp="url" content="https://dhanushkaran-portfolio.vercel.app" />

      {/* Header Container with Glowing Dome SVG */}
      <div className="pt-0 pb-4 sm:pb-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full text-center">
        <div className="relative mx-auto -mt-1 sm:-mt-1 md:-mt-1.5 -mb-6 sm:-mb-10 md:-mb-12 w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[640px] md:max-w-[800px] h-[95px] xs:h-[125px] sm:h-[220px] md:h-[265px] pointer-events-none overflow-visible z-10 flex justify-center items-center">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 600 200"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="aboutGlowLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff3c00" stopOpacity="0" />
                <stop offset="25%" stopColor="#ff5500" stopOpacity="0.6" />
                <stop offset="45%" stopColor="#ffb088" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="55%" stopColor="#ffb088" stopOpacity="0.9" />
                <stop offset="75%" stopColor="#ff5500" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff3c00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 50,150 Q 300,50 550,150"
              fill="none"
              stroke="url(#aboutGlowLineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b3d] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-white/70 uppercase">
            {PORTFOLIO_DATA.bentoItems.badge}
          </span>
        </div>

        {/* Section Heading */}
        <h2
          className="text-[2.35rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-black tracking-[-0.03em] leading-[0.95] sm:leading-[0.9] text-white px-2 sm:px-0"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        >
          {PORTFOLIO_DATA.bentoItems.headingMain}{' '}
          <span className="font-bold px-1 text-white animate-pulse">
            {PORTFOLIO_DATA.bentoItems.headingAccent}
          </span>
        </h2>

        {/* Italic Serif Subtitle */}
        <p
          className="text-xs xs:text-sm sm:text-xl md:text-2xl mt-2.5 sm:mt-4 max-w-2xl mx-auto italic px-3 sm:px-0 font-serif"
          style={{ color: 'rgba(255, 255, 255, 0.95)' }}
        >
          {PORTFOLIO_DATA.bentoItems.subtitle}
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {/* Card 1: Profile Spotlight Card with Larger Portrait (Span 2) */}
          <div
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/[0.08] hover:border-white/20 transition-all duration-300 col-span-2 p-4 sm:p-6 lg:p-7 flex flex-col justify-between cursor-pointer select-none min-h-[180px] sm:min-h-[210px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.55) 0%, rgba(21, 19, 19, 0.95) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Passport-Style Professional Portrait (Instruction 10) */}
                <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl overflow-hidden flex-shrink-0 border-2 border-white/20 shadow-[0_0_30px_rgba(255,107,61,0.2)] group-hover:scale-[1.03] transition-transform duration-300">
                  <Image
                    src="/portrait.jpg"
                    alt="Dhanushkaran M - Professional Portrait"
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="text-left flex flex-col justify-center flex-1">
                  <span className="text-[9px] xs:text-[10px] font-mono font-medium tracking-[0.15em] text-[#ff8e66] uppercase block mb-1">
                    B.Tech AI &amp; Data Science • 8.10 CGPA
                  </span>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-1.5">
                    Dhanushkaran M
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
                    {PORTFOLIO_DATA.personal.bio}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 bg-neutral-900/80 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-neutral-950 group-hover:border-white/25 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Card 2: Marquee Ticker Pill (Span 2) */}
          <div
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/[0.04] hover:border-white/15 transition-all duration-300 col-span-2 md:col-span-2 p-2.5 xs:p-3 sm:p-4 flex items-center cursor-pointer select-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.9) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="flex w-full items-center justify-between overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-marquee py-1 text-[9.5px] xs:text-[10px] sm:text-xs font-mono font-bold tracking-[0.1em] text-white/50 uppercase">
                <span>
                  {PORTFOLIO_DATA.bentoItems.ticker}&nbsp;
                </span>
                <span>
                  {PORTFOLIO_DATA.bentoItems.ticker}&nbsp;
                </span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-full bg-gradient-to-l from-[#171515] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 3: Projects Showcase Stack (Span 1) */}
          <a
            href="#work"
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/[0.04] hover:border-white/15 transition-all duration-300 p-3.5 xs:p-4 sm:p-5 flex flex-col justify-between cursor-pointer select-none col-span-1 min-h-[145px] sm:min-h-[160px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.9) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="relative w-full h-14 pt-1 flex items-center justify-center pointer-events-none">
                <div className="absolute w-16 h-10 rounded-md bg-neutral-800 border border-white/10 -translate-x-2 -rotate-12 opacity-40 group-hover:-translate-x-4 transition-transform" />
                <div className="absolute w-17 h-10.5 rounded-md bg-neutral-800 border border-white/15 translate-x-2 rotate-12 opacity-60 group-hover:translate-x-4 transition-transform" />
                <div className="relative w-20 h-12 rounded-lg bg-neutral-950 border border-white/20 z-10 shadow-lg flex flex-col justify-between p-1.5 group-hover:scale-105 transition-transform">
                  <span className="text-[7px] font-mono text-white/80 font-bold truncate">AI Placement Mentor</span>
                  <div className="flex justify-between items-center">
                    <span className="text-[6px] text-zinc-400 font-mono">React &amp; AI</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#30D158]" />
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[8.5px] font-mono tracking-[0.15em] text-white/30 uppercase block">
                  Showcase
                </span>
                <h3 className="text-sm xs:text-base font-bold text-white tracking-tight mt-0.5">
                  Projects (5+)
                </h3>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/5 bg-neutral-900/60 flex items-center justify-center text-white/30 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </a>

          {/* Card 4: Core Expertise (Span 1) */}
          <div
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/[0.04] hover:border-white/15 transition-all duration-300 p-3.5 xs:p-4 sm:p-5 flex flex-col justify-between cursor-pointer select-none col-span-1 min-h-[145px] sm:min-h-[160px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.9) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-[8.5px] font-mono tracking-[0.15em] text-white/30 uppercase block mb-2 text-center">
                  Core Stack
                </span>
                <div className="flex flex-col gap-1.5 items-center w-full">
                  <div className="flex gap-1">
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[8px] sm:text-[9px] text-[#3776AB] font-mono">
                      Python
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[8px] sm:text-[9px] text-[#ED8B00] font-mono">
                      Java
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[8px] sm:text-[9px] text-[#61DAFB] font-mono">
                      React 19
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[8px] sm:text-[9px] text-[#6DB33F] font-mono">
                      Spring Boot
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[8.5px] font-mono tracking-[0.15em] text-white/30 uppercase block">
                  Focus
                </span>
                <h3 className="text-sm font-bold text-white tracking-tight">AI &amp; Full-Stack</h3>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/5 bg-neutral-900/60 flex items-center justify-center text-white/30 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>

          {/* Card 5: Specialization / Services Offering (Span 2) */}
          <div
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/[0.04] hover:border-white/15 transition-all duration-300 p-3.5 xs:p-4 sm:p-5 flex flex-col justify-between cursor-pointer select-none col-span-2 min-h-[145px] sm:min-h-[160px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.9) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 h-full pr-8">
                <div className="text-left">
                  <span className="text-[8.5px] font-mono tracking-[0.15em] text-white/30 uppercase block">
                    Specialization
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                    Engineering Domains
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-1.5 w-full sm:w-auto">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Brain className="w-3 h-3 text-[#FF9F0A]" />
                    <span className="text-[9px] text-white/70 font-semibold font-mono">Generative AI</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Code className="w-3 h-3 text-[#38BDF8]" />
                    <span className="text-[9px] text-white/70 font-semibold font-mono">Full-Stack Web</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Cpu className="w-3 h-3 text-[#A78BFA]" />
                    <span className="text-[9px] text-white/70 font-semibold font-mono">Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Database className="w-3 h-3 text-[#34D399]" />
                    <span className="text-[9px] text-white/70 font-semibold font-mono">Data Science</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/5 bg-neutral-900/60 flex items-center justify-center text-white/30 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>

          {/* Card 6: Stay Connected / Profiles (Span 2) */}
          <div
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/[0.04] hover:border-white/15 transition-all duration-300 p-3.5 xs:p-4 sm:p-5 flex flex-col justify-between cursor-pointer select-none col-span-2 min-h-[145px] sm:min-h-[160px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.9) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center justify-center gap-3 pt-2 flex-1">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/60 hover:text-[#0A84FF] hover:bg-[#0A84FF]/10 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/60 hover:text-[#FF2D55] hover:bg-[#FF2D55]/10 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              <div>
                <span className="text-[8.5px] font-mono tracking-[0.15em] text-white/30 uppercase block">
                  Stay Connected
                </span>
                <h3 className="text-sm xs:text-base font-bold text-white tracking-tight mt-0.5">
                  Professional Profiles
                </h3>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/5 bg-neutral-900/60 flex items-center justify-center text-white/30 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>

          {/* Card 7: Verified Stats Metrics (Span 2) */}
          <div
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/[0.04] hover:border-white/15 transition-all duration-300 col-span-2 flex flex-col justify-between p-3.5 sm:p-5 cursor-pointer select-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.9) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="flex gap-2 sm:gap-3 w-full h-full">
              <div className="flex-1 flex flex-col justify-center items-center py-2 sm:py-3 px-1 rounded-xl sm:rounded-2xl border border-white/[0.03] bg-black/40">
                <span className="text-xl sm:text-2xl font-black text-[#ff8e66] font-mono">01</span>
                <span className="text-[8px] font-semibold text-white/40 uppercase tracking-widest mt-1">Patent</span>
                <span className="text-[7px] font-medium text-white/30 uppercase tracking-wider">Publication</span>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center py-2 sm:py-3 px-1 rounded-xl sm:rounded-2xl border border-white/[0.03] bg-black/40">
                <span className="text-xl sm:text-2xl font-black text-white/95 font-mono">8.10</span>
                <span className="text-[8px] font-semibold text-white/40 uppercase tracking-widest mt-1">Academic</span>
                <span className="text-[7px] font-medium text-white/30 uppercase tracking-wider">CGPA / 10</span>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center py-2 sm:py-3 px-1 rounded-xl sm:rounded-2xl border border-white/[0.03] bg-black/40">
                <span className="text-xl sm:text-2xl font-black text-white/95 font-mono">05+</span>
                <span className="text-[8px] font-semibold text-white/40 uppercase tracking-widest mt-1">Verified</span>
                <span className="text-[7px] font-medium text-white/30 uppercase tracking-wider">Projects</span>
              </div>
            </div>
          </div>

          {/* Card 8: Callout "Let's collaborate" (Span 4) */}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/[0.04] hover:border-white/15 transition-all duration-300 col-span-2 md:col-span-4 p-4 sm:p-6 flex flex-col justify-between cursor-pointer select-none min-h-[140px] sm:min-h-[160px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.9) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="text-white/20 group-hover:text-orange-400 transition-colors duration-300">
              <Plus className="w-5 h-5 animate-pulse" />
            </div>

            <div className="pr-10 pt-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.05] text-white">
                Let&apos;s <br />
                build <span className="font-serif italic font-normal text-white/90 lowercase pr-1">something impactful.</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mt-1">
                Open for software engineering and AI internships. Let&apos;s connect.
              </p>
            </div>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/5 bg-neutral-900/60 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-neutral-950 group-hover:border-white/15 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
