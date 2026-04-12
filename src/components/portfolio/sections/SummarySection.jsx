import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { mailtoHref, telHref } from '@/lib/contact';
import { heroContainer, heroItem } from '@/lib/motion';

const btnBase =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 min-h-11 px-6 sm:min-h-10 w-full sm:w-auto';

export function SummarySection() {
  return (
    <motion.section
      id="summary"
      className="text-center mb-16 sm:mb-20 pt-6 sm:pt-10 md:pt-12 scroll-mt-[calc(3.5rem+env(safe-area-inset-top))] sm:scroll-mt-20"
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={heroItem}
        className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-violet-400/90 mb-3 sm:mb-4 px-1"
      >
        {resumeData.headlineTrack}
      </motion.p>
      <motion.h1
        variants={heroItem}
        className="text-[1.65rem] min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 tracking-tight px-1 text-balance bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent"
      >
        {resumeData.headline}
      </motion.h1>
      <motion.p
        variants={heroItem}
        className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 sm:mb-10 px-1 text-pretty"
      >
        {resumeData.summary}
      </motion.p>
      <motion.div
        variants={heroItem}
        className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 max-w-md sm:max-w-none mx-auto"
      >
        <motion.a
          href={mailtoHref(resumeData.contact.email)}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          className={`${btnBase} bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:from-violet-500 hover:to-fuchsia-500`}
        >
          Email me
        </motion.a>
        <motion.a
          href={telHref(resumeData.contact.phone)}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          className={`${btnBase} border border-white/15 bg-white/[0.06] text-zinc-100 backdrop-blur-sm hover:bg-white/[0.1] hover:border-white/25`}
        >
          Call
        </motion.a>
        <motion.a
          href="#experience"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 380, damping: 24 }}
          className={`${btnBase} border border-transparent text-zinc-400 font-medium hover:text-violet-300 sm:px-5`}
        >
          View experience →
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
