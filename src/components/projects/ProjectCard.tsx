'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, FileText, Sparkles, Award } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlightPos({ x, y });

    // Restrained 3D tilt (max 3 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        y: isHovered ? -6 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.2,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`group relative rounded-3xl border border-white/10 bg-[#131214]/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden select-none ${
        featured ? 'md:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Mouse-Follow Spotlight Radial Gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 107, 61, 0.12), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Border Glow Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b3d]/30 to-transparent group-hover:via-[#ff6b3d]/70 transition-all z-10" />

      <div className="relative z-10 flex flex-col">
        {/* Header Row: Category Badge, Badges, Year */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.06] text-zinc-200 font-medium border border-white/10">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff6b3d]/10 text-[#ff8e66] border border-[#ff6b3d]/25 flex items-center gap-1">
                {project.badge.includes('PATENT') ? (
                  <Sparkles className="w-3 h-3 text-[#ff8e66]" />
                ) : (
                  <Award className="w-3 h-3 text-[#ff8e66]" />
                )}
                <span>{project.badge}</span>
              </span>
            )}
          </div>

          <span className="text-xs font-mono text-zinc-500 font-semibold">{project.year}</span>
        </div>

        {/* Project Image Preview Container */}
        {project.image && (
          <div className="relative w-full h-44 sm:h-52 md:h-56 mb-5 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0B] shadow-inner">
            <Image
              src={project.image}
              alt={`${project.title} Preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131214] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        )}

        {/* Title & Subtitle */}
        <Link href={`/projects/${project.slug}`} className="block group-hover:text-white transition-colors">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#ff8e66]/90 mb-3 line-clamp-1">
            {project.subtitle}
          </p>
        </Link>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Key Capabilities Bullet Points */}
        <div className="space-y-1.5 mb-5">
          {project.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b3d] shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Technologies & Action Links */}
      <div className="relative z-10 pt-4 border-t border-white/[0.08] flex flex-col gap-3.5">
        {/* Technology Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.06] group-hover:border-white/15 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Safe Action Links */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2.5">
            {/* Live App Link: ONLY if project.liveUrl exists and is not internal */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                <span>Live App</span>
                <ExternalLink size={11} />
              </a>
            ) : null}

            {/* Case Study Link */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/25 text-white font-mono text-xs transition-colors"
            >
              <FileText size={11} />
              <span>Case Study</span>
            </Link>

            {/* GitHub Source Link if available */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/25 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="View Source on GitHub"
              >
                <Github size={13} />
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            aria-label={`View ${project.title} editorial case study`}
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
