"use client"

import { Globe, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EAE8F3]/90 backdrop-blur-sm border-b border-[#A77B9E]/20 transition-colors">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.location.reload()}
          className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AG</span>
          </div>
          <span className="font-bold text-black"> Ange Gabriel </span>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-[#3A2A4E] hover:text-[#A77B9E] transition-all duration-300 relative group">
            {t("nav.home")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="text-[#3A2A4E] hover:text-[#A77B9E] transition-all duration-300 relative group"
          >
            {t("nav.projects")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-[#3A2A4E] hover:text-[#A77B9E] transition-all duration-300 relative group">
            {t("nav.about")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A77B9E] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-[#3A2A4E] hover:text-[#A77B9E] hover:bg-[#A77B9E]/10 transition-all duration-300"
          >
            <Globe className="w-4 h-4 mr-1" />
            {language.toUpperCase()}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-[#3A2A4E] hover:text-[#A77B9E] hover:bg-[#A77B9E]/10 transition-all duration-300"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
