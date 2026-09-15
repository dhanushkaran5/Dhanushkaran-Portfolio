'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HistoryItem {
  command: string;
  output: string;
}

interface InteractiveTerminalProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function InteractiveTerminal({
  isModal = false,
  isOpen = true,
  onClose,
}: InteractiveTerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'neofetch',
      output: PORTFOLIO_DATA.terminalResponses.neofetch,
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>(['neofetch']);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandList((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'matrix') {
      setIsMatrixMode((prev) => !prev);
    }

    const output =
      (PORTFOLIO_DATA.terminalResponses as Record<string, string>)[trimmed] ||
      `command not found: "${trimmed}". Type "help" to view valid commands.`;

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIndex =
        historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandList[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandList.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandList[nextIndex]);
      }
    }
  };

  const quickCommands = [
    'help',
    'about',
    'skills',
    'projects',
    'patent',
    'experience',
    'certifications',
    'clear',
  ];

  const terminalContent = (
    <div
      className={`rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden font-mono flex flex-col ${
        isModal
          ? 'w-[94vw] max-w-2xl h-[520px] bg-[#141313]/95 backdrop-blur-2xl'
          : 'max-w-4xl mx-auto h-[500px] bg-[#141313]/90 backdrop-blur-xl'
      }`}
    >
      {/* Window Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/50 border-b border-white/[0.08] select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          <span className="ml-2 text-xs font-semibold text-white/80 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>Sandbox Terminal</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-emerald-400 font-mono">
            theme: {isMatrixMode ? 'matrix-rain' : 'matrix'}
          </span>
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="w-6 h-6 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close terminal modal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* TAP Quick Chips */}
      <div className="px-4 py-2 border-b border-white/[0.06] bg-black/20 flex flex-wrap items-center gap-1.5 text-[11px] select-none">
        <span className="text-zinc-500 font-mono text-[10px] mr-1">TAP:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.06] hover:border-white/20 text-zinc-300 hover:text-emerald-400 transition-all font-mono text-[10px] cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-[13px] text-zinc-300 scrollbar-thin scrollbar-thumb-white/10"
      >
        {/* ASCII Header Banner */}
        <div className="select-none leading-none mb-4 text-emerald-400 font-mono text-[9px] sm:text-[11px] whitespace-pre font-bold">
{`██████╗ ███╗   ███╗     ██████╗██╗     ██╗
██╔══██╗████╗ ████║    ██╔════╝██║     ██║
██║  ██║██╔████╔██║    ██║     ██║     ██║
██║  ██║██║╚██╔╝██║    ██║     ██║     ██║
██████╔╝██║ ╚═╝ ██║    ╚██████╗███████╗██║
╚═════╝ ╚═╝     ╚═╝     ╚═════╝╚══════╝╚═╝`}
          <div className="text-[10px] text-emerald-400 font-mono mt-1">
            DHANUSHKARAN CLI v2.4 • <span className="text-emerald-400 font-bold">ONLINE</span>
          </div>
        </div>

        {/* Command History */}
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <span>guest@dhanushkaran.me:~$</span>
              <span className="text-white font-normal">{item.command}</span>
            </div>
            <div className="text-zinc-300 whitespace-pre-wrap pl-2 border-l border-white/[0.08] font-mono text-xs leading-relaxed">
              {item.output}
            </div>
          </div>
        ))}
      </div>

      {/* Input Prompt */}
      <div className="p-3 sm:p-4 bg-black/60 border-t border-white/[0.08] flex items-center gap-2 text-xs sm:text-[13px]">
        <span className="text-emerald-400 font-bold shrink-0">guest@dhanushkaran.me:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type commands..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-500 font-mono text-xs sm:text-[13px]"
          autoComplete="off"
          spellCheck="false"
        />
        <span className="text-[10px] text-zinc-500 font-mono shrink-0 hidden sm:inline">
          press Tab
        </span>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {terminalContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <section
      id="terminal"
      className="relative z-20 py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#0F0E0E] overflow-hidden"
      aria-label="Interactive Developer Terminal Sandbox"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>Developer Sandbox</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Interactive{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Terminal CLI
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto mt-3">
            An iOS 18-inspired zsh command sandbox. Execute live queries to inspect technical telemetry and background architecture.
          </p>
        </div>

        {terminalContent}
      </div>
    </section>
  );
}
