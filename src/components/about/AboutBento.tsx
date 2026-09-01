'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  MapPin,
  Clock,
  GraduationCap,
  Award,
  Cpu,
  ArrowUpRight,
  Code2,
  Terminal,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { formatTimeInZone } from '@/lib/utils';

export default function AboutBento() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    setMounted(true);
    setCurrentTime(formatTimeInZone('Asia/Kolkata'));
    const interval = setInterval(() => {
      setCurrentTime(formatTimeInZone('Asia/Kolkata'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const bento = PORTFOLIO_DATA.bentoAbout;

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-4"
          >
            <Sparkles size={12} />
            <span>ABOUT &amp; PHILOSOPHY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl"
          >
            Turning ideas into{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent">
              working products.
            </span>
          </motion.h2>
        </div>

        {/* 12-Column Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Core Bio & Profile (Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 p-7 sm:p-9 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  01 // PROFILE &amp; IDENTITY
                </span>
                <span className="text-xs font-mono text-zinc-600">ENGINEERING</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-emerald-500/30 shrink-0 shadow-lg bg-white/[0.04]">
                  <Image
                    src="/profile.jpg"
                    alt="Dhanushkaran M"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                  <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#08080A]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {bento.intro.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {bento.intro.bio}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
              {['Full Stack Systems', 'Agentic LLMs', 'Spring Boot', 'Next.js', 'Data Science'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Card 2: Current Focus (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 p-7 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Cpu size={20} />
              </div>

              <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
                02 // CURRENT FOCUS
              </span>

              <h3 className="text-lg font-bold text-white mt-2 mb-3">
                {bento.currentFocus.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {bento.currentFocus.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Active in R&amp;D + Production Builds</span>
            </div>
          </motion.div>

          {/* Card 3: Location & Live Time (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-zinc-500 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <MapPin size={15} className="text-emerald-400" />
                  <span>LOCATION</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-600">03</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {bento.location.city}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                {bento.location.region}
              </p>
              <p className="text-[11px] font-mono text-zinc-600 mt-1">
                {bento.location.coordinates}
              </p>
            </div>

            {/* Live Clock */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Clock size={14} className="text-emerald-400" />
                <span>LOCAL TIME (IST)</span>
              </div>
              <span suppressHydrationWarning className="font-mono text-xs font-semibold text-emerald-300">
                {mounted ? currentTime : '05:30:00 PM'}
              </span>
            </div>
          </motion.div>

          {/* Card 4: Academic Foundation (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-zinc-500 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <GraduationCap size={16} className="text-emerald-400" />
                  <span>EDUCATION</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-600">04</span>
              </div>

              <span className="inline-block text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                {bento.education.cgpa}
              </span>

              <h3 className="text-base font-bold text-white">
                {bento.education.degree}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                {bento.education.institution}
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                {bento.education.affiliation}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-right font-mono text-xs text-zinc-500">
              {bento.education.period}
            </div>
          </motion.div>

          {/* Card 5: Patent Publication (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-4 p-7 rounded-3xl bg-emerald-500/[0.03] border border-emerald-500/25 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <Award size={12} />
                  PATENT PUBLISHED
                </span>
                <span className="text-[11px] font-mono text-zinc-600">05</span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug">
                {bento.patent.name}
              </h3>

              <p className="text-xs font-mono text-emerald-400/90 mt-2 font-medium">
                {bento.patent.appNumber}
              </p>
              <p className="text-[11px] font-mono text-zinc-500 mt-1">
                Official Journal Publication • {bento.patent.publishedDate}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Govt. of India</span>
              <span className="text-emerald-400">Verified</span>
            </div>
          </motion.div>

          {/* Card 6: Developer Philosophy (Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-12 p-6 sm:p-8 rounded-3xl bg-white/[0.015] border border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                <Code2 size={20} className="text-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  06 // ENGINEERING PHILOSOPHY
                </span>
                <blockquote className="text-sm sm:text-base font-medium text-zinc-200 italic">
                  "{bento.philosophy.quote}"
                </blockquote>
              </div>
            </div>

            <a
              href="#contact"
              className="shrink-0 text-xs font-mono px-4 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 flex items-center gap-2 transition-colors"
            >
              <span>Work Together</span>
              <ArrowUpRight size={13} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
