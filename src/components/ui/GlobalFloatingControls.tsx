'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Terminal as TerminalIcon } from 'lucide-react';
import AIAssistant from './AIAssistant';
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal';

export default function GlobalFloatingControls() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      {/* Outer Viewport Atmospheric Glow Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          boxShadow: 'inset 0 0 45px rgba(10, 132, 255, 0.08), inset 0 0 100px rgba(0, 0, 0, 0.8)',
        }}
        aria-hidden="true"
      />

      {/* Right Edge Status Badge: AVAILABLE FOR OPPORTUNITY */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center pointer-events-auto">
        <a
          href="/resume"
          className="group flex items-center gap-2 py-3 px-1.5 rounded-l-full bg-[#141313]/90 hover:bg-[#1C1A1A] border-y border-l border-white/10 hover:border-white/20 text-[9px] font-mono font-bold tracking-[0.2em] text-white/70 hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          style={{ writingMode: 'vertical-rl' }}
          aria-label="Available for opportunity"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>AVAILABLE FOR OPPORTUNITY</span>
        </a>
      </div>

      {/* Bottom-Left Terminal Trigger Button (>_) */}
      <div className="fixed bottom-5 left-5 z-40 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsTerminalOpen(true)}
          className="w-12 h-12 rounded-full bg-[#141313]/85 hover:bg-neutral-900 border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer group"
          aria-label="Open Interactive Terminal Sandbox"
        >
          <span className="font-mono text-sm font-bold group-hover:text-emerald-400 transition-colors">
            &gt;_
          </span>
        </motion.button>
      </div>

      {/* Bottom-Right AI Assistant Trigger Button (Chat) */}
      <div className="fixed bottom-5 right-5 z-40 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsAIOpen((prev) => !prev)}
          className="w-12 h-12 rounded-full bg-[#141313]/85 hover:bg-neutral-900 border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer group"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
        </motion.button>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

      {/* Global Terminal Modal */}
      {isTerminalOpen && (
        <InteractiveTerminal
          isModal={true}
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />
      )}
    </>
  );
}
