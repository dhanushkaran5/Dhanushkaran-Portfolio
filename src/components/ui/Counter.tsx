'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  formatter?: (val: number) => string;
  className?: string;
  suffix?: string;
}

export default function Counter({
  from = 0,
  to,
  duration = 1.2,
  formatter,
  className = '',
  suffix = '',
}: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(from + (to - from) * eased);
      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  const displayValue = formatter ? formatter(count) : count.toLocaleString();

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
