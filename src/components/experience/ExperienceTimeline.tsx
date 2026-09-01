'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const TYPE_ICONS = {
  education: GraduationCap,
  internship: Briefcase,
  achievement: Award,
  patent: Award,
};

export default function ExperienceTimeline() {
  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-3"
          >
            <Sparkles size={12} />
            <span>EXPERIENCE &amp; MILESTONES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Academic &amp; Professional Journey
          </motion.h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl mx-auto">
            A chronological progression of research, enterprise internships, hackathons, and certifications.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical central line (desktop) / left line (mobile) */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-emerald-500/50 via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.journey.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = TYPE_ICONS[item.type] || Briefcase;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-[#08080A] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10">
                    <Icon size={14} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`ml-12 sm:ml-0 w-full sm:w-[45%] ${
                      isEven ? 'sm:pl-10' : 'sm:pr-10'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-3xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.035] hover:border-emerald-500/30 transition-all duration-300 relative group shadow-lg">
                      {/* Period Badge & Category */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.04] text-emerald-300 border border-white/[0.08]">
                          {item.period}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs font-mono text-zinc-400 mt-1 mb-4">
                        {item.organization}
                      </p>

                      {/* Highlight callout if present */}
                      {item.highlight && (
                        <div className="mb-4 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                          {item.highlight}
                        </div>
                      )}

                      {/* Description Bullet points */}
                      <ul className="space-y-2">
                        {item.description.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed"
                          >
                            <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mt-28">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              CREDENTIALS
            </span>
            <h3 className="text-2xl font-bold text-white">Verified Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] flex items-start gap-3.5 hover:border-white/20 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <BookOpen size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block mb-0.5">
                    {cert.provider}
                  </span>
                  <h4 className="text-xs font-semibold text-white leading-snug">
                    {cert.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
