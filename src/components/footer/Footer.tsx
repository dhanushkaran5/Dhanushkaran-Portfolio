'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B0B0C] pb-12 pt-6 px-4 sm:px-6 md:px-8 z-20 overflow-hidden">
      {/* Enclosed Floating Capsule Pill Container */}
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#131214]/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left pb-6 border-b border-white/[0.08]">
          {/* Identity & Status */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-jakarta">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </span>
            </div>

            <p className="text-xs text-zinc-400 font-mono">
              {PORTFOLIO_DATA.personal.role} • Building impactful technology solutions
            </p>
          </div>

          {/* Links & Back to top */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-zinc-400">
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
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-[#ff8e66] transition-colors"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-3">
          <span>© 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-[#ff6b3d]" />
            {PORTFOLIO_DATA.personal.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
