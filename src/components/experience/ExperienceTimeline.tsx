'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MapPin,
} from 'lucide-react';
import { WORK_EXPERIENCE_DATA, TIMELINE_DATA } from '@/data/portfolioData';

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#0F0E0E] overflow-hidden z-20"
      aria-label="Professional Experience &amp; Engineering Milestones"
    >
      <div id="my-journey" className="absolute -top-10" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ff6b3d]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.04)]"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#ff6b3d]" />
            <span className="tracking-widest uppercase font-medium">INDUSTRY EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.02em] leading-[1.0] text-white"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Work{' '}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-lg mx-auto"
          >
            Factual software engineering and data science internships verified against official records.
          </motion.p>
        </div>

        {/* Vertical Animated Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Static Background Track */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/[0.08] md:-translate-x-1/2 pointer-events-none" />

          {/* Progressive Animated Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#ff6b3d] via-[#ff8e66] to-white/20 origin-top md:-translate-x-1/2 pointer-events-none z-0"
          />

          <div className="space-y-12 md:space-y-16">
            {WORK_EXPERIENCE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-[#141313] border-2 border-[#ff6b3d] flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,107,61,0.3)] z-10"
                  >
                    {item.id === 'litz-technologies' ? (
                      <Briefcase className="w-4 h-4 text-[#ff8e66]" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-[#ff8e66]" />
                    )}
                  </motion.div>

                  {/* Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`ml-12 md:ml-0 w-full md:w-[46%] ${
                      isEven ? 'md:pl-8' : 'md:pr-8'
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#131214]/90 backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-300 relative group shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                      {/* Top Date & Role Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#ff6b3d]/10 text-[#ff8e66] border border-[#ff6b3d]/25">
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Company Name & Role Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                        {item.company}
                      </h3>
                      <p className="text-xs font-mono text-zinc-300 font-medium mb-4">
                        {item.role}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Factual Bullet Points from Resume */}
                      <div className="space-y-2.5 mb-6">
                        {item.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b3d] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Pills */}
                      <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Academic Foundation & Patent Milestones Footnote */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">
              RELATED ACADEMIC &amp; RESEARCH MILESTONES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
                <div className="flex items-center gap-2 mb-1.5 text-white font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-[#ff8e66]" />
                  <span>B.Tech AI &amp; Data Science</span>
                </div>
                <p className="text-xs font-mono text-zinc-400">
                  V.S.B College of Engineering (2023 – 2027) • CGPA 8.10
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
                <div className="flex items-center gap-2 mb-1.5 text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#ff8e66]" />
                  <span>Govt. Indian Patent</span>
                </div>
                <p className="text-xs font-mono text-zinc-400">
                  App No. 202541099319 A (Nov 2025) • Smart Traffic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
