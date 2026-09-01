'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  ExternalLink,
  Award,
  GraduationCap,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import HeroBackground from './HeroBackground';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Core Narrative & Actions (Span 7) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Availability / Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-medium tracking-widest text-emerald-300 uppercase">
              AI &amp; DATA SCIENCE DEVELOPER
            </span>
          </motion.div>

          {/* Name & Persona Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3"
          >
            <h2 className="text-sm sm:text-base font-mono tracking-[0.25em] text-zinc-400 uppercase font-semibold">
              {PORTFOLIO_DATA.personal.name}
            </h2>
          </motion.div>

          {/* Clean, natural typography headline without letter splitting */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1], delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6"
          >
            <span className="block text-white">
              Designing Smart Software
            </span>
            <span className="block mt-1 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              to Solve{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent font-black">
                Real Challenges.
              </span>
            </span>
          </motion.h1>

          {/* Subtitle / Positioning */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed mb-8"
          >
            {PORTFOLIO_DATA.personal.subheadline}
          </motion.p>

          {/* Quick Recruiter Key Highlights Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300">
              <Award size={13} className="text-emerald-400" />
              <span>Published Indian Patent</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300">
              <GraduationCap size={13} className="text-emerald-400" />
              <span>Anna Univ 8.10 CGPA</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300">
              <CheckCircle2 size={13} />
              <span>Open for SDE / AI Roles</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            {/* View Projects CTA */}
            <a
              href="#projects"
              data-cursor-text="VIEW"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
            >
              <span>Explore Selected Work</span>
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>

            {/* Download Resume Button */}
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="CV"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md text-white font-medium text-sm transition-all duration-300 hover:border-emerald-500/50"
            >
              <Download size={15} className="text-emerald-400" />
              <span>Download Resume</span>
              <ExternalLink size={12} className="opacity-50 group-hover:opacity-100" />
            </a>
          </motion.div>

          {/* Social & Contact Direct Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex items-center gap-6 text-zinc-400 text-xs font-mono"
          >
            <span className="text-zinc-600 hidden sm:inline">CONNECT:</span>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1"
              data-cursor-text="GITHUB"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>

            <span className="text-zinc-800">•</span>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors py-1"
              data-cursor-text="LINKEDIN"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>

            <span className="text-zinc-800">•</span>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1"
              data-cursor-text="EMAIL"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>

            <span className="text-zinc-800">•</span>

            <a
              href={`tel:${PORTFOLIO_DATA.personal.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors py-1"
              data-cursor-text="CALL"
            >
              <Phone size={14} />
              <span>{PORTFOLIO_DATA.personal.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: High-End Recruiter Spotlight Card (Span 5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="lg:col-span-5 flex justify-center items-center w-full"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] group">
            {/* Ambient Multi-Layer Glow Backlight */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/30 via-emerald-400/10 to-transparent rounded-[32px] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Rotating Conic Gradient Border Frame */}
            <div className="relative rounded-[28px] p-[1.5px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div
                className="absolute inset-[-150%] animate-border-spin opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(16,185,129,0.8), rgba(255,255,255,0.4) 25%, rgba(16,185,129,0.1) 50%, rgba(52,211,153,0.7) 75%, rgba(16,185,129,0.8))',
                }}
              />

              {/* Inner Glass Showcase Card */}
              <div className="relative rounded-[27px] bg-[#0A0A0F]/95 backdrop-blur-2xl p-3.5 sm:p-4 border border-white/10 overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-inner bg-gradient-to-b from-white/[0.04] to-black/80">
                  <Image
                    src="/profile.jpg"
                    alt="Dhanushkaran M - AI & Data Science Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Gradient Overlay for Text Readability at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/90 via-transparent to-transparent opacity-85" />

                  {/* Floating Recruiter Badge 1: Official Patent (Top Right) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#08080A]/85 backdrop-blur-md border border-emerald-500/30 text-emerald-300 shadow-xl flex items-center gap-1.5 text-[10px] font-mono font-semibold"
                  >
                    <Award size={12} className="text-emerald-400" />
                    <span>Patent Published</span>
                  </motion.div>

                  {/* Floating Recruiter Badge 2: Live Status Pill (Top Left) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#08080A]/85 backdrop-blur-md border border-white/15 text-zinc-300 shadow-xl flex items-center gap-1.5 text-[10px] font-mono"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to Roles</span>
                  </motion.div>

                  {/* Bottom Identity Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#08080A]/90 backdrop-blur-lg border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
                          <span>Dhanushkaran M</span>
                          <Sparkles size={12} className="text-emerald-400" />
                        </h3>
                        <p className="text-[11px] font-mono text-zinc-400">
                          AI &amp; Data Science Developer
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          8.10 CGPA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Banner */}
                <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✦</span>
                    <span>Anna University Scholar</span>
                  </div>
                  <span className="text-zinc-500">Coimbatore, IN</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
