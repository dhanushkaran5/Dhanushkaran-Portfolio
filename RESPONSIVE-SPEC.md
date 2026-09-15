# RESPONSIVE BREAKPOINT & ADAPTIVE LAYOUT SPECIFICATION

This document outlines the responsive layout behaviors, grid column collapses, typography scaling, and component adaptations across all targeted screen viewports.

---

## 1. Breakpoint Grid Matrix

| Viewport Profile | Width × Height | Max Container Width | Horizontal Margins | Grid Columns | Navigation State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile Small** | `375px × 812px` | `100%` | `16px` (`px-4`) | 1 Column | Fixed Mobile Top Bar + Drawer |
| **Mobile Standard**| `390px × 844px` | `100%` | `16px` (`px-4`) | 1 Column | Fixed Mobile Top Bar + Drawer |
| **Mobile Large** | `412px × 915px` | `100%` | `20px` (`px-5`) | 1 Column | Fixed Mobile Top Bar + Drawer |
| **Tablet Portrait**| `768px × 1024px`| `720px` | `24px` (`px-6`) | 2 Columns | Floating Pill Navbar |
| **Tablet Landscape**| `1024px × 768px`| `960px` | `32px` (`px-8`) | 2-3 Columns | Floating Pill Navbar |
| **Desktop Standard**| `1280px × 800px`| `1200px`| `32px` (`px-8`) | 3 Columns | Floating Pill Navbar + Top Logo |
| **Desktop Wide** | `1440px × 900px`| `1280px`| `32px` (`px-8`) | 3 Columns | Floating Pill Navbar + Top Logo |
| **Ultra-Wide HD** | `1920px × 1080px`| `1440px`| `48px` (`px-12`)| 3-4 Columns | Floating Pill Navbar + Top Logo |

---

## 2. Component-Level Responsive Transformations

### 2.1 Navigation
- **Desktop (≥ 768px):** Floating pill navbar centered horizontally (`fixed top-6 left-1/2 -translate-x-1/2 z-50`), with desktop top-left spinning monogram logo badge (`fixed top-6 left-6 z-50`).
- **Mobile (< 768px):** Fixed top bar (`fixed top-0 inset-x-0 h-16 z-50 px-4 bg-[#0F0E0E]/80 backdrop-blur-xl border-b border-white/10`) with compact logo and hamburger trigger opening a full-screen drawer menu.

### 2.2 Hero Typography
- **Desktop:** 3-Line editorial layout with inline interactive icons (`AI & WEB [GitHub]`, `[LinkedIn] SOFTWARE`, `DEVELOPER [Instagram]`).
- **Mobile:** Fluid font size `clamp(2.5rem, 8vw, 4.5rem)` with automatic line wrapping to prevent horizontal document overflow.

### 2.3 About Section Bento Sheet
- **Desktop:** Overlapping rounded top sheet (`rounded-t-[64px]`) spanning a 12-column Bento grid with side-by-side profile card, IST clock, core skills, and patent cards.
- **Mobile:** Top sheet with `rounded-t-[32px]`, collapsing Bento cards into a clean vertical single-column stack.

### 2.4 Certificates & Awards Carousel
- **Desktop:** Multi-card 3D perspective stack with interactive preview of adjacent left/right cards.
- **Mobile:** Centered active certificate card with bottom navigation buttons and bullet indicators.

### 2.5 Milestone Timeline
- **Desktop:** Alternating left/right card entries anchored to a central glowing vertical axis line.
- **Mobile:** Unified single left-aligned vertical axis with timeline nodes and cards flowing down the right side.

### 2.6 Projects Grid (`/projects` & Home `#work`)
- **Desktop:** 3-column responsive grid (`grid-cols-3 gap-6`).
- **Tablet:** 2-column grid (`grid-cols-2 gap-5`).
- **Mobile:** Single column (`grid-cols-1 gap-4`) with compact badges and direct action buttons.
