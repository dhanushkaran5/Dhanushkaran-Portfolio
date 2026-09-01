'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HistoryItem {
  command: string;
  output: string;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'help',
      output: PORTFOLIO_DATA.terminalResponses.help,
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>(['help']);

  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

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

    const output =
      PORTFOLIO_DATA.terminalResponses[trimmed] ||
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

  const quickCommands = ['about', 'skills', 'projects', 'patent', 'contact', 'clear'];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-3"
          >
            <TerminalIcon size={12} />
            <span>INTERACTIVE CLI</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Developer Terminal
          </motion.h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-mono">
            Execute commands directly to inspect my background, stack, or projects.
          </p>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl border border-white/10 bg-[#0B0B0F]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden cursor-text"
        >
          {/* macOS Top Bar */}
          <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 hover:bg-[#FF5F56] transition-colors" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 hover:bg-[#FFBD2E] transition-colors" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 hover:bg-[#27C93F] transition-colors" />
            </div>

            <div className="text-[11px] font-mono text-zinc-400 font-medium">
              dhanush@terminal: ~ (zsh)
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className="p-5 font-mono text-xs sm:text-sm h-80 sm:h-96 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10"
          >
            <div className="text-zinc-500 text-xs">
              Type <span className="text-emerald-400 font-semibold">&apos;help&apos;</span> for available commands, or click the quick action chips below.
            </div>

            {/* History outputs */}
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-zinc-500 text-xs">~</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <pre className="text-zinc-300/90 whitespace-pre-wrap font-mono text-xs leading-relaxed pl-4 border-l border-emerald-500/20">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Active Command Line Input */}
            <div className="flex items-center gap-2 pt-1 text-zinc-300">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-zinc-500 text-xs">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command (e.g. skills, patent)..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder:text-zinc-600 focus:ring-0"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="button"
                onClick={() => executeCommand(input)}
                className="text-zinc-500 hover:text-emerald-400 p-1"
                aria-label="Submit command"
              >
                <CornerDownLeft size={14} />
              </button>
            </div>
          </div>

          {/* Quick Action Chips (Touch-friendly on mobile) */}
          <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider shrink-0 mr-1">
              SUGGESTED:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(cmd);
                }}
                className="shrink-0 px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-emerald-500/15 hover:text-emerald-300 text-zinc-400 border border-white/[0.06] text-[11px] font-mono transition-colors"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
