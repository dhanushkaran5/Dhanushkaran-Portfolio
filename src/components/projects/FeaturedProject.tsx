'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
  TreePine,
  CheckCircle2,
  TrendingUp,
  Activity,
  Award,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function FeaturedProject() {
  const project = PORTFOLIO_DATA.projects.find((p) => p.featured) || PORTFOLIO_DATA.projects[0];

  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 lg:p-12 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Ambient background glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/15 transition-colors" />

        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          {/* Left Column: Project Narrative */}
          <div className="flex-1 max-w-2xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                <Sparkles size={12} />
                FEATURED PROJECT
              </span>

              <span className="px-3 py-1 rounded-full bg-white/[0.05] text-zinc-300 border border-white/10 text-xs font-mono flex items-center gap-1.5">
                <Award size={12} className="text-amber-400" />
                Hackathon Finalist
              </span>

              <span className="text-xs font-mono text-zinc-500">
                {project.year} • {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {project.title}
            </h3>

            <p className="text-sm font-mono text-emerald-400/90 mb-6">
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
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
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
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] text-zinc-200 border border-white/[0.08] text-xs font-mono"
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
                  data-cursor-text="OPEN"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-semibold text-xs tracking-wider uppercase hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <span>Launch Live Calculator</span>
                  <ExternalLink size={14} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="CODE"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 text-xs font-mono transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Live Interactive Mockup Card */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="rounded-2xl border border-white/10 bg-[#09090D] p-6 shadow-2xl space-y-5 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <TreePine size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono">Carbon Dashboard</h4>
                    <p className="text-[10px] text-zinc-500 font-mono">Live Simulation Widget</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  ONLINE
                </span>
              </div>

              {/* Metric previews */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-500 block">EST. EMISSION</span>
                  <span className="text-lg font-mono font-bold text-white mt-1 block">
                    3.84 <span className="text-xs text-zinc-400 font-normal">Tons CO₂</span>
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20">
                  <span className="text-[10px] font-mono text-emerald-400 block">TREES REQUIRED</span>
                  <span className="text-lg font-mono font-bold text-emerald-300 mt-1 block">
                    18 <span className="text-xs text-emerald-400/70 font-normal">Saplings</span>
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>Carbon Offset Trajectory</span>
                  <span className="text-emerald-400 font-bold">100% Target</span>
                </div>
                <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 w-4/5 rounded-full" />
                </div>
              </div>

              {/* Verification bullets */}
              <div className="space-y-2 pt-2 text-[11px] font-mono text-zinc-400 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <span>Deployment:</span>
                  <span className="text-white">Render Cloud</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hackathon:</span>
                  <span className="text-white">Eclearnix KPR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Architecture:</span>
                  <span className="text-white">Client-Side Analytics</span>
                </div>
              </div>

              {/* Action Banner */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-emerald-500/20 text-emerald-300 border border-white/10 hover:border-emerald-500/40 text-xs font-mono font-medium transition-colors"
              >
                Open Live Application ↗
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
