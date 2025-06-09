"use client"

import { useLanguage } from "@/contexts/language-context"
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#2C2F33] py-12 border-t border-[#A77B9E]/20 relative">
      {/* Bouton retour en haut */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#A77B9E] hover:bg-[#3A2A4E] text-[#EAE8F3] p-0 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container mx-auto px-6">
        {/* Logo et tagline */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 bg-[#000000] rounded-full flex items-center justify-center mb-3">
            <span className="text-[#EAE8F3] font-bold text-lg">AG</span>
          </div>
          <h3 className="text-[#EAE8F3] font-bold text-xl">KOUEVIDJIN Ange Gabriel</h3>
          <p className="text-[#A77B9E] mt-2">Développeur Web</p>
        </div>

        {/* Navigation principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center md:text-left">
            <h4 className="text-[#A77B9E] font-semibold mb-4 uppercase text-sm tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-[#EAE8F3] hover:text-[#A77B9E] transition-all duration-300 relative inline-block group"
                >
                  {t("nav.home")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#EAE8F3] hover:text-[#A77B9E] transition-all duration-300 relative inline-block group"
                >
                  {t("nav.projects")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#EAE8F3] hover:text-[#A77B9E] transition-all duration-300 relative inline-block group"
                >
                  {t("nav.about")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[#EAE8F3] hover:text-[#A77B9E] transition-all duration-300 relative inline-block group"
                >
                  {t("nav.skills")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#EAE8F3] hover:text-[#A77B9E] transition-all duration-300 relative inline-block group"
                >
                  {t("nav.contact")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-[#A77B9E] font-semibold mb-4 uppercase text-sm tracking-wider">Compétences</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#skills"
                  className="text-[#EAE8F3] hover:text-[#A77B9E] transition-all duration-300 relative inline-block group"
                >
                  Frontend
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[#EAE8F3] hover:text-[#A77B9E] transition-all duration-300 relative inline-block group"
                >
                  Backend
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
             
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-[#A77B9E] font-semibold mb-4 uppercase text-sm tracking-wider">Contacts</h4>
            <div className="mb-4">
              <p className="text-[#EAE8F3] mb-2">
                <span className="text-[#A77B9E] mr-2">Email:</span>
                gabrielange748@gmail.com
              </p>
              <p className="text-[#EAE8F3]">
                <span className="text-[#A77B9E] mr-2">Tél:</span>
                <a href="tel:+24177123456" className="hover:text-[#A77B9E] transition-colors">
                  +241 77 36 44 91 / +241 62 48 96 99 
                </a>
              </p>
            </div>
            <div className="flex justify-center md:justify-end space-x-3">
              <a
                href="https://github.com/AngeGabriel-rgb"
                className="w-9 h-9 bg-[#3A2A4E] rounded-full flex items-center justify-center hover:bg-[#A77B9E] transition-all duration-300 hover:scale-110"
              >
                <Github className="w-4 h-4 text-[#EAE8F3]" />
              </a>
              <a
                href="https://x.com/Angelito452214"
                className="w-9 h-9 bg-[#3A2A4E] rounded-full flex items-center justify-center hover:bg-[#A77B9E] transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4 text-[#EAE8F3]" />
              </a>
              <a
                href="https://www.linkedin.com/in/ange-gabriel-431aa636a/"
                className="w-9 h-9 bg-[#3A2A4E] rounded-full flex items-center justify-center hover:bg-[#A77B9E] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-[#EAE8F3]" />
              </a>
              <a
                href="mailto:gabrielange748@gmail.com"
                className="w-9 h-9 bg-[#3A2A4E] rounded-full flex items-center justify-center hover:bg-[#A77B9E] transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-4 h-4 text-[#EAE8F3]" />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-[#A77B9E]/20 w-full my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#EAE8F3]/70 text-sm mb-4 md:mb-0">{t("footer.rights")}</p>
          <p className="text-[#EAE8F3]/70 text-sm">
            Design avec <span className="text-[#A77B9E]">♥</span> par KOUEVIDJIN Ange Gabriel
          </p>
        </div>
      </div>

      {/* Effet décoratif */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#000000] via-[#A77B9E] to-[#3A2A4E]"></div>
    </footer>
  )
}
