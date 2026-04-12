'use client';

import { motion } from 'framer-motion';
import {
  AchievementsAndEducationSection,
  Footer,
  GlobalStyles,
  Header,
  ProjectsSection,
  SkillsSection,
  SummarySection,
  WorkExperienceSection,
} from '@/components/portfolio';
import { mainEnter } from '@/lib/motion';

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <div className="relative z-10">
        <Header />
        <motion.main
          className="max-w-7xl mx-auto w-full px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14"
          {...mainEnter}
        >
          <SummarySection />
          <SkillsSection />
          <WorkExperienceSection />
          <ProjectsSection />
          <AchievementsAndEducationSection />
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
