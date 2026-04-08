import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/data/resumeData';
import { headerMotion } from '@/lib/motion';

const linkClass =
  'nav-link text-zinc-400 px-3 py-3 sm:py-2 rounded-lg text-sm font-medium transition-colors duration-200 min-h-11 sm:min-h-0 inline-flex items-center';
const resumeLinkClass =
  'inline-flex items-center justify-center px-3 py-3 sm:py-2 rounded-lg text-sm font-semibold min-h-11 sm:min-h-0 text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-200 shadow-[0_8px_20px_rgba(124,58,237,0.28)]';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-0.5 lg:space-x-1 space-y-0 md:space-y-0 py-1 md:py-0">
      <a href="#summary" onClick={() => setIsMenuOpen(false)} className={linkClass}>
        Summary
      </a>
      <a href="#skills" onClick={() => setIsMenuOpen(false)} className={linkClass}>
        Skills
      </a>
      <a href="#experience" onClick={() => setIsMenuOpen(false)} className={linkClass}>
        Experience
      </a>
      <a href="#projects" onClick={() => setIsMenuOpen(false)} className={linkClass}>
        Projects
      </a>
      <a href="#achievements" onClick={() => setIsMenuOpen(false)} className={linkClass}>
        Achievements
      </a>
      <a href="#contact" onClick={() => setIsMenuOpen(false)} className={linkClass}>
        Contact
      </a>
      <a
        href="/Himanshu-Singh-Resume.pdf"
        download="Himanshu-Singh-Resume.pdf"
        onClick={() => setIsMenuOpen(false)}
        className={resumeLinkClass}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4 mr-1.5"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1" />
        </svg>
        Resume
      </a>
    </div>
  );

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/[0.08] bg-zinc-950/75 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.35)] supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]"
      {...headerMotion}
    >
      <nav
        className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex-shrink-0 min-w-0 pr-2">
            <a
              href="#summary"
              className="text-base sm:text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent transition-opacity duration-200 hover:opacity-90 truncate max-w-[70vw] sm:max-w-none inline-block"
            >
              {site.displayName}
            </a>
          </div>
          <div className="hidden md:flex md:flex-wrap md:justify-end md:gap-0 lg:gap-1">{navLinks}</div>
          <div className="md:hidden">
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 transition-colors duration-200"
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
            className="md:hidden overflow-hidden border-t border-white/[0.08] bg-zinc-950/95"
          >
            <div className="px-2 sm:px-3 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">{navLinks}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
