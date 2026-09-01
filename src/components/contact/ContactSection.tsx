'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10B981', '#34D399', '#FFFFFF', '#6EE7B7'],
    });

    // Generate functional mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Dhanushkaran,\n\n${message}\n\nFrom: ${name} (${email})`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Direct Links (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-4"
              >
                <Sparkles size={12} />
                <span>INITIATE CONTACT</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
              >
                Let's build{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
                  something useful.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed"
              >
                Have an idea, project, internship, or collaborative opportunity? Send an email or connect through LinkedIn.
              </motion.p>
            </div>

            {/* Quick Copy Email Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  DIRECT EMAIL
                </span>
                <p className="text-xs sm:text-sm font-mono text-zinc-200 truncate font-semibold">
                  {PORTFOLIO_DATA.personal.email}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 p-2.5 rounded-xl bg-white/[0.05] hover:bg-emerald-500/20 text-zinc-300 hover:text-emerald-300 border border-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Social Network Cards */}
            <div className="space-y-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="CONNECT"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/30 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">LinkedIn</h4>
                    <p className="text-xs text-zinc-400 font-mono">Professional Network &amp; Updates</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="FOLLOW"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                    <Github size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">GitHub</h4>
                    <p className="text-xs text-zinc-400 font-mono">Repositories &amp; Source Code</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Message Composer (Span 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl relative"
            >
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Dispatch</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-8 font-mono">
                Fill in the details below to trigger an immediate mailto message draft.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="user-name" className="text-xs font-mono text-zinc-400 block mb-2">
                    YOUR NAME
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-emerald-500/60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="user-email" className="text-xs font-mono text-zinc-400 block mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-emerald-500/60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="user-msg" className="text-xs font-mono text-zinc-400 block mb-2">
                    MESSAGE / PROJECT BRIEF
                  </label>
                  <textarea
                    id="user-msg"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-emerald-500/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor-text="SEND"
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]"
                >
                  <Send size={15} />
                  <span>{submitted ? 'Message Ready — Dispatched' : 'Compose & Send Email'}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
