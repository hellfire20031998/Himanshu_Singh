'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import {
  bulletStaggerContainer,
  bulletStaggerItem,
  sectionReveal,
  sectionSubtitleMotion,
  sectionTitleMotion,
  springPop,
  staggerContainer,
  staggerItemProminent,
} from '@/lib/motion';

/** Dot colors cycle for each role; ring matches page background so the track reads cleanly. */
const DOT_RING = 'ring-2 ring-[color:var(--background)]';
const DOT_COLORS = [
  'bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.55)]',
  'bg-fuchsia-500 shadow-[0_0_12px_rgba(217,70,239,0.45)]',
  'bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.45)]',
];

const entryCard =
  'rounded-xl sm:rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.35)]';

export function WorkExperienceSection() {
  const jobs = resumeData.workExperience;

  return (
    <motion.section
      id="experience"
      className="mb-16 sm:mb-20 scroll-mt-[calc(3.5rem+env(safe-area-inset-top))] sm:scroll-mt-20"
      {...sectionReveal}
    >
      <motion.h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center text-balance px-1" {...sectionTitleMotion}>
        Experience
      </motion.h2>
      <motion.p
        className="text-center text-zinc-500 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base px-1 text-pretty"
        {...sectionSubtitleMotion}
      >
        Roles aligned with my resume—backend, full stack, and shipping in production environments.
      </motion.p>

      <div className="relative border-l-2 border-solid border-zinc-600 pl-8 sm:pl-10 max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col gap-10 sm:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-20px' }}
        >
          {jobs.map((job, index) => (
            <motion.article
              key={job.id}
              variants={staggerItemProminent}
              className="relative min-w-0"
            >
              <motion.div
                className={`absolute top-1.5 sm:top-2 size-3 sm:size-3.5 rounded-full -translate-x-1/2 left-[calc(-2rem-1px)] sm:left-[calc(-2.5rem-1px)] ${DOT_RING} ${DOT_COLORS[index % DOT_COLORS.length]}`}
                aria-hidden
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={springPop}
              />
              <div className={entryCard}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 text-pretty">
                  {job.role}
                </h3>
                <p className="text-sm font-medium text-violet-400/90 mb-1 break-words">{job.company}</p>
                <p className="text-xs text-zinc-500 mb-4 break-words">{job.period}</p>
                <motion.ul
                  className="list-disc pl-4 sm:pl-5 space-y-2.5 text-zinc-400 marker:text-violet-500/80 text-sm sm:text-base [word-break:break-word]"
                  variants={bulletStaggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {job.bullets.map((b, i) => (
                    <motion.li key={i} variants={bulletStaggerItem}>
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
