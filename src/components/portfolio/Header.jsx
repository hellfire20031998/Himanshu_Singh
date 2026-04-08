import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/data/resumeData';
import { headerMotion } from '@/lib/motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-1 space-y-1 md:space-y-0 py-2 md:py-0">
      <a
        href="#summary"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link text-zinc-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
      >
        Summary
      </a>
      <a
        href="#skills"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link text-zinc-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
      >
        Skills
      </a>
      <a
        href="#experience"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link text-zinc-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
      >
        Experience
      </a>
      <a
        href="#projects"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link text-zinc-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
      >
        Projects
      </a>
      <a
        href="#achievements"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link text-zinc-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
      >
        Achievements
      </a>
      <a
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
        className="nav-link text-zinc-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
      >
        Contact
      </a>
    </div>
  );

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/[0.08] bg-zinc-950/75 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
      {...headerMotion}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#summary"
              className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent transition-opacity duration-200 hover:opacity-90"
            >
              {site.displayName}
            </a>
          </div>
          <div className="hidden md:block">{navLinks}</div>
          <div className="md:hidden">
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 transition-colors duration-200"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-white/[0.08] bg-zinc-950/90"
          >
            <div className="px-2 sm:px-3 pb-3">{navLinks}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
