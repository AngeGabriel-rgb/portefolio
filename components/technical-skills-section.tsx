"use client"

import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

const backendSkills = [
  {
    name: "Node.js",
    icon: "🟢",
  },
  {
    name: "Express",
    icon: "🚀",
  },
  {
    name: "NoSQL",
    icon: "🔄",
  },
  {
    name: "SQL",
    icon: "🗃️",
  },
  {
    name: "Prisma",
    icon: "📦",
  },
  {
    name: "REST API",
    icon: "🌐",
  },
  {
    name: "Docker",
    icon: "🐳",
  },
  {
    name: "Supabase",
    icon: "⚡",
  },
  {
    name: "Stripe",
    icon: "💳",
  },
  {
    name: "E-billing",
    icon: "💰",
  },
  { name: "TypeScript",
    icon: "🔷",
 },
      { name: "React",
      icon: "⚛️",
     }, 
  { name: "Next.js",
     icon: "▲",
   },
]

export function TechnicalSkillsSection() {
  const { t } = useLanguage()

  // Duplicate arrays multiple times for seamless infinite scroll
  const duplicatedBackend = [...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills]

  return (
    <section className="py-20 bg-[#2C2F33] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#A77B9E]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[#3A2A4E]/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-4xl font-black text-[#EAE8F3] mb-4">Mes technologies</h2>
            <p className="text-[#EAE8F3]/80 mt-4 max-w-2xl mx-auto">
              Un aperçu des technologies et outils que j'utilise pour créer des solutions innovantes
            </p>
          </AnimatedSection>
        </div>

        {/* Backend Skills - Scrolling Left to Right */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#A77B9E] mb-2">Technologies Utilisées</h3>
            <div className="w-16 h-1 bg-[#A77B9E] mx-auto"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left-to-right-fast whitespace-nowrap">
              {duplicatedBackend.map((skill, index) => (
                <div
                  key={`backend-${index}`}
                  className="flex-shrink-0 mx-8 flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#EAE8F3] group-hover:text-[#A77B9E] transition-colors duration-300 whitespace-nowrap">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
