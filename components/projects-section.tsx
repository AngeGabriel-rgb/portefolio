"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    title: "Anniversaire Platforme",
    descKey: "projects.foodfinder.desc",
    image: "/annive.jpg",
    tags: ["Nextjs", "TypeScript ", "Supabase"],
    github: "https://github.com/AngeGabriel-rgb/anniv_front.git",
    live: "https://morose.netlify.app/",
  },
  {
    title: "Plateforme E-commerce",
    descKey: "projects.mobile.desc",
    image: "/Web.webp",
    tags: ["Nextjs ", "TypeScript"],
    github: "https://github.com/AngeGabriel-rgb/plateforme-e-commerce.git",
    live: "#",
  },
  {
    title: "Anniversaire",
    descKey: "projects.outing.desc",
    image: "/api.jpg",
    tags: ["Node.js", "Prisma", "Express"],
    github: "https://github.com/AngeGabriel-rgb/anniv_back.git",
    live: null,
  },
   {
    title: "Pizza casa",
    descKey: "projects.pizzazasa.desc",
    image: "/hero3.jpg",
    tags: ["Nextjs", "TypeScript ", "Supabase"],
    github: "https://github.com/DhenneTSANGA/Pizza-casa.git",
    live: "https://pizza-casa-one.vercel.app/",
  },
  {
    title: "Liste de présence",
    descKey: "projects.listepresence.desc",
    image: "/dev.png",
    tags: ["Node.js", "Prisma", "Express"],
    github: "https://github.com/AngeGabriel-rgb/liste_presence",
    live: null,
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 bg-[#EAE8F3] transition-colors relative">
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-[#A77B9E]/20 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#A77B9E]/5 rounded-full animate-float-fast-delayed"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4">
            <AnimatedSection animation="slide-right" delay={100}>
              <nav className="sticky top-32 space-y-6">
                <div>
                  <h3 className="text-[#A77B9E] font-medium text-sm uppercase tracking-wider mb-4">
                    {t("projects.position")}
                  </h3>
                  <p className="text-[#2C2F33] text-sm">{t("projects.position.desc")}</p>
                </div>

                <div>
                  <h3 className="text-[#A77B9E] font-medium text-sm uppercase tracking-wider mb-4">
                    {t("projects.title")}
                  </h3>
                </div>
              </nav>
            </AnimatedSection>
          </div>

          <div className="lg:w-3/4">
            <AnimatedSection animation="fade-up" delay={200}>
              <h2 className="text-4xl font-black text-[#3A2A4E] mb-12">{t("projects.title")}</h2>
            </AnimatedSection>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={300 + index * 100}>
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group hover:scale-[1.02]">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="md:w-1/2 p-8 bg-[#2C2F33] text-[#EAE8F3] relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-[#A77B9E]/10 rounded-full -translate-y-10 translate-x-10 transition-transform duration-300 group-hover:scale-150"></div>
                          <h3 className="text-2xl font-bold mb-4 text-[#EAE8F3] relative z-10">{project.title}</h3>
                          <p className="mb-6 text-[#EAE8F3]/90 relative z-10">{t(project.descKey)}</p>
                          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-[#A77B9E] text-[#EAE8F3] text-sm rounded-full transition-transform duration-200 hover:scale-110"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex space-x-4 relative z-10">
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="border-[#EAE8F3] text-[#EAE8F3] hover:bg-[#EAE8F3] hover:text-[#2C2F33] transition-all duration-200 hover:scale-105"
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                {t("projects.code")}
                              </a>
                            </Button>
                            {project.live && project.live !== "#" && (
                              <Button
                                size="sm"
                                asChild
                                className="bg-[#EAE8F3] text-[#2C2F33] hover:bg-[#A77B9E] hover:text-[#EAE8F3] transition-all duration-200 hover:scale-105"
                              >
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  {t("projects.demo")}
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
