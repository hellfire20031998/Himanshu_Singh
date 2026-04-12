/** Shared easing (cubic bezier) for Framer Motion */
export const easeOut = [0.22, 1, 0.36, 1];

/** Snappy spring for dots, chips, small UI */
export const springPop = { type: 'spring', stiffness: 420, damping: 22, mass: 0.85 };

/** Scroll-triggered section reveal (blur kept light for performance) */
export const sectionReveal = {
  initial: { opacity: 0, y: 32, filter: 'blur(5px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-40px 0px -80px 0px' },
  transition: { duration: 0.62, ease: easeOut },
};

/** First paint of the main column */
export const mainEnter = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeOut, delay: 0.04 },
};

/** Hero loads immediately (above the fold) */
export const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.58, ease: easeOut },
  },
};

/** Stagger for short lists (timeline jobs, bento rows) */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Stagger for many small chips (skills tags) */
export const staggerContainerDense = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.032, delayChildren: 0.03 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: easeOut },
  },
};

/** Larger cards (experience timeline entries) */
export const staggerItemProminent = {
  hidden: { opacity: 0, y: 22, scale: 0.98, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.52, ease: easeOut },
  },
};

/** List bullets under a tab or job card */
export const bulletStaggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.08 },
  },
};

export const bulletStaggerItem = {
  hidden: { opacity: 0, x: -14, filter: 'blur(3px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.36, ease: easeOut },
  },
};

/** Tab / project panel body swap */
export const panelPhaseMotion = {
  initial: { opacity: 0, x: 18, filter: 'blur(6px)' },
  animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -14, filter: 'blur(4px)' },
  transition: { duration: 0.32, ease: easeOut },
};

/** Centered section titles (Skills, Experience, …) */
export const sectionTitleMotion = {
  initial: { opacity: 0, y: 16, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-32px' },
  transition: { duration: 0.48, ease: easeOut },
};

export const sectionSubtitleMotion = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-32px' },
  transition: { duration: 0.45, ease: easeOut, delay: 0.06 },
};

/** Header nav links (desktop + mobile sheet) */
export const navStaggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.08 },
  },
};

export const navLinkItem = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeOut },
  },
};

export const headerMotion = {
  initial: { opacity: 0, y: -14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: easeOut },
};
