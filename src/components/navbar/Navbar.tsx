'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Code2,
  Briefcase,
  Layers,
  Mail,
  Menu,
  X,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const NAV_ITEMS = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Services', href: '#services', icon: Layers },
  { name: 'Journey', href: '#journey', icon: FileText },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ['hero', 'about', 'projects', 'skills', 'services', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating Navigation */}
      <header className="fixed top-5 left-0 right-0 z-40 hidden md:flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto relative group"
        >
          {/* Animated Conic Border Ring */}
          <div className="absolute -inset-[1px] rounded-full overflow-hidden pointer-events-none">
            <div
              className="absolute inset-[-100%] animate-border-spin opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(255,255,255,0.8), rgba(16,185,129,0.7) 25%, rgba(255,255,255,0.05) 50%, rgba(16,185,129,0.7) 75%, rgba(255,255,255,0.8))',
              }}
            />
          </div>

          {/* Main Glass Pill Container */}
          <nav
            className={`relative flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'bg-[#08080A]/85 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
                : 'bg-[#08080A]/60 backdrop-blur-md border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            }`}
          >
            {/* Logo / Monogram */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-2 pl-2 pr-3 py-1 text-xs font-mono font-bold tracking-tight text-white hover:text-emerald-400 transition-colors"
              aria-label="Home"
            >
              <div className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[10px] text-emerald-400">
                DM
              </div>
              <span className="hidden lg:inline text-zinc-300">dhanush.dev</span>
            </a>

            <div className="h-4 w-[1px] bg-white/10 mr-1" />

            {/* Nav links */}
            <div className="flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full flex items-center gap-1.5 transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/15"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon size={13} className={isActive ? 'text-emerald-400' : 'opacity-70'} />
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="h-4 w-[1px] bg-white/10 mx-1" />

            {/* Availability Dot & Resume */}
            <div className="flex items-center gap-2 pr-1">
              <div className="flex items-center gap-1.5 pl-2 pr-2 text-[11px] font-mono text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="hidden xl:inline text-zinc-400 text-[10px]">Available</span>
              </div>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 transition-colors"
              >
                <span>CV</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </nav>
        </motion.div>
      </header>

      {/* Mobile Top Bar */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4 md:hidden">
        <div className="relative flex items-center justify-between px-4 py-2.5 rounded-full bg-[#08080A]/85 backdrop-blur-xl border border-white/10 shadow-lg">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xs font-mono font-bold text-emerald-400">
              DM
            </div>
            <span className="text-xs font-mono font-semibold text-white tracking-wider">
              DHANUSHKARAN M
            </span>
          </a>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 p-4 rounded-2xl bg-[#0D0D12]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-1"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </a>
                );
              })}

              <div className="pt-2 mt-2 border-t border-white/10 flex gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-3 rounded-xl bg-emerald-500 text-black font-medium text-xs flex items-center justify-center gap-1.5"
                >
                  <FileText size={13} />
                  <span>Resume (PDF)</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/[0.06] text-white border border-white/10 flex items-center justify-center"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
