'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  ArrowRight,
  Award,
  Zap,
  Compass,
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const projectIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.slug === slug);
  const project = PORTFOLIO_DATA.projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject =
    projectIndex > 0
      ? PORTFOLIO_DATA.projects[projectIndex - 1]
      : PORTFOLIO_DATA.projects[PORTFOLIO_DATA.projects.length - 1];
  const nextProject =
    projectIndex < PORTFOLIO_DATA.projects.length - 1
      ? PORTFOLIO_DATA.projects[projectIndex + 1]
      : PORTFOLIO_DATA.projects[0];

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white selection:bg-[#ff6b3d]/30 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 md:px-8 pt-32 sm:pt-40 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="mb-10 flex items-center justify-between text-xs font-mono text-zinc-400">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 hover:text-[#ff8e66] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
          <span className="text-zinc-500">EDITORIAL CASE STUDY // {project.year}</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-6 mb-12">
          {/* Category & Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1 rounded-full bg-[#ff6b3d]/10 text-[#ff8e66] border border-[#ff6b3d]/25 text-xs font-mono font-semibold">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3.5 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/10 text-xs font-mono flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#ff6b3d]" />
                <span>{project.badge}</span>
              </span>
            )}
            <span className="text-xs font-mono text-zinc-500">
              {project.role || 'Lead Engineer'} • {project.timeline || '2025–2026'}
            </span>
          </div>

          {/* Project Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[1.02]"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-mono text-[#ff8e66]/90 max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Key Impact Banner */}
          {project.impact && (
            <div className="p-4 rounded-2xl bg-[#ff6b3d]/[0.06] border border-[#ff6b3d]/20 flex items-center gap-3 text-xs sm:text-sm font-mono text-zinc-200">
              <Award className="w-4 h-4 text-[#ff8e66] shrink-0" />
              <span>
                <strong className="text-white">Factual Highlight:</strong> {project.impact}
              </span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs font-mono tracking-wider uppercase hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] cursor-pointer"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 text-xs font-mono transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Visual Image Showcase Banner */}
        {project.image && (
          <div className="relative w-full h-64 sm:h-96 md:h-[460px] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0B] mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <Image
              src={project.image}
              alt={`${project.title} Interface Preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>
        )}

        {/* Verified Technical Capabilities Metrics Row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff8e66]" />
              <span>Verified Capabilities &amp; Architecture Benchmarks</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#131214]/90 border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-[#ff8e66] uppercase tracking-wider font-semibold mb-2">
                    Metric #{idx + 1}
                  </span>
                  <p className="text-xs font-mono text-white font-medium leading-relaxed">
                    {metric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-[#131214]/90 border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold block">
              The Engineering Challenge
            </span>
            <h3 className="text-xl font-bold text-white">Problem Statement</h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#131214]/90 border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block">
              The Technical Solution
            </span>
            <h3 className="text-xl font-bold text-white">Architectural Resolution</h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Development Journey & Milestones */}
        {project.phases && project.phases.length > 0 && (
          <div className="p-8 rounded-3xl bg-[#131214]/90 border border-white/10 mb-16 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#ff8e66]" />
              <span>Development Journey &amp; Milestones</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Implementation Lifecycle</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {project.phases.map((phase, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2"
                >
                  <span className="text-[11px] font-mono font-bold text-[#ff8e66] block">
                    {phase.phase}
                  </span>
                  <div className="text-base font-bold text-white">{phase.title}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Narrative */}
        {project.architecture && (
          <div className="p-8 rounded-3xl bg-[#131214]/90 border border-white/10 mb-16 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-[#ff8e66]" />
              <span>System &amp; Data Pipeline Architecture</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              End-to-End Technical Design
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Capabilities / Features */}
        <div className="p-8 rounded-3xl bg-[#131214]/90 border border-white/10 mb-16">
          <h3 className="text-xl font-bold text-white mb-6">
            Core Capabilities &amp; Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#ff8e66] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 font-normal">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Official Patent Document Verification */}
        {project.patentDocument && (
          <div className="p-8 rounded-3xl bg-[#131214]/90 border border-white/10 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-mono text-[#ff8e66] uppercase tracking-wider font-semibold">
                  Official Government Documentation
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Indian Patent Publication Certificate
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                App No. 202541099319 A
              </span>
            </div>
            <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/15 bg-white shadow-2xl p-2">
              <Image
                src={project.patentDocument}
                alt="Official Indian Patent Publication Document"
                width={800}
                height={1050}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* Complete Technology Stack */}
        <div className="p-8 rounded-3xl bg-[#131214]/90 border border-white/10 mb-20">
          <h3 className="text-xl font-bold text-white mb-4">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-200 hover:border-[#ff6b3d]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Next & Previous Project Navigation */}
        <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all group flex flex-col justify-between"
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Previous Case Study
            </span>
            <span className="text-base font-bold text-white group-hover:text-zinc-200">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all group flex flex-col justify-between text-right"
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center justify-end gap-1.5 mb-2">
              Next Case Study
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-base font-bold text-white group-hover:text-zinc-200">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
