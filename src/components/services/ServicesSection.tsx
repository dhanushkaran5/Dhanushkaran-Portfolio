'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, LineChart, Server, Wrench, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Layers,
  Cpu,
  LineChart,
  Server,
  Wrench,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
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
            <span>SOLUTIONS &amp; EXPERTISE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            What I Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl"
          >
            Delivering thoughtful engineering across the entire software development life cycle.
          </motion.p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.iconName] || Layers;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-emerald-400 font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-400">
                  <span>Architecture &amp; Implementation</span>
                  <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore ↗
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
