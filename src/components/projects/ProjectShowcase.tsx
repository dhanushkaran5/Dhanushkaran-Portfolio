'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Sparkles,
  ArrowRight,
  Layers,
  Layers3,
  Cpu,
  TrendingUp,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';

const CATEGORIES = ['All', 'AI & ML', 'Full-Stack', 'Web Apps'] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const featuredProject = PORTFOLIO_DATA.projects.find((p) => p.featured) || PORTFOLIO_DATA.projects[0];
  const secondRowProjects = PORTFOLIO_DATA.projects.filter(
    (p) => p.id === 'carbon-calculator' || p.id === 'ai-summarizer'
  );
  const remainingProjects = PORTFOLIO_DATA.projects.filter(
    (p) => p.id !== featuredProject.id && p.id !== 'carbon-calculator' && p.id !== 'ai-summarizer'
  );

  return (
    <section
      id="work"
      className="relative z-20 py-24 sm:py-32 bg-[#0B0B0C] overflow-hidden"
      aria-label="Featured Projects Portfolio"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ff6b3d]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.04)]"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#ff6b3d]" />
            <span className="tracking-widest uppercase font-medium">FEATURED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.0] text-white mb-4"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Engineered{' '}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h2>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-zinc-400 mt-4 tracking-wider uppercase"
          >
            <span>05 VERIFIED PROJECTS</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span>01 PUBLISHED PATENT</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span>15+ TECHNOLOGIES</span>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                      : 'bg-white/[0.04] text-zinc-400 border border-white/10 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Bento Project Grid */}
        {activeFilter === 'All' ? (
          <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto">
            {/* Row 1: Featured Project (AI Placement Mentor Agent - Full Span) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <ProjectCard project={featuredProject} featured={true} />
            </div>

            {/* Row 2: Tree Plantation Calculator & AI Summarizer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {secondRowProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Row 3: Remaining Projects (Patent & Tech Architecture) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {remainingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ) : (
          /* Filtered Category Grid */
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View All Projects Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] group"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#ff8e66] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
