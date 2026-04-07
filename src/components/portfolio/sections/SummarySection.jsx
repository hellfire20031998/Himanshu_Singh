import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { telHref } from '@/lib/contact';
import { heroContainer, heroItem } from '@/lib/motion';

export function SummarySection() {
  const handleCopyEmail = async () => {
    const email = resumeData.contact.email;
    try {
      await navigator.clipboard.writeText(email);
      window.alert(`${email}\n\nEmail copied to clipboard.`);
    } catch {
      window.alert(`Could not copy automatically.\n\nYour email: ${email}`);
    }
  };

  return (
    <motion.section
      id="summary"
      className="text-center mb-16 pt-10 md:pt-14"
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={heroItem}
        className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3"
      >
        {resumeData.headlineTrack}
      </motion.p>
      <motion.h1
        variants={heroItem}
        className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
      >
        {resumeData.headline}
      </motion.h1>
      <motion.p
        variants={heroItem}
        className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-8"
      >
        {resumeData.summary}
      </motion.p>
      <motion.div variants={heroItem} className="flex flex-wrap justify-center gap-3">
        <motion.button
          type="button"
          onClick={handleCopyEmail}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center rounded-full bg-slate-800 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-700 transition-colors duration-200 cursor-pointer shadow-md shadow-slate-900/10"
        >
          Email me
        </motion.button>
        <motion.a
          href={telHref(resumeData.contact.phone)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center rounded-full border border-slate-300 bg-white text-slate-800 px-5 py-2.5 text-sm font-medium hover:bg-stone-50 hover:border-slate-400/80 transition-all duration-200 shadow-sm"
        >
          Call
        </motion.a>
        <motion.a
          href="#experience"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center rounded-full border border-transparent text-slate-600 px-5 py-2.5 text-sm font-medium hover:text-slate-900 transition-colors duration-200"
        >
          View experience →
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
