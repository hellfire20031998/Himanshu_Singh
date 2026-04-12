'use client';

import { motion } from 'framer-motion';

export function SocialLink({ href, children }) {
  if (!href) {
    return <span className="text-zinc-600 py-2 inline-block">{children}</span>;
  }
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-violet-300 underline-offset-4 hover:underline transition-colors duration-200 inline-flex items-center min-h-11 px-2 sm:min-h-0 sm:px-0 sm:inline"
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}
