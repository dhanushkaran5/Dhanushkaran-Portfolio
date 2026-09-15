'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CodeXml,
  Layout,
  Server,
  Database,
  Brain,
  Cloud,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import TechIcon from '@/components/ui/TechIcon';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Server,
  Database,
  Brain,
  Cloud,
  ShieldCheck,
};

export default function SkillsBento() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const categories = PORTFOLIO_DATA.skillsData;

  const filteredCategories =
    activeTab === 'all'
      ? categories
      : categories.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      className="relative z-20 py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#0F0E0E] overflow-hidden"
      aria-label="Technical Skills and Expertise"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <CodeXml className="w-3.5 h-3.5 text-zinc-400" />
            <span>Technical Skills and Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[0.95] text-white"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Technologies i{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              master
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            An exhaustive matrix of modern frameworks, programming languages, database architectures, and applied AI tools honed through production engineering and published research.
          </motion.p>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-white/[0.04] text-zinc-400 border border-white/10 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                    : 'bg-white/[0.04] text-zinc-400 border border-white/10 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skills Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, index) => {
            const Icon = iconMap[group.iconName] || Layout;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl p-7 bg-[#141313]/85 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {group.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Skills List with Proficiency Meters */}
                  <div className="space-y-4 mb-6">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-zinc-200 font-medium flex items-center gap-2">
                            <TechIcon name={skill.name} className="w-4 h-4 shrink-0" />
                            <span>{skill.name}</span>
                            {skill.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            )}
                          </span>
                          <div className="flex items-center gap-2 text-zinc-500">
                            {'experience' in skill && Boolean((skill as any).experience) && (
                              <span>{(skill as any).experience}</span>
                            )}
                            <span className="text-zinc-300 font-semibold">{skill.level}%</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-zinc-400 via-zinc-200 to-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>{group.skills.length} Technologies</span>
                  <span className="text-zinc-400">Verified Proficiency</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
