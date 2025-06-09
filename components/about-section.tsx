"use client"

import { Github, Twitter, Linkedin, Mail, Music } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { AnimatedSection } from "@/components/animated-section"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-[#2C2F33] text-[#EAE8F3] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#A77B9E]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#3A2A4E]/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-5xl font-black text-center mb-4 text-[#EAE8F3]">{t("about.title")}</h2>
            <div className="w-24 h-1 bg-[#A77B9E] mx-auto mb-12 animate-pulse"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right" delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-[#A77B9E] mb-6">{t("about.who")}</h3>
                <p className="text-[#EAE8F3] mb-6 leading-relaxed opacity-90">{t("about.desc1")}</p>
                <p className="text-[#EAE8F3] mb-6 leading-relaxed opacity-90">{t("about.desc2")}</p>
                <p className="text-[#EAE8F3] mb-8 leading-relaxed opacity-90">{t("about.desc3")}</p>

                <div className="flex space-x-4">
                  {[Github, Twitter, Linkedin, Mail, Music].map((Icon, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={300 + index * 50}>
                      <a
                        href=""
                        className="w-10 h-10 bg-[#A77B9E] rounded-full flex items-center justify-center hover:bg-[#3A2A4E] transition-all duration-200 hover:scale-110 hover:rotate-12"
                      >
                        <Icon className="w-5 h-5 text-[#EAE8F3]" />
                      </a>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={300}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative overflow-hidden rounded-full group">
                  <img
                    src="ange.jpg"
                    alt="Ange Gabriel - Développeur Web"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A77B9E]/20 to-[#3A2A4E]/20 rounded-full transition-opacity duration-300 group-hover:opacity-50"></div>
                </div>
                {/* Floating ring */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#A77B9E]/30 rounded-full animate-spin-fast"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
