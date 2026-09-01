'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
    >
      {/* Top ambient hover glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] text-emerald-400 border border-white/[0.08]">
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-500">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5 leading-snug">
          {project.title}
        </h3>

        <p className="text-xs font-mono text-zinc-400 mb-4">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="space-y-1.5 mb-6">
          {project.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-4 mb-6 border-t border-white/[0.06]">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="LIVE"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors py-1"
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="CODE"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors py-1"
              >
                <Github size={13} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <span className="text-zinc-600 group-hover:text-emerald-400 transition-colors">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
