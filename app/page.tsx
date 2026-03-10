import { TerminalHero } from "@/components/home/TerminalHero";
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";
import { SkillsSection } from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <>
      <TerminalHero />
      <ProjectsCarousel />
      <SkillsSection />
    </>
  );
}
