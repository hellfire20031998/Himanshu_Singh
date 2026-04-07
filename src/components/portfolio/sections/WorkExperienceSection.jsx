import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { sectionReveal } from '@/lib/motion';
import { TabbedPanel } from '../TabbedPanel';

export function WorkExperienceSection() {
  return (
    <motion.section id="experience" className="mb-16" {...sectionReveal}>
      <TabbedPanel
        variant="work"
        items={resumeData.workExperience}
        defaultId={resumeData.workExperience[0].id}
        sectionTitle="Experience"
        sectionSubtitle="Roles aligned with my resume—backend, full stack, and shipping in production environments."
      />
    </motion.section>
  );
}
