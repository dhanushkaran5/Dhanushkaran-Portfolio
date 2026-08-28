import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const COLORS = ['#22D3EE', '#8B5CF6', '#22D3EE', '#A78BFA', '#67E8F9'];
const MAX_PARTICLES = 50;

export default function CursorGlitter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 0.5;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1,
      life: 1,
      maxLife: Math.random() * 30 + 20,
      size: Math.random() * 3 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }, []);

  useEffect(() => {
    /* Respect prefers-reduced-motion */
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    /* Disable on mobile / touch devices */
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      if (now - lastSpawnRef.current > 30 && particlesRef.current.length < MAX_PARTICLES) {
        particlesRef.current.push(
          createParticle(mouseRef.current.x, mouseRef.current.y)
        );
        lastSpawnRef.current = now;
      }

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) return false;

        ctx.save();
        ctx.globalAlpha = p.life * 0.6;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
