'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Brain,
  Database,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const ICONS_MAP: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Brain,
  Database,
};

export default function SkillsBento() {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-3"
          >
            <Sparkles size={12} />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Core Technical Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl"
          >
            Technologies and frameworks I have practically applied in production, hackathons, and published research.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((group, idx) => {
            const Icon = ICONS_MAP[group.iconName] || Code2;
            const isLarge = idx === 0 || idx === 3;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-7 rounded-3xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.035] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Ambient glow on hover */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-500/5 blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:border-emerald-500/40 group-hover:scale-105 transition-all">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 font-sans">
                    {group.category}
                  </h3>

                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs font-mono px-3 py-1.5 rounded-xl border transition-colors ${
                        skill.highlight
                          ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300'
                          : 'bg-white/[0.03] border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
