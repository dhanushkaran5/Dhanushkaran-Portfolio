'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 30 : 65;

    // Subtle star / ambient dust particles
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.85,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height * 0.85;
        if (p.y > height * 0.85) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
      {/* Particle stars canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[11] pointer-events-none w-full h-full" />

      {/* Horizon Arc SVG Sunset/Sunrise Radiant Glow */}
      <div className="absolute bottom-[-24px] sm:bottom-[-36px] left-0 w-full h-[380px] sm:h-[500px] z-[13] pointer-events-none overflow-visible">
        <div className="relative w-full h-full">
          <svg
            className="absolute bottom-0 inset-x-0 w-full h-full z-10"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="skyGlow" cx="50%" cy="77%" r="42%">
                <stop offset="0%" stopColor="#d35400" stopOpacity="0.95" />
                <stop offset="15%" stopColor="#b23b00" stopOpacity="0.75" />
                <stop offset="35%" stopColor="#802000" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#3b0800" stopOpacity="0.15" />
                <stop offset="85%" stopColor="#120100" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="coreGlow" cx="50%" cy="77%" r="14%">
                <stop offset="0%" stopColor="#ff9100" stopOpacity="1" />
                <stop offset="20%" stopColor="#d35400" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#802000" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3b0800" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff3c00" stopOpacity="0" />
                <stop offset="25%" stopColor="#ff5500" stopOpacity="0.6" />
                <stop offset="45%" stopColor="#ffb088" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="55%" stopColor="#ffb088" stopOpacity="0.9" />
                <stop offset="75%" stopColor="#ff5500" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff3c00" stopOpacity="0" />
              </linearGradient>
              <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
              <filter id="lineBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8" />
              </filter>
              <clipPath id="skyClip">
                <path d="M 0 560 Q 600 360, 1200 560 L 1200 0 L 0 0 Z" />
              </clipPath>
            </defs>

            <g clipPath="url(#skyClip)">
              <rect x="0" y="0" width="1200" height="600" fill="url(#skyGlow)" />
              <rect x="0" y="0" width="1200" height="600" fill="url(#coreGlow)" />
            </g>

            <path
              d="M 0 560 Q 600 360, 1200 560"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="20"
              strokeLinecap="round"
              filter="url(#softBlur)"
              opacity="0.35"
            />
            <path
              d="M 0 560 Q 600 360, 1200 560"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#lineBlur)"
            />
            <path
              d="M 70 560 Q 600 425, 1130 560"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
              filter="url(#lineBlur)"
              opacity="0.25"
            />
          </svg>
        </div>
      </div>

      {/* Emerging Celestial Orb Sphere */}
      <div className="absolute bottom-[-100px] sm:bottom-[-160px] left-1/2 -translate-x-1/2 w-64 sm:w-96 aspect-square rounded-full z-[12] pointer-events-none opacity-80 overflow-visible">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-white via-zinc-200 to-zinc-600 shadow-[0_0_80px_rgba(255,255,255,0.4)]" />
      </div>
    </div>
  );
}
