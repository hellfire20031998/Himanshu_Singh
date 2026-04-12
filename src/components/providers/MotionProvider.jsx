'use client';

import { MotionConfig } from 'framer-motion';

/** Respects `prefers-reduced-motion` for all Framer Motion descendants. */
export function MotionProvider({ children }) {
  return <MotionConfig reduced="user">{children}</MotionConfig>;
}
