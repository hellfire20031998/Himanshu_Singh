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
      className="text-center mb-20 pt-8 md:pt-12"
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={heroItem}
        className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400/90 mb-4"
      >
        {resumeData.headlineTrack}
      </motion.p>
      <motion.h1
        variants={heroItem}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 tracking-tight bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent"
      >
        {resumeData.headline}
      </motion.h1>
      <motion.p
        variants={heroItem}
        className="max-w-3xl mx-auto text-lg text-zinc-400 leading-relaxed mb-10"
      >
        {resumeData.summary}
      </motion.p>
      <motion.div variants={heroItem} className="flex flex-wrap justify-center gap-3">
        <motion.button
          type="button"
          onClick={handleCopyEmail}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2.5 text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 cursor-pointer"
        >
          Email me
        </motion.button>
        <motion.a
          href={telHref(resumeData.contact.phone)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] text-zinc-100 px-6 py-2.5 text-sm font-semibold backdrop-blur-sm hover:bg-white/[0.1] hover:border-white/25 transition-all duration-300"
        >
          Call
        </motion.a>
        <motion.a
          href="#experience"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center rounded-full text-zinc-400 px-6 py-2.5 text-sm font-medium hover:text-violet-300 transition-colors duration-200"
        >
          View experience →
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
