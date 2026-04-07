'use client';

import { ReactLenis } from 'lenis/react';

/**
 * Global smooth scroll. Anchor links (#id) are handled by Lenis with offset for the sticky header.
 */
export function LenisRoot({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        autoRaf: true,
        anchors: { offset: -72 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
