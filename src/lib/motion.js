/** Shared easing (cubic bezier) for Framer Motion */
export const easeOut = [0.22, 1, 0.36, 1];

/** Scroll-triggered section reveal */
export const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px 0px -80px 0px' },
  transition: { duration: 0.55, ease: easeOut },
};

/** Hero loads immediately (above the fold) */
export const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, scale: 0.94, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

export const headerMotion = {
  initial: { opacity: 0, y: -14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: easeOut },
};
