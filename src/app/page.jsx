'use client';

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

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <div className="relative z-10">
        <Header />
        <main className="max-w-7xl mx-auto w-full px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">
          <SummarySection />
          <SkillsSection />
          <WorkExperienceSection />
          <ProjectsSection />
          <AchievementsAndEducationSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
