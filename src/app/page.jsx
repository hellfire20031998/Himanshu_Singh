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
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <SummarySection />
        <SkillsSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <AchievementsAndEducationSection />
      </main>
      <Footer />
    </>
  );
}
