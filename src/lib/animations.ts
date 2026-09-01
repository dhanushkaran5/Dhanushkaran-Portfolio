import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: custom * 0.1,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: 'easeOut',
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 45,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.025,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};
