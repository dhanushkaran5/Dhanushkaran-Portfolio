# MOTION SPECIFICATION & ANIMATION CHOREOGRAPHY

This document specifies the motion choreography, easing curves, duration timings, spring dynamics, and scroll triggers implemented across the portfolio.

---

## 1. Easing Functions & Spring Physics

```typescript
export const MOTION_TOKENS = {
  // Smooth Exponential Out Easing (Reference match)
  easeOutExpo: [0.16, 1, 0.3, 1],

  // Smooth Quart Out
  easeOutQuart: [0.25, 1, 0.5, 1],

  // Spring Physics for Cursors & Follower Rings
  springDamped: { damping: 28, stiffness: 350, mass: 0.5 },
  springSnappy: { damping: 20, stiffness: 300 },

  // Durations
  durations: {
    instant: 0.15,
    fast: 0.3,
    medium: 0.5,
    slow: 0.8,
    deliberate: 1.2,
  },
};
```

---

## 2. Component Motion Choreography

### 2.1 Hero Section 3D Letter Reveal
- **Trigger:** Window mount / Initial page load.
- **Initial State:** `opacity: 0`, `y: 110%`, `rotateX: 75deg`, `perspective: 1200px`.
- **Final State:** `opacity: 1`, `y: 0%`, `rotateX: 0deg`.
- **Stagger:** `0.028s` per letter within a line; `0.15s` delay between line 1 (`AI & WEB`), line 2 (`SOFTWARE`), and line 3 (`DEVELOPER`).
- **Duration:** `0.75s` per character.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`.

### 2.2 Rotating Conic Borders (`animate-navbar-border-spin`)
- **Target Elements:** Top-left logo badge and floating pill navbar.
- **Implementation:** Keyframe rotation of conic gradient backdrop behind a 1px masked overlay.
- **Keyframes:**
  ```css
  @keyframes navbarBorderSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  ```
- **Duration:** `14s` linear infinite.

### 2.3 Certificates & Awards 3D Carousel
- **Trigger:** User interaction (`Prev` / `Next` controls or keyboard arrow keys).
- **Active Card:** `scale: 1`, `y: 0`, `opacity: 1`, `zIndex: 30`.
- **Adjacent Right Card:** `scale: 0.90`, `x: 65%`, `y: 15px`, `opacity: 0.45`, `zIndex: 20`.
- **Adjacent Left Card:** `scale: 0.90`, `x: -65%`, `y: 15px`, `opacity: 0.45`, `zIndex: 20`.
- **Hidden Cards:** `scale: 0.75`, `opacity: 0`, `zIndex: 10`.
- **Transition:** `duration: 0.6s`, `ease: [0.16, 1, 0.3, 1]`.

### 2.4 Milestone Journey Timeline
- **Trigger:** `whileInView` with viewport margin `-60px`.
- **Initial State:** `opacity: 0`, `y: 35px`, `scale: 0.98`.
- **Final State:** `opacity: 1`, `y: 0`, `scale: 1`.
- **Duration:** `0.6s`.
- **Connector Line:** Pulsing central node with `scale: [1, 1.25, 1]` infinite ambient beacon.

### 2.5 Infinite Marquee Loops
- **Row 1 (Arsenal Forward):** `x: ['0%', '-50%']`, `duration: 32s`, `ease: 'linear'`, `repeat: Infinity`.
- **Row 2 (Arsenal Reverse):** `x: ['-50%', '0%']`, `duration: 36s`, `ease: 'linear'`, `repeat: Infinity`.
- **Typography Ribbon Banner:** `x: ['0%', '-50%']`, `duration: 25s`, `ease: 'linear'`, `repeat: Infinity`.

### 2.6 Smooth Scrolling (Lenis)
- **Lerp:** `0.09`.
- **Duration:** `1.15s`.
- **Smooth Touch:** Disabled on touch devices to respect native platform deceleration curves.

---

## 3. Reduced Motion Compliance (`prefers-reduced-motion: reduce`)

When user specifies reduced motion in OS preferences:
1. `LoadingScreen` dismisses instantly.
2. `Hero` 3D character rotation is bypassed in favor of simple instant text layout.
3. Marquees and rotating conic borders pause animation.
4. Carousel animations resolve instantaneously.
