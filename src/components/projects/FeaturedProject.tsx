'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  FileText,
  ArrowRight,
  Award,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function FeaturedProject() {
  const project = PORTFOLIO_DATA.projects.find((p) => p.featured) || PORTFOLIO_DATA.projects[0];

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 lg:p-12 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Ambient background glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff6b3d]/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#ff6b3d]/15 transition-colors" />

        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          {/* Left Column: Project Narrative */}
          <div className="flex-1 max-w-2xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#ff6b3d]/15 text-[#ff8e66] border border-[#ff6b3d]/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                <Sparkles size={12} />
                FEATURED PROJECT
              </span>

              {project.badge && (
                <span className="px-3 py-1 rounded-full bg-white/[0.05] text-zinc-300 border border-white/10 text-xs font-mono flex items-center gap-1.5">
                  <Award size={12} className="text-[#ff8e66]" />
                  <span>{project.badge}</span>
                </span>
              )}

              <span className="text-xs font-mono text-zinc-500">
                {project.year} • {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {project.title}
            </h3>

            <p className="text-sm font-mono text-[#ff8e66]/90 mb-6">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block mb-1">
                  The Problem
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-[#ff8e66] font-bold uppercase tracking-wider block mb-1">
                  The Solution
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-2 mb-8">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                Core Capabilities:
              </span>
              {project.features.slice(0, 4).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 size={14} className="text-[#ff6b3d] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs font-mono tracking-wider uppercase inline-flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                >
                  <span>Live App</span>
                  <ExternalLink size={13} />
                </a>
              )}

              <Link
                href={`/projects/${project.slug}`}
                className="px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 font-mono text-xs inline-flex items-center gap-2 transition-colors"
              >
                <FileText size={13} />
                <span>Case Study</span>
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/10 text-zinc-300 hover:text-white border border-white/15 flex items-center justify-center transition-colors"
                  aria-label="View Source on GitHub"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Preview */}
          {project.image && (
            <div className="w-full lg:w-[420px] shrink-0">
              <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0B] shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0E] via-transparent to-transparent opacity-50" />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
