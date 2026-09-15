# DESIGN TOKENS SPECIFICATION

This document outlines all measured design tokens, color values, typography scales, glassmorphism blur settings, shadows, and radii extracted from the [Rameshwar Bhagwat Reference Portfolio](https://www.rameshwarbhagwat.me/) and implemented for the portfolio.

---

## 1. Color System

### Primary Canvas & Surfaces
| Token Name | Computed Value | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#0B0B0C` / `#0F0E0E` | `--bg-obsidian` | Base root background across all pages |
| **Surface Card** | `rgba(19, 18, 20, 0.85)` | `--surface-card` | Bento cards, project cards, carousel containers |
| **Surface Elevated** | `rgba(25, 24, 26, 0.95)` | `--surface-elevated` | Modal overlays, terminal window chrome |
| **Surface Glass** | `rgba(255, 255, 255, 0.04)` | `--surface-glass` | Badges, filter chips, quick action buttons |
| **Surface Glass Hover** | `rgba(255, 255, 255, 0.08)` | `--surface-glass-hover` | Hover state on pills, buttons, and links |

### Borders & Dividers
| Token Name | Computed Value | Usage |
| :--- | :--- | :--- |
| **Border Subtle** | `rgba(255, 255, 255, 0.06)` | Inner card separators, section sub-dividers |
| **Border Default** | `rgba(255, 255, 255, 0.10)` | Bento card outlines, timeline nodes, pill borders |
| **Border Elevated** | `rgba(255, 255, 255, 0.20)` | Hover state on interactive cards & inputs |
| **Border Top Sheet** | `rgba(255, 255, 255, 0.15)` | Overlapping About sheet top border divider |
| **Border Accent Glow** | `rgba(255, 107, 61, 0.40)` | Interactive focus & highlighted credentials |

### Text & Typography Colors
| Token Name | Computed Value | Usage |
| :--- | :--- | :--- |
| **Text Pure White** | `#FFFFFF` (`rgb(255, 255, 255)`) | H1/H2 Headings, active tabs, primary buttons |
| **Text Secondary** | `rgba(255, 255, 255, 0.70)` (`#A1A1AA`) | Subheadings, body copy, descriptions |
| **Text Muted** | `rgba(255, 255, 255, 0.40)` (`#71717A`) | Metadata labels, dates, card tags |
| **Text Placeholder** | `rgba(255, 255, 255, 0.25)` | Input field placeholders, corner labels |

### Radiant Sunset & Coral Accents
| Accent Name | Computed Value | Usage |
| :--- | :--- | :--- |
| **Coral Red / Orange** | `#ff6b3d` / `#ff8e66` | Primary brand accent, glowing buttons, ribbons |
| **Startup Highlight** | `#FF5757` | Contact heading keyword highlight |
| **Enterprise Highlight** | `#D946EF` | Contact heading keyword highlight |
| **Vision Highlight** | `#06B6D4` | Contact heading keyword highlight |
| **Live Online Beacon** | `#10B981` (Emerald) | Availability dots, ping beacons, verified badges |

---

## 2. Typography Scale

### Fonts
- **Primary Headings:** `Plus Jakarta Sans`, sans-serif (Weights: 700, 800, 900)
- **Monospace Telemetry:** `JetBrains Mono`, monospace (Weights: 400, 500, 700)
- **Body & Subtitles:** `Plus Jakarta Sans` / `Outfit`, sans-serif

### Scale Definitions
| Level | Font Size | Line Height | Letter Spacing | Font Family |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Massive Display** | `clamp(3.5rem, 11vw, 9.5rem)` | `0.92` | `-0.04em` | Plus Jakarta Sans 900 |
| **Section H2 Title** | `clamp(2rem, 5vw, 4.5rem)` | `1.02` | `-0.02em` | Plus Jakarta Sans 800 |
| **Card H3 Title** | `1.25rem – 1.75rem` | `1.2` | `-0.01em` | Plus Jakarta Sans 700 |
| **Monospace Label** | `0.6875rem – 0.8125rem` | `1.4` | `+0.05em` | JetBrains Mono 500 |
| **Body Standard** | `0.875rem – 1rem` | `1.6` | `0em` | Plus Jakarta Sans 400 |

---

## 3. Spacing Rhythm & Gutters

| Token | Value | Target Context |
| :--- | :--- | :--- |
| `--space-section-y` | `5rem – 8rem` (80px – 128px) | Top/bottom padding on major sections |
| `--space-container-x` | `1rem – 2rem` (16px – 32px) | Left/right page margins |
| `--space-card-p` | `1.75rem – 2.25rem` (28px – 36px) | Inner padding inside bento/project cards |
| `--space-bento-gap` | `1.25rem – 1.5rem` (20px – 24px) | Grid gaps across Bento cards |

---

## 4. Border Radii & Blur Filters

| Element | Radius Token | Value | Backdrop Filter Blur |
| :--- | :--- | :--- | :--- |
| **Top About Sheet** | `rounded-t-[32px] md:rounded-t-[64px]` | `32px / 64px` | `backdrop-blur-none` |
| **Bento & Project Cards** | `rounded-3xl` | `24px` | `backdrop-blur-xl` (20px) |
| **Pill Navbar** | `rounded-full` | `9999px` | `backdrop-blur-2xl` (24px) |
| **Enclosed Capsule Footer**| `rounded-3xl` | `24px` | `backdrop-blur-2xl` (24px) |
| **Terminal Window** | `rounded-3xl` | `24px` | `backdrop-blur-2xl` (24px) |
| **Buttons & Badges** | `rounded-full` / `rounded-2xl` | `9999px / 16px` | `backdrop-blur-md` (12px) |

---

## 5. Shadows & Elevation

```css
/* Card Elevation Shadow */
--shadow-card: 0 10px 30px rgba(0, 0, 0, 0.5);

/* Floating Sheet Elevation */
--shadow-sheet: 0 -24px 48px rgba(0, 0, 0, 0.9);

/* Glowing Button Focus */
--shadow-glow: 0 0 25px rgba(255, 107, 61, 0.35);
```
