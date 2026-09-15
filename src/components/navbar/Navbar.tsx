'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  FileText,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Sparkles,
} from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#work', id: 'work' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Credentials', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'my-journey', 'work', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 280;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'my-journey' ? 'experience' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Fixed Header Container */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 py-4 sm:py-5 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between">
          {/* Brand Logo with Avatar (Pointer Events Auto) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto"
          >
            <Link
              href="/#hero"
              className="group flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#131214]/80 hover:bg-[#181719] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer"
              aria-label="Dhanushkaran M - Back to top"
            >
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20 group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/portrait.jpg"
                  alt="Dhanushkaran M Avatar"
                  fill
                  sizes="28px"
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-tight leading-none group-hover:text-[#ff8e66] transition-colors">
                  Dhanushkaran M
                </span>
                <span className="text-[9px] font-mono text-zinc-400 tracking-wider">
                  AI &amp; DS Engineer
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Compact Floating Glass Navigation Panel */}
          <motion.nav
            initial={{ opacity: 0, y: -25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#131214]/85 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] pointer-events-auto transition-all duration-300"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-[0_0_12px_rgba(255,255,255,0.1)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </motion.nav>

          {/* Right Action: Magnetic Resume CTA (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-3 pointer-events-auto"
          >
            <MagneticButton href="/resume" ariaLabel="View Resume">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </MagneticButton>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden pointer-events-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#131214]/85 border border-white/10 text-white flex items-center justify-center backdrop-blur-xl shadow-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Glass Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0C]/95 md:hidden flex flex-col justify-between p-6 pt-24"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff8e66] uppercase block mb-4">
                NAVIGATION
              </span>
              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.05 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-2xl font-bold text-white hover:text-[#ff8e66] tracking-tight transition-colors py-1 flex items-center justify-between border-b border-white/[0.05]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-2xl bg-white text-black font-semibold text-center font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </Link>

              <div className="flex items-center justify-center gap-6 pt-2 text-zinc-400">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
