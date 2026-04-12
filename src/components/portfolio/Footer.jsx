import { motion } from 'framer-motion';
import { resumeData, SOCIAL } from '@/data/resumeData';
import { telHref } from '@/lib/contact';
import { sectionReveal, staggerContainer, staggerItem } from '@/lib/motion';
import { SocialLink } from './SocialLink';

export function Footer() {
  return (
    <motion.footer
      id="contact"
      className="relative scroll-mt-[calc(3.5rem+env(safe-area-inset-top))] sm:scroll-mt-20 border-t border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]"
      {...sectionReveal}
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto py-10 sm:py-12 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          className="text-xl sm:text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent text-balance px-2"
          initial={{ opacity: 0, y: 14, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Contact
        </motion.h3>
        <motion.p
          className="mb-4 text-zinc-400 text-sm sm:text-base flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href={`mailto:${resumeData.contact.email}`}
            className="hover:text-violet-300 transition-colors duration-200 underline-offset-4 hover:underline break-all px-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {resumeData.contact.email}
          </motion.a>
          <span className="hidden sm:inline text-zinc-600 mx-2" aria-hidden>
            |
          </span>
          <motion.a
            href={telHref(resumeData.contact.phone)}
            className="hover:text-violet-300 transition-colors duration-200 underline-offset-4 hover:underline"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {resumeData.contact.phone}
          </motion.a>
        </motion.p>
        <motion.div
          className="flex justify-center flex-wrap gap-x-8 gap-y-3 text-sm min-h-11 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12px' }}
        >
          <motion.span variants={staggerItem} className="inline-flex">
            <SocialLink href={SOCIAL.linkedin}>LinkedIn</SocialLink>
          </motion.span>
          <motion.span variants={staggerItem} className="inline-flex">
            <SocialLink href={SOCIAL.github}>GitHub</SocialLink>
          </motion.span>
          <motion.span variants={staggerItem} className="inline-flex">
            <SocialLink href={SOCIAL.leetcode}>LeetCode</SocialLink>
          </motion.span>
        </motion.div>
      </div>
    </motion.footer>
  );
}
