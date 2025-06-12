"use client"

import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

const experiences = [
  {
    title: "Développement d'API et Gestion de Base de Données",
    description:
      "Développement d'applications web complètes avec Next.js, TypeScript et Supabase. Création d'APIs robustes et d'interfaces utilisateur modernes.",
  },
  {
    title: "Création de Serveurs Web avec Node.js et Express",
    description:
      "Développement d'applications côté serveur performantes avec Node.js et Express, incluant la gestion des routes, middleware personnalisés et architecture RESTful pour des services web scalables.",
  },
  {
    title: "Sécurité des Applications Web",
    description:
      "Mise en œuvre de solutions de sécurité robustes, incluant l'authentification par token et la gestion des autorisations pour protéger les données sensibles.",
  },
  {
    title: "Intégration de Systèmes de Paiement",
    description:
      "Intégration de solutions de paiement comme Stripe et E-billing pour des transactions sécurisées et efficaces, améliorant l'expérience utilisateur.",
  },
  {
    title: "Création d'Interfaces Utilisateur",
    description:
      "Conception d'interfaces utilisateur réactives et intuitives à l'aide de React et Next.js, transformant des maquettes en applications fonctionnelles.",
  },
]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[#3A2A4E] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#A77B9E]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#EAE8F3]/5 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-4xl font-black text-[#EAE8F3] mb-4">Mon Expérience</h2>
            <p className="text-[#EAE8F3]/80 mt-4 max-w-2xl mx-auto">
              Découvrez mon parcours et les réalisations qui ont façonné mon expertise
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Experience Timeline */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-12 relative before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-[#A77B9E]/30 before:h-full before:z-0">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative z-10 flex items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                    <div
                      className="relative overflow-hidden rounded-xl bg-[#2C2F33]/50 backdrop-blur-sm border border-[#A77B9E]/20 p-6 transition-all duration-500 
                      hover:border-[#A77B9E] hover:shadow-[0_0_20px_rgba(167,123,158,0.3)] hover:scale-105 hover:bg-[#2C2F33]/80 group"
                    >
                      <div
                        className="absolute -inset-1 bg-gradient-to-r from-[#A77B9E]/10 to-[#3A2A4E]/10 rounded-xl blur opacity-25 
                        group-hover:opacity-70 group-hover:blur-md transition duration-700"
                      ></div>

                      <div className="relative">
                        <h3 className="text-xl font-bold text-[#EAE8F3] mb-4 group-hover:text-[#A77B9E] transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <p className="text-[#EAE8F3]/90 group-hover:text-[#EAE8F3] transition-colors duration-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-[#A77B9E] to-[#3A2A4E] z-10 flex items-center justify-center 
                      transition-transform duration-500 hover:scale-150 hover:from-[#A77B9E] hover:to-[#A77B9E]"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#EAE8F3]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
