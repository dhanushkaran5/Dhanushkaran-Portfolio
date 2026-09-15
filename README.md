# Rameshwar Bhagwat — Full Stack & AI Developer Portfolio

An authentic, pixel-perfect, production-grade recreation of [rameshwarbhagwat.me](https://www.rameshwarbhagwat.me/) and [rameshwarbhagwat.me/projects](https://www.rameshwarbhagwat.me/projects), engineered with Next.js 15+ App Router, TypeScript, Tailwind CSS, Framer Motion, Lenis smooth scrolling, Three.js / Canvas particle wave vortex, and an iOS 18-inspired Terminal CLI sandbox.

---

## 🌟 Architectural Features & System Highlights

- **Obsidian Dark & Glassmorphic Design System:** Pure `#0B0B0C` background with frosted glass cards (`rgba(19, 18, 20, 0.85)` + `backdrop-blur-xl`), conic spinning borders (`animate-navbar-border-spin`), and radiant coral-orange glow gradients (`#ff6b3d`).
- **Celestial Horizon Hero:** Glowing emerging celestial sphere orb, dynamic starfield canvas, and 3D character-by-character staggered typography (`AI & WEB`, `SOFTWARE`, `DEVELOPER`) with corner developer statements and quick CTAs.
- **Overlapping About Bento (8 Authentic Cards):**
  1. *Diagonal Rounded Profile Card* with authentic portrait styling and status badge
  2. *Continuous Infinite Marquee Pill*
  3. *Projects Showcase* with interactive preview cards
  4. *Core Expertise Pills* (Python, Java, Flask, Node.js, React, SQL)
  5. *Specialized Services Offering*
  6. *Profiles & Social Media Hub* (GitHub, LinkedIn, Instagram)
  7. *Key Statistics & Metrics* (04+ Projects, 35+ Skills, 1+ Years, Let's work together callout)
- **My Core Expertise (5 Disciplines):** Interactive sidebar with proficiency progress bars, competencies checkmarks, and consultation CTA.
- **Tracing My Path (Journey Timeline):** Chronological milestone track with central glowing axis node from 2022 to 2026, culminating in the "To Be Continued" terminal badge.
- **Certificates & Awards (Professional Milestones):** Centered title with glowing orange gradient, verified credentials from NPTEL, Infosys Springboard, AWS, and IBM.
- **Technologies I Scale (My Arsenal):** Dual-direction infinite smooth marquee featuring brand-accented tools with authentic logos and tagline `i scale`.
- **Workflow & Values (5 Living Engineering Cards):**
  1. *Cost-effective development* (Traffic velocity bar chart with `NOV 10`, `NOV 11`, `TODAY`, 1,955+ requests)
  2. *Tailor-made systems* (Smart Traffic Computer Vision Patent)
  3. *Scalable SaaS backend* (High-throughput services)
  4. *AI roadmap workflows* (AI Placement Mentor Agent)
  5. *Green Tech & Sustainability* (Carbon footprint calculator)
- **Innovated Web Applications (Portfolio Showcase):**
  - 4 authentic flagship projects (`AI Placement Mentor Agent`, `Tree Plantation & Carbon Calculator`, `Smart Traffic Management System`, `Distributed System Architecture`)
  - Stats bar (`4 PROJECTS | 15+ TECHNOLOGIES | 4 INDUSTRIES`)
  - 4 Category filter tabs (`All`, `AI & ML`, `Full-Stack`, `Web Apps`)
  - Info `(i)` button opening an interactive quick-view modal with challenge, solution, and metrics
  - Seamless links to editorial case studies (`/projects/[slug]`)
- **Editorial Case Study Layout (`/projects/[slug]`):**
  - Performance gauges and key metrics
  - Problem & Solution cards
  - Development Journey & Milestones (Phase 01, Phase 02, Phase 03)
  - System architecture & technology breakdown
- **Enclosed Floating Capsule Footer:**
  - Signature Dhanushkaran M styling
  - `• Available for hire` green active beacon
  - Quick social links, `Back to Top ↑` button, and `📍 Coimbatore, Tamil Nadu, India` location
- **Interactive Sandbox & Floating Controls:**
  - iOS 18 Terminal CLI sandbox (`neofetch`, `matrix`, `hack`, `about`, `skills`, `projects`, `contact`)
  - Floating AI Assistant chat drawer with typewriter answers
  - Fixed bottom-left `>_` terminal trigger and bottom-right AI chat trigger
  - Right-edge `• AVAILABLE FOR OPPORTUNITY` vertical badge

---

## 🛠 Tech Stack

- **Framework:** Next.js 15+ App Router
- **Language:** TypeScript 5.x (Strict mode)
- **Styling:** Tailwind CSS 3.4 (Obsidian & Glassmorphic tokens)
- **Animation & Choreography:** Framer Motion 12.x
- **Smooth Scrolling:** Lenis Smooth Scroll
- **Icons:** Lucide React
- **Particle & Visuals:** HTML5 Canvas & Canvas Confetti

---

## 📦 Project Structure

```
├── DESIGN-TOKENS.md         # Measured color codes, typography, shadows, borders
├── MOTION-SPEC.md           # Motion easing curves, stagger delays, spring physics
├── RESPONSIVE-SPEC.md       # Breakpoints & adaptive layout matrix
├── src/
│   ├── app/
│   │   ├── api/stats/       # Real-time telemetry Route Handler
│   │   ├── projects/        # Dedicated projects archive page
│   │   │   └── [slug]/      # Editorial case study detail pages
│   │   ├── resume/          # Interactive credentials & PDF preview
│   │   ├── globals.css      # Custom keyframes & obsidian design tokens
│   │   ├── layout.tsx       # Root layout, metadata, floating controls, JSON-LD
│   │   └── page.tsx         # Home page section assembly
│   ├── components/
│   │   ├── about/           # Overlapping About Bento sheet & 8 cards
│   │   ├── arsenal/         # Technologies i scale dual marquee
│   │   ├── certifications/  # Professional Milestones & credential modal
│   │   ├── contact/         # 3D floating ribbons, particle canvas, & form
│   │   ├── experience/      # Tracing My Path career journey timeline
│   │   ├── footer/          # Enclosed floating capsule pill footer
│   │   ├── hero/            # Celestial orb horizon & 3D typography
│   │   ├── navbar/          # Floating pill navbar & mobile drawer
│   │   ├── projects/        # Innovated Web Applications & quick modal
│   │   ├── services/        # My Core Expertise & proficiency progress bars
│   │   ├── terminal/        # iOS 18 Terminal CLI sandbox & modal
│   │   ├── ui/              # AIAssistant drawer, floating controls, smooth scroll
│   │   └── workflow/        # 5 Living engineering cards
│   └── data/
│       ├── certificates.ts  # 4 authentic verified credentials
│       ├── profile.ts       # Identity, contact, and social links
│       ├── projects.ts      # 8 authentic production projects
│       └── portfolioData.ts # Central typed dataset
```

---

## 💻 Getting Started Locally

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
