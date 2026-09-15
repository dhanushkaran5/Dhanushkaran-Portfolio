'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `${PORTFOLIO_DATA.aiChatbot.initialMessage}\n\n📊 Quick Facts:\n• B.Tech in AI & DS at V.S.B College of Engineering (CGPA: 8.10)\n• Co-inventor of Indian Patent No. 202541099319 A (Smart Traffic System)\n• Eclearnix National Hackathon Finalist\n• Interned at Litz Technologies & EDU TANTR`,
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = `I'm here to help! Dhanushkaran M is an AI & Data Science Developer specializing in Python, Java, Flask, Node.js, and Machine Learning. Feel free to explore his featured projects or reach out directly at ${PORTFOLIO_DATA.personal.email}.`;
      const lower = text.toLowerCase();

      if (lower.includes('about') || lower.includes('yourself') || lower.includes('who are you')) {
        reply = PORTFOLIO_DATA.aiChatbot.responses.about;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech')) {
        reply = PORTFOLIO_DATA.aiChatbot.responses.skills;
      } else if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) {
        reply = PORTFOLIO_DATA.aiChatbot.responses.projects;
      } else if (lower.includes('patent') || lower.includes('traffic') || lower.includes('research')) {
        reply = PORTFOLIO_DATA.aiChatbot.responses.patent;
      } else if (lower.includes('hire') || lower.includes('contact') || lower.includes('email') || lower.includes('call') || lower.includes('reach')) {
        reply = PORTFOLIO_DATA.aiChatbot.responses.contact;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-20 right-4 sm:right-8 z-50 w-[92vw] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col rounded-3xl bg-[#141313]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-black/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-zinc-300">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
                  AI Assistant
                </h3>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close AI Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-zinc-300 shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-white text-black font-medium rounded-br-none shadow-md'
                      : 'bg-white/[0.05] border border-white/[0.08] text-zinc-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-zinc-400">
                <div className="w-6 h-6 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="px-3.5 py-2 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Pills */}
          <div className="px-4 py-2 border-t border-white/[0.06] bg-black/20 flex flex-wrap gap-1.5">
            {PORTFOLIO_DATA.aiChatbot.quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[10px] font-sans text-zinc-300 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-white/[0.08] bg-black/40">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message..."
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/20"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 disabled:opacity-30 transition-opacity shrink-0 cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
