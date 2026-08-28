# Dhanushkaran M — Portfolio

> Premium personal portfolio website built with React, TypeScript, and modern web technologies.

![Portfolio](https://img.shields.io/badge/Portfolio-Live-22D3EE?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## Overview

A professional, modern, and responsive portfolio website showcasing my projects, skills, experience, and achievements as an Artificial Intelligence & Data Science student.

## Features

- **Midnight AI Theme** — Dark, futuristic design with cyan/purple accents
- **Cursor Glitter Effect** — Subtle particle animation following mouse movement
- **Responsive Design** — Optimized for all devices (375px to 1920px+)
- **Smooth Animations** — Framer Motion scroll-reveal and hover effects
- **Project Modals** — Detailed project views with Overview, Problem, Solution
- **Contact Form** — Client-side validated with mailto fallback
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML, sitemap
- **Accessible** — Keyboard navigation, ARIA labels, reduced-motion support
- **Performance** — Lazy animations, minimal dependencies, efficient rendering

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React 19, TypeScript 5.6, Vite 6 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Inter, JetBrains Mono |

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProfessionalSummary.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── CursorGlitter.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── certifications.ts
│   ├── achievements.ts
│   └── education.ts
├── App.tsx
├── main.tsx
└── index.css
public/
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── resume.pdf (add your own)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/dhanushkaran5/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment (Render)

1. Push code to GitHub
2. Create a new **Static Site** on [Render](https://render.com)
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Contact Form Integration (optional)
VITE_CONTACT_FORM_ENDPOINT=  # EmailJS, Formspree, or Resend endpoint
```

## Resume

Place your resume PDF at `public/resume.pdf` for the download button to work.

## Screenshots

> Add screenshots of your deployed portfolio here.

## Author

**Dhanushkaran M**
- GitHub: [@dhanushkaran5](https://github.com/dhanushkaran5)
- LinkedIn: [Dhanushkaran M](https://www.linkedin.com/in/dhanushkaran-m-35ab77330)
- Email: logeshdhanushkaran@gmail.com

## License

MIT License — see [LICENSE](LICENSE) for details.
