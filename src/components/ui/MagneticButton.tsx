'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-block cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  }

  return <div onClick={onClick} aria-label={ariaLabel}>{content}</div>;
}
