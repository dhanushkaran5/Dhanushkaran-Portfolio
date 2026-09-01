'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070709] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Identity & Status */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-white tracking-wider">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-xs font-mono text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400">
              {PORTFOLIO_DATA.personal.role}
            </span>
          </div>

          <p className="text-xs text-zinc-500 font-mono">
            Crafted with Next.js 15, TypeScript &amp; Framer Motion.
          </p>
        </div>

        {/* Links & Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-600 gap-4">
        <span>© {new Date().getFullYear()} Dhanushkaran M. All rights reserved.</span>
        <span>Coimbatore, Tamil Nadu, India</span>
      </div>
    </footer>
  );
}
