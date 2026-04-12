'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { site } from '@/data/resumeData';
import { headerMotion, navLinkItem, navStaggerContainer } from '@/lib/motion';

const linkClass =
  'nav-link text-zinc-400 px-3 py-3 sm:py-2 rounded-lg text-sm font-medium transition-colors duration-200 min-h-11 sm:min-h-0 inline-flex items-center';
const resumeLinkClass =
  'inline-flex items-center justify-center px-3 py-3 sm:py-2 rounded-lg text-sm font-semibold min-h-11 sm:min-h-0 text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-200 shadow-[0_8px_20px_rgba(124,58,237,0.28)]';

const NAV_LINKS = [
  { href: '#summary', label: 'Summary' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const shadowAlpha = useTransform(scrollY, [0, 72], [0.34, 0.52]);
  const headerShadow = useMotionTemplate`0 4px 28px rgba(0,0,0,${shadowAlpha}), 0 12px 40px -8px rgba(0,0,0,${shadowAlpha})`;

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = (
    <>
      {NAV_LINKS.map(({ href, label }) => (
        <motion.a
          key={href}
          href={href}
          variants={navLinkItem}
          onClick={closeMenu}
          className={linkClass}
        >
          {label}
        </motion.a>
      ))}
      <motion.a
        href="/Himanshu-Singh-Resume.pdf"
        download="Himanshu-Singh-Resume.pdf"
        variants={navLinkItem}
        onClick={closeMenu}
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
      </motion.a>
    </>
  );

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/[0.08] bg-zinc-950/75 backdrop-blur-xl supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]"
      style={{ boxShadow: headerShadow }}
      {...headerMotion}
    >
      <nav
        className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex-shrink-0 min-w-0 pr-2">
            <motion.a
              href="#summary"
              className="text-base sm:text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent truncate max-w-[70vw] sm:max-w-none inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            >
              {site.displayName}
            </motion.a>
          </div>
          <motion.div
            className="hidden md:flex md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-0 lg:gap-1"
            variants={navStaggerContainer}
            initial="hidden"
            animate="show"
          >
            {navLinks}
          </motion.div>
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-white/[0.08] bg-zinc-950/95"
          >
            <motion.div
              className="px-2 sm:px-3 pb-[max(1rem,env(safe-area-inset-bottom,0px))] flex flex-col gap-0.5 py-2"
              variants={navStaggerContainer}
              initial="hidden"
              animate="show"
            >
              {navLinks}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
