'use client';

import React from 'react';

interface StatusIndicatorProps {
  statusText?: string;
  className?: string;
  pulseColor?: 'emerald' | 'amber' | 'blue' | 'white';
}

export default function StatusIndicator({
  statusText = 'Available for opportunities',
  className = '',
  pulseColor = 'emerald',
}: StatusIndicatorProps) {
  const colorMap = {
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    blue: 'bg-sky-400',
    white: 'bg-white',
  };

  const textMap = {
    emerald: 'text-emerald-300',
    amber: 'text-amber-300',
    blue: 'text-sky-300',
    white: 'text-zinc-200',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono select-none ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colorMap[pulseColor]}`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${colorMap[pulseColor]}`}
        />
      </span>
      <span className={`font-medium ${textMap[pulseColor]}`}>{statusText}</span>
    </div>
  );
}
