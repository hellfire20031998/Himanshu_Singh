import { motion } from 'framer-motion';
import { resumeData, SOCIAL } from '@/data/resumeData';
import { telHref } from '@/lib/contact';
import { sectionReveal } from '@/lib/motion';
import { SocialLink } from './SocialLink';

export function Footer() {
  return (
    <motion.footer
      id="contact"
      className="bg-slate-800 text-stone-300 scroll-mt-20"
      {...sectionReveal}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Contact</h3>
        <p className="mb-2">
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
          >
            {resumeData.contact.email}
          </a>
          <span className="mx-2 text-stone-500">|</span>
          <a
            href={telHref(resumeData.contact.phone)}
            className="hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
          >
            {resumeData.contact.phone}
          </a>
        </p>
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-sm mb-2">
          <SocialLink href={SOCIAL.linkedin}>LinkedIn</SocialLink>
          <SocialLink href={SOCIAL.github}>GitHub</SocialLink>
          <SocialLink href={SOCIAL.leetcode}>LeetCode</SocialLink>
        </div>
      </div>
    </motion.footer>
  );
}
