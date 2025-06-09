"use client"

import { Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { TypingText } from "@/components/typing-text"
import { AnimatedSection } from "@/components/animated-section"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTyping, setShowTyping] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-[#EAE8F3] pt-20 relative overflow-hidden transition-colors">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#A77B9E]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#3A2A4E]/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#A77B9E]/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-6xl md:text-8xl font-black text-[#000000] leading-tight mb-8">
              {showTyping ? (
                <>
                  <TypingText text={t("hero.title.developer")} speed={40} />
              
                  <br />
                  <span className="text-[#A77B9E]">
                    <TypingText text={t("hero.title.web")} speed={40} />
                  </span>
                </>
              ) : (
                <span className="opacity-0"></span>
              )}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex items-center space-x-4 mb-12">
              <span className="text-[#EAE8F3] font-medium text-sm uppercase tracking-wider bg-[#3A2A4E] px-3 py-1 rounded-full animate-pulse">
                {t("hero.listening")}
              </span>
              <div className="flex items-center space-x-2 bg-[#EAE8F3]/50 rounded-full px-4 py-2 border border-[#A77B9E]/30 backdrop-blur-sm">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 h-8 w-8 rounded-full bg-[#EAE8F3] text-[#3A2A4E] hover:bg-[#A77B9E] hover:text-[#EAE8F3] transition-all duration-200 hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <span className="text-sm text-[#3A2A4E]">{t("hero.music")}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative elements with parallax effect */}
      <div className="absolute top-1/2 right-10 w-64 h-64 opacity-10 animate-spin-fast">
        <div className="w-full h-full border-2 border-[#A77B9E] rounded-full"></div>
      </div>
    </section>
  )
}
