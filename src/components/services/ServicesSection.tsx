'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  Sparkles,
  Cloud,
  CodeXml,
  CheckCircle2,
  Clock,
  Briefcase,
  Star,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Cpu,
  Sparkles,
  Cloud,
  CodeXml,
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const expertiseList = PORTFOLIO_DATA.expertise;
  const current = expertiseList[activeTab] || expertiseList[0];
  const CurrentIcon = iconMap[current.iconName] || Layers;

  return (
    <section
      id="services"
      className="relative z-20 py-20 sm:py-28 bg-[#0F0E0E] overflow-hidden"
      aria-label="My Core Expertise"
    >
      <div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] mb-3 sm:mb-4 text-[#C2EF3A] text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-mono">
            <div className="w-3.5 h-3.5 rounded-full bg-[#C2EF3A] flex items-center justify-center text-[#0F0E0E] flex-shrink-0 font-bold text-[9px]">
              ✦
            </div>
            <span>MY CORE EXPERTISE</span>
          </div>

          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] sm:leading-[1.05] text-white max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Professional disciplines engineered for high performance.
          </h2>
        </div>

        {/* 2-Column Split: Disciplines Sidebar + Active Details Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Left Sidebar */}
          <div
            className="relative flex flex-col justify-between rounded-[24px] sm:rounded-[30px] border border-white/[0.04] p-4 sm:p-6 overflow-hidden"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.95) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="relative z-10 flex flex-col gap-3 lg:gap-4 flex-1">
              <div className="hidden lg:block mb-2">
                <p className="text-[10px] font-mono font-bold tracking-[0.15em] text-white/35 uppercase mb-1">
                  Disciplines
                </p>
                <h3 className="text-sm font-extrabold text-white tracking-tight">
                  Expertise Areas
                </h3>
              </div>

              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                {expertiseList.map((item, idx) => {
                  const ItemIcon = iconMap[item.iconName] || Layers;
                  const isActive = activeTab === idx;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(idx)}
                      className={`group relative flex items-center gap-3 p-3 rounded-[18px] min-w-[170px] lg:min-w-0 lg:w-full text-left overflow-hidden flex-shrink-0 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'border-white/10 bg-[#242020]'
                          : 'border-white/[0.04] bg-[#1a1818]/60 hover:bg-[#201d1d]'
                      }`}
                      style={{
                        borderWidth: '1px',
                        boxShadow: isActive ? '0 6px 20px 0 rgba(0,0,0,0.3)' : 'none',
                      }}
                    >
                      {/* Active Left Pill Accent */}
                      {isActive && (
                        <div
                          className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-[#C2EF3A]"
                          style={{ boxShadow: '0 0 8px rgba(194, 239, 58, 0.6)' }}
                        />
                      )}

                      <div
                        className={`w-9 h-9 rounded-[12px] flex items-center justify-center border flex-shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'bg-[#C2EF3A]/10 border-[#C2EF3A]/30 text-[#C2EF3A]'
                            : 'bg-white/5 border-white/5 text-white/50 group-hover:text-white/80'
                        }`}
                      >
                        <ItemIcon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-xs font-bold truncate transition-colors ${
                            isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-[9px] font-medium text-white/40 truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Meta Badges (Desktop) */}
            <div className="relative z-10 hidden lg:flex items-center gap-2 mt-6 pt-4 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0E0D0D] border border-white/[0.03] flex-1 justify-center">
                <Clock className="w-3 h-3 text-[#C2EF3A]" />
                <span className="text-[10px] font-bold font-mono text-white/55 uppercase">
                  01+ Years Exp
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0E0D0D] border border-white/[0.03] flex-1 justify-center">
                <Briefcase className="w-3 h-3 text-[#C2EF3A]" />
                <span className="text-[10px] font-bold font-mono text-white/55 uppercase">
                  08+ Projects
                </span>
              </div>
            </div>
          </div>

          {/* Right Pane: Active Discipline Details */}
          <div
            className="relative rounded-[26px] sm:rounded-[30px] border border-white/[0.04] p-5 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between"
            style={{
              background:
                'linear-gradient(180deg, rgba(30, 28, 28, 0.45) 0%, rgba(21, 19, 19, 0.95) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Discipline Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] flex items-center justify-center text-[#C2EF3A] border"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(194, 239, 58, 0.1) 0%, rgba(194, 239, 58, 0.02) 100%)',
                          borderColor: 'rgba(194, 239, 58, 0.25)',
                          boxShadow: '0 4px 20px rgba(194, 239, 58, 0.12)',
                        }}
                      >
                        <CurrentIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {current.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs font-bold text-[#C2EF3A] tracking-wider uppercase font-mono mt-0.5">
                          {current.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1.5 rounded-lg bg-[#0E0D0D] border border-white/[0.04] text-[10px] sm:text-[11px] font-mono font-bold text-white/55 uppercase flex items-center gap-1.5">
                        <Briefcase className="w-3 h-3 text-[#C2EF3A]" />
                        <span>{current.projectCount}</span>
                      </span>
                      <span className="px-2.5 py-1.5 rounded-lg bg-[#0E0D0D] border border-white/[0.04] text-[10px] sm:text-[11px] font-mono font-bold text-white/55 uppercase flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-[#C2EF3A]" />
                        <span>{current.experience}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-white/60 mb-6">
                    {current.description}
                  </p>

                  <div className="h-px bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] mb-6" />

                  {/* Tech Stack & Proficiency Bars */}
                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 font-mono font-bold mb-3">
                      Tech Stack &amp; Proficiency
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {current.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-white/[0.04] bg-[#141212]/80"
                        >
                          <span className="text-xs font-bold text-white/85 font-mono truncate">
                            {skill.name}
                          </span>
                          <div className="flex flex-col items-end gap-1 w-14 sm:w-16 shrink-0">
                            <span className="text-[9px] font-mono font-bold text-[#C2EF3A]">
                              {skill.percentage}%
                            </span>
                            <div className="w-full h-1 bg-[#1C1A1A] rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full bg-gradient-to-r from-[#C2EF3A]/60 to-[#C2EF3A] rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Focus & Competencies Checkmarks */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 font-mono font-bold mb-3">
                      Core Focus &amp; Competencies
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.competencies.map((comp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-white/70 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C2EF3A] shrink-0 mt-0.5" />
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Card: Interested in this service? */}
                <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-black/20 -mx-5 -mb-5 sm:-mx-8 sm:-mb-8 lg:-mx-10 lg:-mb-10 p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#C2EF3A]/10 border border-[#C2EF3A]/20 flex items-center justify-center text-[#C2EF3A]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Interested in this service?</h4>
                      <p className="text-[10px] text-white/40">Let&apos;s discuss your project</p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-xs font-semibold text-white transition-colors"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-3 h-3 text-[#C2EF3A]" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
