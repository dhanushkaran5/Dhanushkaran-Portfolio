import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0F0E0E',
          card: '#141313',
          elevated: '#1a1919',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.2)',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-jakarta)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spinSlow 16s linear infinite',
        'navbar-border-spin': 'navbarBorderSpin 6s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};

export default config;
