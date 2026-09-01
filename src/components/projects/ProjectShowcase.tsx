'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

const CATEGORIES = ['All', 'AI / ML', 'Full Stack', 'Data Science', 'Web Apps'] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web Apps') {
      return project.category === 'Web Apps' || project.category === 'Data Science';
    }
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-3"
            >
              <Briefcase size={12} />
              <span>PROJECT PORTFOLIO</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-sm sm:text-base text-zinc-400 mt-2 max-w-lg"
            >
              Real applications engineered with modern technologies to solve concrete real-world problems.
            </motion.p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md self-start md:self-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 rounded-xl bg-white"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Featured Project */}
        <FeaturedProject />

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
