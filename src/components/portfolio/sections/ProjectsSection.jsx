import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { sectionReveal } from '@/lib/motion';
import { TabbedPanel } from '../TabbedPanel';

export function ProjectsSection() {
  return (
    <motion.section id="projects" className="mb-20" {...sectionReveal}>
      <TabbedPanel
        variant="project"
        items={resumeData.projects}
        defaultId={resumeData.projects[0].id}
        sectionTitle="Projects"
        sectionSubtitle="Deep dives into platforms I have designed and built end to end."
      />
    </motion.section>
  );
}
