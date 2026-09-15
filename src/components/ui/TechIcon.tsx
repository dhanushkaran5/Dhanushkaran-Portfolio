'use client';

import React from 'react';
import {
  Brain,
  Sparkles,
  Award,
  ShieldCheck,
  Activity,
  Eye,
  Zap,
  Cpu,
  Database,
  Cloud,
  Layers,
  Code2,
  Terminal,
  FileCode,
  TrendingUp,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = 'w-4 h-4' }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes('python') || normalized.includes('pandas') || normalized.includes('numpy')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Python">
        <path
          d="M11.914 2c-5.04 0-4.717 2.18-4.717 2.18l.006 2.26h4.787v.68H5.21S2 6.74 2 11.838c0 5.097 2.793 4.908 2.793 4.908h1.666v-2.33s-.09-2.793 2.74-2.793h4.73v-.706c0-1.077-.88-2.073-2.073-2.073H7.834V4.76c0-1.53 2.16-2.76 4.08-2.76zm-2.05 1.54a.77.77 0 1 1 0 1.54.77.77 0 0 1 0-1.54z"
          fill="#387EB8"
        />
        <path
          d="M12.086 22c5.04 0 4.717-2.18 4.717-2.18l-.006-2.26h-4.787v-.68h6.779s3.21.38 3.21-4.718c0-5.097-2.793-4.908-2.793-4.908h-1.666v2.33s.09 2.793-2.74 2.793h-4.73v.706c0 1.077.88 2.073 2.073 2.073h4.022v4.076c0 1.53-2.16 2.76-4.08 2.76zm2.05-1.54a.77.77 0 1 1 0-1.54.77.77 0 0 1 0 1.54z"
          fill="#FFE052"
        />
      </svg>
    );
  }

  // Java
  if (normalized.includes('java') && !normalized.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Java">
        <path
          d="M8.84 17.65c0 0-1.05.12-.55.77.58.74 1.76.77 2.87.5 1.78-.44 3.49-1.57 3.49-1.57s-.92.38-1.89.57c-1.32.26-2.9.23-3.92-.27zm-.8-2.61c0 0-1.12.22-.53 1.02.66.89 2.07.82 3.32.48 2.1-.56 4.09-1.89 4.09-1.89s-1.15.46-2.31.69c-1.65.32-3.47.19-4.57-.3zm6.65-4.13c.69 1.13-.19 2.16-1.53 3.03-1.6 1.04-3.71 1.55-5.69 1.4-1.14-.08-2.28-.46-2.28-.46s.9.26 1.94.34c1.88.14 3.88-.33 5.4-1.33 1.25-.82 2.04-1.78 2.16-2.98zm-2.02-4.72c.4 1.12-.22 2.14-1.4 3.05-1.4 1.07-3.23 1.63-4.93 1.58-1.02-.03-2.03-.32-2.03-.32s.81.21 1.74.27c1.62.11 3.36-.37 4.67-1.37 1.08-.82 1.78-1.79 1.95-3.21zm3.89 8.2c.47-.38.79-.83.79-1.35 0-1.55-2.08-2.23-3.73-2.58.62-.35 1.23-.74 1.72-1.25.75-.78 1.12-1.74.96-2.73-.24-1.48-1.43-2.43-2.83-2.93-.41-.15-.84-.27-1.27-.37.38-.49.63-1.08.68-1.73.08-1.09-.49-1.95-1.44-2.42-1.11-.56-2.64-.53-3.92-.09-.34.12-.66.27-.96.44.57.17 1.07.44 1.45.82.63.63.79 1.47.46 2.33-.29.75-.85 1.34-1.5 1.87-1.65 1.34-3.52 2.45-4.8 4.22-.84 1.17-1.19 2.57-.86 4 .37 1.61 1.64 2.87 3.2 3.55 2.19.95 4.7.99 7.02.48 1.83-.4 3.73-1.29 4.74-2.35z"
          fill="#E76F00"
        />
        <path
          d="M18.84 15.3c1.78-.44 3.49-1.57 3.49-1.57s-.92.38-1.89.57c-1.32.26-2.9.23-3.92-.27 0 0-1.05.12-.55.77.58.74 1.76.77 2.87.5z"
          fill="#5382A1"
        />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js' || normalized.includes('es6')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M6.5 18.5c.8.5 1.8.8 2.8.8 1.9 0 3-.9 3-2.7v-7.1h-2v7c0 .9-.5 1.3-1.3 1.3-.6 0-1.2-.2-1.6-.5l-.9 1.2zm8.3 0c.9.5 2.1.8 3.3.8 2.2 0 3.6-1.1 3.6-2.9 0-1.6-1-2.4-2.7-3.1-.9-.4-1.5-.7-1.5-1.3 0-.6.5-1.1 1.4-1.1.8 0 1.5.3 2 .6l.8-1.3c-.7-.5-1.6-.7-2.7-.7-2 0-3.3 1.1-3.3 2.7 0 1.5 1 2.3 2.6 3 .9.4 1.6.8 1.6 1.4 0 .7-.6 1.2-1.6 1.2-.9 0-1.8-.3-2.4-.8l-1 1.2z"
          fill="#000000"
        />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M13.2 11.5h7.3v1.8h-2.6v7.2h-2.1v-7.2h-2.6v-1.8zm-2.2 5.5c-.3.4-.8.7-1.5.9-.6.2-1.3.3-2 .3-1.1 0-2-.3-2.6-.8-.6-.5-.9-1.2-.9-2.1 0-.6.2-1.1.5-1.5.3-.4.8-.8 1.4-1 .4-.2 1.1-.4 2-.6.9-.2 1.5-.4 1.7-.5.3-.2.4-.4.4-.8 0-.4-.1-.7-.4-.9-.3-.2-.7-.3-1.3-.3-.6 0-1 .1-1.4.4-.4.3-.6.7-.7 1.3l-1.9-.3c.2-.9.6-1.6 1.3-2.1.7-.5 1.6-.7 2.8-.7 1.1 0 2 .3 2.6.8.6.5.9 1.2.9 2.1v4.7h-1.9v-1.1zm-.1-2.6c-.3.2-.8.4-1.6.6-.7.2-1.2.4-1.5.6-.3.2-.4.5-.4.9 0 .4.1.7.4.9.3.2.7.3 1.2.3.6 0 1.1-.2 1.4-.5.4-.3.5-.8.5-1.4v-1.4z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // React
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React">
        <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Next.js">
        <circle cx="12" cy="12" r="10.5" fill="#000000" stroke="#FFFFFF" strokeWidth="1.2" />
        <path d="M7.5 7.5v9h2.2v-4.9l5.8 4.9h2v-9h-2.2v4.8L9.5 7.5H7.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Node.js">
        <path
          d="M12 2.5l8.5 4.9v9.8L12 22.1l-8.5-4.9V7.4L12 2.5z"
          fill="#339933"
        />
        <path
          d="M12 4.5L5 8.5v7.6l7 4.1 7-4.1V8.5l-7-4zm0 2.2l4.8 2.8v5.5L12 17.8l-4.8-2.8V9.5L12 6.7z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Flask
  if (normalized.includes('flask')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flask">
        <path
          d="M10 2h4v2h-1v4.5l5.5 10.5c.6 1.1-.2 2.5-1.5 2.5h-10c-1.3 0-2.1-1.4-1.5-2.5L11 8.5V4h-1V2zm1 8.5l-4 7.5h10l-4-7.5V4h-2v6.5z"
          fill="#FFFFFF"
        />
        <circle cx="12" cy="16.5" r="1.5" fill="#38BDF8" />
        <circle cx="9.5" cy="18" r="1" fill="#38BDF8" />
        <circle cx="14" cy="17.5" r="0.8" fill="#38BDF8" />
      </svg>
    );
  }

  // Spring Boot
  if (normalized.includes('spring')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Spring Boot">
        <path
          d="M20.8 11.2c-.3-4.3-3.7-7.7-8-8-5-.3-9.1 3.5-9.3 8.4-.1 2.9 1.2 5.6 3.4 7.3 1.3 1 2.9 1.6 4.6 1.6 4.7 0 8.6-3.6 9-8.3.1-.3.3-1 .3-1zm-9 6.8c-3.6 0-6.5-2.9-6.5-6.5 0-3.3 2.5-6.1 5.8-6.4 3.9-.4 7.2 2.7 7.2 6.6 0 3.5-2.9 6.3-6.5 6.3z"
          fill="#6DB33F"
        />
        <path
          d="M11.6 7.8c-.2 0-.4.1-.5.3l-2.6 4.5c-.2.3 0 .7.3.7h2.2v3.2c0 .3.4.5.6.3l3.2-4.5c.2-.3 0-.7-.3-.7h-2.4V8.1c0-.2-.2-.3-.5-.3z"
          fill="#6DB33F"
        />
      </svg>
    );
  }

  // SQL / Databases
  if (normalized.includes('sql') || normalized.includes('postgres') || normalized.includes('mysql') || normalized.includes('database')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SQL">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00758F" strokeWidth="1.8" fill="#00758F" fillOpacity="0.25" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#00758F" strokeWidth="1.8" fill="none" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#00758F" strokeWidth="1.8" fill="none" />
      </svg>
    );
  }

  // HTML5 / CSS3
  if (normalized.includes('html') || normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5 / CSS3">
        <path d="M4 3l1.5 16.5L12 21.5l6.5-2L20 3H4z" fill="#E34F26" />
        <path d="M12 4.5v15.2l5.2-1.6 1.2-13.6H12z" fill="#EF652A" />
        <path d="M7.5 7h9l-.2 2.5H10l.2 2.5h6l-.6 6-3.6 1-3.6-1-.2-2.5h2l.1 1.2 1.7.5 1.7-.5.2-2H7.5V7z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Git
  if (normalized === 'git' || normalized.includes('git ') || normalized.includes('git/')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Git">
        <path
          d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.3l2.7 2.7c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.6 2.6c.6-.2 1.3 0 1.8.5.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.6c.2.1.4.3.5.5.8.8.8 2 0 2.8s-2 .8-2.8 0c-.8-.8-.8-2 0-2.8.3-.3.6-.4 1-.5V9.7c-.4-.1-.7-.2-1-.5-.6-.6-.7-1.4-.4-2.1L7.7 4.5 2.4 9.8c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.6.6-1.5.1-2z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // GitHub
  if (normalized.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GitHub">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // VS Code
  if (normalized.includes('vscode') || normalized.includes('vs code')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="VS Code">
        <path d="M17.5 2.5L6.5 11l-4-3-1.5 1 4 4.5-4 4.5 1.5 1 4-3 11 8.5 4.5-2V4.5l-4.5-2zm0 4.5v10l-7.5-5 7.5-5z" fill="#007ACC" />
      </svg>
    );
  }

  // Linux
  if (normalized.includes('linux') || normalized.includes('shell')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Linux">
        <path
          d="M12 2c-3.1 0-4.8 2.2-4.8 4.7 0 1.2.4 2.5.8 3.5-.8 1.1-1.7 2.5-1.7 4.3 0 2.9 2.2 4.5 4.8 4.5h1.8c2.6 0 4.8-1.6 4.8-4.5 0-1.8-.9-3.2-1.7-4.3.4-1 .8-2.3.8-3.5 0-2.5-1.7-4.7-4.8-4.7z"
          fill="#FFFFFF"
        />
        <circle cx="10" cy="6.5" r="1" fill="#000000" />
        <circle cx="14" cy="6.5" r="1" fill="#000000" />
        <path d="M10.5 8.5c.5.5 2.5.5 3 0l-1.5 1.5-1.5-1.5z" fill="#FFA500" />
        <path d="M5.5 18c-.8 0-1.5.7-1.5 1.5s1.2 1.5 2.5 1.5c1 0 1.5-.7 1.5-1.5s-.8-1.5-2.5-1.5zm13 0c-.8 0-1.5.7-1.5 1.5s.5 1.5 1.5 1.5 2.5-.7 2.5-1.5-.7-1.5-2.5-1.5z" fill="#FFA500" />
      </svg>
    );
  }

  // AWS
  if (normalized.includes('aws') || normalized.includes('bedrock')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AWS">
        <path
          d="M7.8 11.2c0 .5.1.9.3 1.2.2.3.5.5.9.5.4 0 .8-.2 1.1-.5.3-.3.4-.8.4-1.4v-3h1.8v5.5H10.6v-.9c-.4.4-.7.7-1.1.9-.4.2-.9.3-1.4.3-.8 0-1.5-.3-2-.8-.5-.5-.8-1.3-.8-2.3 0-1.1.3-1.9.8-2.4.5-.5 1.3-.8 2.2-.8.4 0 .7.1 1.1.2.3.1.6.3.8.5v-.5c0-.6-.2-1-.5-1.3-.3-.3-.8-.4-1.5-.4-.7 0-1.3.1-2 .4l-.5-1.3c.9-.4 1.8-.6 2.8-.6 1.3 0 2.2.3 2.8.9.6.6.9 1.6.9 2.8v4.9h-1.8v-.8c-.4.3-.8.6-1.3.8-.5.2-1 .3-1.6.3-1 0-1.8-.3-2.4-.9-.6-.6-.9-1.5-.9-2.6 0-1.1.3-2 .9-2.6.6-.6 1.4-.9 2.4-.9.6 0 1.1.1 1.6.3.5.2.9.5 1.2.9v-.8h1.8v5.5z"
          fill="#FFFFFF"
        />
        <path
          d="M4.5 17.5c4.5 3 10.5 3 15 0"
          stroke="#FF9900"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M19.5 17.5l-1.5-2.5m1.5 2.5l-2.8.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // OpenCV / Computer Vision
  if (normalized.includes('opencv') || normalized.includes('vision')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="OpenCV">
        <circle cx="12" cy="7" r="4" stroke="#EA3829" strokeWidth="2" />
        <circle cx="7" cy="15.5" r="4" stroke="#22A4F1" strokeWidth="2" />
        <circle cx="17" cy="15.5" r="4" stroke="#48BA37" strokeWidth="2" />
      </svg>
    );
  }

  // TensorFlow / PyTorch / Machine Learning
  if (normalized.includes('tensor') || normalized.includes('pytorch') || normalized.includes('machine learning')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TensorFlow">
        <path d="M12 2l8.5 4.9v9.8L12 22l-8.5-5.3V6.9L12 2z" stroke="#FF6F00" strokeWidth="1.8" fill="#FF6F00" fillOpacity="0.2" />
        <path d="M12 2v20M3.5 6.9l17 9.8M20.5 6.9l-17 9.8" stroke="#FF6F00" strokeWidth="1.5" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tailwind CSS">
        <path
          d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.3 4.8-1.8 1.1.3 1.9 1.1 2.7 2 1.4 1.4 3 3 6.5 3 3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.3-4.8 1.8-1.1-.3-1.9-1.1-2.7-2-1.4-1.4-3-3-6.5-3zM6 13c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.3 4.8-1.8 1.1.3 1.9 1.1 2.7 2 1.4 1.4 3 3 6.5 3 3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.3-4.8 1.8-1.1-.3-1.9-1.1-2.7-2-1.4-1.4-3-3-6.5-3z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // Framer Motion
  if (normalized.includes('framer')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Framer Motion">
        <path d="M4 2h16v8h-8zM4 10h8l8 8H4zM4 18h8v6z" fill="#EA4C89" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Docker">
        <path d="M2 13.5c.5-3 3-5 6-5 1.2 0 2.3.4 3.2 1 1-.5 2.1-.8 3.3-.8 4.2 0 7.5 3 7.5 7.5 0 2.5-1.2 4.5-3 5.8H4c-1.5-1.8-2.2-4.5-2-8.5z" fill="#2496ED" fillOpacity="0.2" stroke="#2496ED" strokeWidth="1.5" />
        <rect x="5" y="6" width="2" height="2" fill="#2496ED" />
        <rect x="8" y="6" width="2" height="2" fill="#2496ED" />
        <rect x="11" y="6" width="2" height="2" fill="#2496ED" />
      </svg>
    );
  }

  // AI / LLMs / Generative AI / Prompt Engineering
  if (normalized.includes('ai') || normalized.includes('llm') || normalized.includes('generative') || normalized.includes('prompt') || normalized.includes('langchain')) {
    return <Sparkles className={`${className} text-emerald-400`} />;
  }

  // Cloud / REST API
  if (normalized.includes('cloud') || normalized.includes('rest') || normalized.includes('api')) {
    return <Cloud className={`${className} text-sky-400`} />;
  }

  // Fallback for Soft Skills / Competencies / General
  if (normalized.includes('learn') || normalized.includes('adapt')) {
    return <Zap className={`${className} text-amber-400`} />;
  }
  if (normalized.includes('leader') || normalized.includes('team')) {
    return <Award className={`${className} text-orange-400`} />;
  }
  if (normalized.includes('think') || normalized.includes('analytic') || normalized.includes('structure') || normalized.includes('algo')) {
    return <Brain className={`${className} text-purple-400`} />;
  }

  // Default neutral tech icon
  return <Code2 className={`${className} text-zinc-400`} />;
}
