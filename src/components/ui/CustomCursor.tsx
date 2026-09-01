'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute('data-cursor-text');
        setCursorText(text || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handlePointerOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handlePointerOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Follower ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? (cursorText ? 2.6 : 1.7) : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.2 }}
        className={`fixed pointer-events-none flex items-center justify-center rounded-full border transition-colors duration-150 ${
          isHovered
            ? 'border-emerald-400/80 bg-emerald-500/10 backdrop-blur-[2px]'
            : 'border-white/20 bg-white/[0.02]'
        }`}
      >
        <div
          className={`rounded-full pointer-events-none transition-all duration-200 flex items-center justify-center ${
            cursorText
              ? 'h-14 w-14'
              : isHovered
              ? 'h-9 w-9'
              : 'h-8 w-8'
          }`}
        >
          {cursorText && (
            <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-emerald-300 pointer-events-none">
              {cursorText}
            </span>
          )}
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          opacity: cursorText ? 0 : 1,
        }}
        className="fixed pointer-events-none h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
      />
    </div>
  );
}
