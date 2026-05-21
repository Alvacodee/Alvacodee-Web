import Hero from "@/app/components/sections/Hero";
import AboutNarrative from "@/app/components/sections/AboutNarrative";
import EducationSection from "@/app/components/sections/EducationSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import AchievementsSection from "@/app/components/sections/AchievementsSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import WritingSection from "@/app/components/sections/WritingSection";
import JourneySection from "@/app/components/sections/JourneySection";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-base">
      <Hero />
      <AboutNarrative />
      <div className="section-divider mx-6" />
      <EducationSection />
      <div className="section-divider mx-6" />
      <ProjectsSection />
      <div className="section-divider mx-6" />
      <ExperienceSection />
      <div className="section-divider mx-6" />
      <AchievementsSection />
      <div className="section-divider mx-6" />
      <SkillsSection />
      <div className="section-divider mx-6" />
      <WritingSection />
      <div className="section-divider mx-6" />
      <JourneySection />
      <div className="section-divider mx-6" />
      <Contact />
    </main>
  );
}
