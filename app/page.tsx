import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { TechnicalSkillsSection } from "@/components/technical-skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EAE8F3]">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <TechnicalSkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
