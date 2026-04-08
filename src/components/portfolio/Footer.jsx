import { motion } from 'framer-motion';
import { resumeData, SOCIAL } from '@/data/resumeData';
import { telHref } from '@/lib/contact';
import { sectionReveal } from '@/lib/motion';
import { SocialLink } from './SocialLink';

export function Footer() {
  return (
    <motion.footer
      id="contact"
      className="relative scroll-mt-20 border-t border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl"
      {...sectionReveal}
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Contact
        </h3>
        <p className="mb-4 text-zinc-400">
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="hover:text-violet-300 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            {resumeData.contact.email}
          </a>
          <span className="mx-2 text-zinc-600">|</span>
          <a
            href={telHref(resumeData.contact.phone)}
            className="hover:text-violet-300 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            {resumeData.contact.phone}
          </a>
        </p>
        <div className="flex justify-center flex-wrap gap-x-10 gap-y-2 text-sm">
          <SocialLink href={SOCIAL.linkedin}>LinkedIn</SocialLink>
          <SocialLink href={SOCIAL.github}>GitHub</SocialLink>
          <SocialLink href={SOCIAL.leetcode}>LeetCode</SocialLink>
        </div>
      </div>
    </motion.footer>
  );
}
