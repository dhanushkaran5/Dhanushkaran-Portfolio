'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  ArrowUpRight,
  Phone,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

// Particle Wave Vortex Canvas Background
function ParticleWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: { x: number; y: number; baseAngle: number; speed: number; radius: number; opacity: number }[] = [];
    const count = 90;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseAngle: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.015,
        radius: 1 + Math.random() * 2,
        opacity: 0.15 + Math.random() * 0.5,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.baseAngle += p.speed;
        const waveX = p.x + Math.sin(p.baseAngle + time) * 20;
        const waveY = p.y + Math.cos(p.baseAngle + time * 0.8) * 15;

        ctx.beginPath();
        ctx.arc(waveX, waveY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 61, ${p.opacity * 0.4})`;
        ctx.fill();

        // Connect nearby particles with delicate constellation lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(waveX, waveY);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 * (1 - dist / 80)})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
    />
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
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

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#ffffff', '#ff6b3d', '#ffb088', '#06B6D4'],
    });

    const mailSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
    const mailBody = encodeURIComponent(
      `Hello ${PORTFOLIO_DATA.personal.name},\n\n${message}\n\nFrom: ${name} (${email})`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailSubject}&body=${mailBody}`;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative z-20 min-h-[90vh] py-20 sm:py-28 lg:py-32 bg-[#0B0B0C] overflow-hidden"
      aria-label="Contact Information and Inquiry Form"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Particle Wave Canvas */}
      <ParticleWaveCanvas />

      {/* 3D Angled Floating Ribbons Marquee */}
      <div className="relative w-full mb-20 overflow-hidden select-none pointer-events-none opacity-85">
        {/* Ribbon 1: -2.5deg tilt */}
        <div
          className="w-[120%] -ml-[10%] py-3 bg-gradient-to-r from-[#141315] via-[#1a191c] to-[#141315] border-y border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] -rotate-2 mb-3 overflow-hidden flex"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
            className="flex gap-8 shrink-0 text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-300 items-center whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-white font-bold">Creative Developer</span>
                <span className="text-[#ff6b3d]">◆</span>
                <span>Full Stack Engineer</span>
                <span className="text-[#ff6b3d]">◆</span>
                <span className="text-white">AI Integrations</span>
                <span className="text-[#ff6b3d]">◆</span>
                <span>Modern Web Architecture</span>
                <span className="text-[#ff6b3d]">◆</span>
                <span className="text-white">Open Source Contributor</span>
                <span className="text-[#ff6b3d]">◆</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Ribbon 2: +2deg tilt */}
        <div
          className="w-[120%] -ml-[10%] py-2.5 bg-gradient-to-r from-[#ff6b3d]/10 via-white/[0.04] to-[#ff6b3d]/10 border-y border-[#ff6b3d]/20 rotate-1 mb-3 overflow-hidden flex"
        >
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
            className="flex gap-8 shrink-0 text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-300 items-center whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-[#ff8e66] font-bold">Next.js Expert</span>
                <span className="text-zinc-600">◆</span>
                <span>React Specialist</span>
                <span className="text-zinc-600">◆</span>
                <span className="text-white">TypeScript Pro</span>
                <span className="text-zinc-600">◆</span>
                <span>API Designer</span>
                <span className="text-zinc-600">◆</span>
                <span className="text-[#ff8e66]">UI/UX Precision</span>
                <span className="text-zinc-600">◆</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Ribbon 3: -1deg tilt with Italic Serif Accent */}
        <div
          className="w-[120%] -ml-[10%] py-2 bg-black/60 border-y border-white/[0.05] -rotate-1 overflow-hidden flex"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
            className="flex gap-8 shrink-0 text-xs font-mono tracking-widest uppercase text-zinc-400 items-center whitespace-nowrap"
          >
            {[...Array(8)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="font-serif italic text-white text-sm">10+ Projects Delivered</span>
                <span className="text-[#ff6b3d]">•</span>
                <span>Real-Time Scalability</span>
                <span className="text-[#ff6b3d]">•</span>
                <span>Sub-Second Latency</span>
                <span className="text-[#ff6b3d]">•</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.04)]"
          >
            <Mail className="w-3.5 h-3.5 text-[#ff6b3d]" />
            <span className="tracking-widest uppercase font-medium">CONTACT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.0] text-white"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Let&apos;s build something{' '}
            <span className="bg-gradient-to-r from-[#ff6b3d] via-[#ff9b73] to-[#ff6b3d] bg-clip-text text-transparent">
              extraordinary
            </span>
          </motion.h2>

          {/* Subtitle with authentic color-coded keywords */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto"
          >
            Whether you&apos;re a <span className="text-[#FF5757] font-medium">startup</span> looking to scale, an <span className="text-[#D946EF] font-medium">enterprise</span> seeking innovation, or a founder with a bold <span className="text-[#06B6D4] font-medium">vision</span>.
          </motion.p>
        </div>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Quick Copy (Span 5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Email Copy Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-7 rounded-3xl bg-[#131214]/85 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                  FAST RESPONSE
                </span>
              </div>

              <div className="text-sm sm:text-base font-mono font-bold text-white mb-5 break-all">
                {PORTFOLIO_DATA.personal.email}
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-3 px-4 rounded-2xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-xs font-mono font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Availability & Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-7 rounded-3xl bg-[#131214]/85 backdrop-blur-xl border border-white/10 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-300 font-semibold">
                  AVAILABLE FOR OPPORTUNITY
                </span>
              </div>

              <div className="pt-2 border-t border-white/[0.06] space-y-2.5 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#ff6b3d] shrink-0" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                  <a
                    href="tel:+919566413640"
                    className="hover:text-white transition-colors"
                  >
                    9566413640
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-7 rounded-3xl bg-[#131214]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                Connect on Socials
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'GitHub', url: PORTFOLIO_DATA.personal.github },
                  { name: 'LinkedIn', url: PORTFOLIO_DATA.personal.linkedin },
                  { name: 'Instagram', url: PORTFOLIO_DATA.personal.instagram },
                  { name: 'Twitter / X', url: PORTFOLIO_DATA.personal.twitter },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-all inline-flex items-center gap-2"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Form (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-[#131214]/85 backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight font-jakarta">
                Send a Message
              </h3>
              <span className="text-xs font-mono text-zinc-500">DIRECT INQUIRY</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 block">Subject / Topic</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Full Stack Engineering / AI Collaboration"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, role, or timeline..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ff6b3d] to-[#ff8e66] text-white font-mono font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-[0_0_25px_rgba(255,107,61,0.4)] hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? 'Message Prepared (Opening Email)' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
