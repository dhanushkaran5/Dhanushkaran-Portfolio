'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Workflow,
  Sparkles,
  Activity,
  Cpu,
  Layers,
  CheckCircle2,
  Database,
  Cloud,
  Zap,
  Users,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function WorkflowDashboard() {
  const [requestCount, setRequestCount] = useState(1955);
  const [queryLatency, setQueryLatency] = useState(11.8);
  const [peerProgress, setPeerProgress] = useState(85);

  useEffect(() => {
    const interval = setInterval(() => {
      setRequestCount((prev) => prev + Math.floor(Math.random() * 3));
      setQueryLatency((11.4 + Math.random() * 0.8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="workflow"
      className="relative z-20 py-24 sm:py-32 bg-[#0B0B0C] overflow-hidden"
      aria-label="Workflow and Engineering Values"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff6b3d]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.04)]"
          >
            <Workflow className="w-3.5 h-3.5 text-[#ff6b3d]" />
            <span className="tracking-widest uppercase font-medium">MY WORKFLOW &amp; VALUES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.08] text-white"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Engineering robust products designed for{' '}
            <span className="bg-gradient-to-r from-[#ff6b3d] via-[#ff9b73] to-[#ff6b3d] bg-clip-text text-transparent">
              business growth
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            A high-velocity software engineering philosophy built on measurable performance, battle-tested architectures, and intuitive user experiences.
          </motion.p>
        </div>

        {/* 5-Card Living Engineering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Card 1: Cost-Effective Development (Span 3 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-3xl p-6 sm:p-7 bg-[#131214]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                  SAAS BUILD
                </span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Metrics
                </span>
              </div>

              {/* Bar Chart Visual Widget */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/[0.06] mb-6">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-zinc-400">Traffic Velocity</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +140%
                  </span>
                </div>

                <div className="flex items-end justify-between gap-3 h-28 pt-4 pb-1 px-2 border-b border-white/[0.08]">
                  <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-white/[0.08] rounded-t-lg h-[45%] transition-all" />
                    <span className="text-[10px] font-mono text-zinc-500">NOV 10</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-white/[0.15] rounded-t-lg h-[68%] transition-all" />
                    <span className="text-[10px] font-mono text-zinc-500">NOV 11</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg h-[92%] shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all" />
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">TODAY</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">Active user impressions</span>
                  <span className="text-white font-bold">{requestCount.toLocaleString()}+ requests</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
                Cost-effective development
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Optimized web builders and e-commerce platforms serving 1,955+ requests with low operational overhead.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Tailor-made systems (Span 3 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl p-6 sm:p-7 bg-[#131214]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-[11px] font-mono text-sky-400 font-semibold tracking-wider uppercase">
                  CUSTOM LOGIC
                </span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-zinc-500" />
                  Synced
                </span>
              </div>

              {/* Data Sync Pipeline Widget */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/[0.06] mb-6 space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono text-[10px] font-bold">
                      INGEST
                    </span>
                    <span className="text-xs font-mono text-white font-medium">Traffic Vision Pipeline</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-center gap-2.5">
                    <Cloud className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs font-mono text-zinc-300">Density &amp; Emergency Corridor Sync</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">Patent Reg</span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1">
                  <span>Pipeline Latency: 32ms</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Real-time Ingestion
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
                Patent &amp; Applied AI Systems
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                Computer vision traffic signal optimization (Indian Patent 202541099319 A), real-time tree offset calculators, and transactional SQL data pipelines.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Scalable SaaS backend (Span 2 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 rounded-3xl p-6 sm:p-7 bg-[#131214]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-[11px] font-mono text-purple-400 font-semibold tracking-wider uppercase">
                  PERFORMANCE
                </span>
                <span className="text-xs font-mono text-zinc-500">Edge Redis</span>
              </div>

              {/* Performance Curve Widget */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] mb-6">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-zinc-400">Query Execution</span>
                  <span className="text-purple-400 font-bold">&lt;{queryLatency.toFixed(1)}ms</span>
                </div>

                <div className="h-16 w-full flex items-center">
                  <svg className="w-full h-12 overflow-visible" viewBox="0 0 100 40">
                    <path
                      d="M 0 35 Q 25 32, 50 15 T 100 8"
                      fill="none"
                      stroke="#A855F7"
                      strokeWidth="2.5"
                    />
                    <circle cx="100" cy="8" r="4" fill="#C084FC" className="animate-pulse" />
                  </svg>
                </div>

                <div className="text-[10px] font-mono text-zinc-500 flex justify-between">
                  <span>Cold: 18ms</span>
                  <span className="text-purple-300">P99: 11.4ms</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Scalable SaaS backend
              </h3>
              <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                Serverless edge hosting maintaining sub-12ms queries under high concurrent loads.
              </p>
            </div>
          </motion.div>

          {/* Card 4: AI roadmap workflows (Span 2 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 rounded-3xl p-6 sm:p-7 bg-[#131214]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#ff6b3d]/10 border border-[#ff6b3d]/25 text-[11px] font-mono text-[#ff8e66] font-semibold tracking-wider uppercase">
                  AI INTEGRATION
                </span>
                <span className="text-xs font-mono text-zinc-500">OpenAI + RAG</span>
              </div>

              {/* AI Pipeline Flow Widget */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] mb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-[#ff6b3d]/20 text-[#ff8e66] flex items-center justify-center text-[10px] font-bold">
                    1
                  </div>
                  <span>User Skill Vector</span>
                </div>
                <div className="w-0.5 h-3 bg-white/20 ml-2.5" />
                <div className="flex items-center gap-2 text-xs font-mono text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                    2
                  </div>
                  <span>RLS Policy Setup</span>
                </div>
                <div className="w-0.5 h-3 bg-white/20 ml-2.5" />
                <div className="flex items-center gap-2 text-xs font-mono text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-bold">
                    3
                  </div>
                  <span>Supabase DB Sync</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                AI roadmap workflows
              </h3>
              <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                Dynamic OpenAI pipelines tailored to user skill vectors and live database syncing.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Real-time study tracker (Span 2 on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-2 rounded-3xl p-6 sm:p-7 bg-[#131214]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-mono text-amber-400 font-semibold tracking-wider uppercase">
                  COLLABORATION
                </span>
                <span className="text-xs font-mono text-zinc-500">Multi-User</span>
              </div>

              {/* Collaboration / Progress Widget */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] mb-6">
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-zinc-400">Peer Review Sync</span>
                  <span className="text-amber-400 font-bold">{peerProgress}%</span>
                </div>

                {/* Animated Progress Track */}
                <div className="w-full h-2.5 rounded-full bg-white/[0.08] overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full transition-all duration-500"
                    style={{ width: `${peerProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <div className="flex -space-x-1.5">
                    <span className="w-5 h-5 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-[9px] text-white">RB</span>
                    <span className="w-5 h-5 rounded-full bg-zinc-600 border border-black flex items-center justify-center text-[9px] text-white">JS</span>
                    <span className="w-5 h-5 rounded-full bg-[#ff6b3d] border border-black flex items-center justify-center text-[9px] text-white">+3</span>
                  </div>
                  <span className="text-zinc-400">5 peers active</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Real-time study tracker
              </h3>
              <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                Interactive multi-user workflows with peer review metrics and persistent state synchronization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
