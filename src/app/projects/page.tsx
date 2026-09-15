'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  ArrowLeft,
  FileText,
  Award,
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const CATEGORIES = ['All', 'AI & ML', 'Full-Stack', 'Web Apps'] as const;

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const allProjects = PORTFOLIO_DATA.projects;

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [allProjects, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white selection:bg-white/20 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 pt-32 sm:pt-40 pb-24">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b3d]" />
            <span className="tracking-widest uppercase">CASE STUDIES &amp; PRODUCTION APPS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-[-0.03em] leading-[1.0] text-[clamp(2.5rem,6vw,4.5rem)] mb-6 select-none"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Engineered{' '}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            A comprehensive catalog of autonomous AI systems, green technology engines, patented architectures, and high-performance full-stack web applications.
          </motion.p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by technology (Python, Spring Boot, React...), role, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-[#ff6b3d]/50 focus:bg-white/[0.05] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
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
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-white/10 bg-[#141313]/50">
            <p className="text-base text-zinc-400 font-mono">
              No projects found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-mono hover:bg-white/20 transition-colors cursor-pointer"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl p-6 sm:p-8 bg-[#131214]/90 backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-300 group flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.06] text-white font-medium border border-white/10">
                          {project.category}
                        </span>
                        {project.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff6b3d]/10 text-[#ff8e66] border border-[#ff6b3d]/25">
                            {project.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-zinc-500 font-bold">
                        {project.year}
                      </span>
                    </div>

                    {/* Image preview if available */}
                    {project.image && (
                      <div className="relative w-full h-40 sm:h-48 mb-5 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0B]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <Link href={`/projects/${project.slug}`} className="block">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors mb-1.5 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#ff8e66]/90 mb-4">
                        {project.subtitle}
                      </p>
                    </Link>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-6">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b3d] shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 mb-6 border-t border-white/[0.06]">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-2.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                          >
                            <span>Live App</span>
                            <ExternalLink size={12} />
                          </a>
                        )}

                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/25 text-white font-mono text-xs transition-colors"
                        >
                          <FileText size={12} />
                          <span>Case Study</span>
                        </Link>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/25 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                            aria-label="View Source on GitHub"
                          >
                            <Github size={14} />
                          </a>
                        )}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        aria-label={`View ${project.title}`}
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}
