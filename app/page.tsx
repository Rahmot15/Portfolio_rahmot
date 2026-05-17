"use client";

import { BackgroundWrapper } from "@/components/background-wrapper";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { ContactMe } from "@/components/contact-me";
import { AboutMe } from "@/components/about-me";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <BackgroundWrapper>
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <ProjectCard />
        <ContactMe />
      </main>
    </BackgroundWrapper>
  );
}
