"use client"

import { Play, Pause, ArrowRight, Code, Palette, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"
import { TypingText } from "@/components/typing-text"
import { AnimatedSection } from "@/components/animated-section"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTyping, setShowTyping] = useState(false)
  const [email, setEmail] = useState("")
  const { t, language } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Reset animation when language changes
  useEffect(() => {
    setShowTyping(false)
    const timer = setTimeout(() => setShowTyping(true), 100)
    return () => clearTimeout(timer)
  }, [language])

  const handleContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden transition-colors">
      {/* Gradient Background inspired by Stripe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A77B9E]/20 via-[#EAE8F3] to-[#3A2A4E]/30"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#A77B9E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#3A2A4E]/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-black text-[#000000] leading-tight">
                {showTyping ? (
                  <>
                    <span className="block">
                      <TypingText text="ANGE GABRIEL" speed={60} />
                    </span>
                    <span className="block text-[#3A2A4E]">
                      <TypingText text="DÉVELOPPEUR" speed={60} />
                    </span>
                    <span className="block text-[#A77B9E]">
                      <TypingText text="WEB" speed={60} />
                    </span>
                  </>
                ) : (
                  <span className="opacity-0"></span>
                )}
              </h1>
            </AnimatedSection>


            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/80 backdrop-blur-sm border-[#A77B9E]/30 text-[#000000] placeholder:text-[#2C2F33]/60 focus:border-[#A77B9E] focus:ring-[#A77B9E]/20"
                />
                <Button
                  onClick={handleContact}
                  className="bg-[#3A2A4E] text-[#EAE8F3] hover:bg-[#A77B9E] transition-all duration-300 px-8 font-semibold group"
                >
                  Collaborer
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className="flex items-center space-x-4">
                <span className="text-[#2C2F33]/60 font-medium text-sm uppercase tracking-wider">
                  {t("hero.listening")}
                </span>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-[#A77B9E]/20">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 h-8 w-8 rounded-full bg-[#3A2A4E] text-[#EAE8F3] hover:bg-[#A77B9E] transition-all duration-200 hover:scale-110"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <span className="text-sm text-[#3A2A4E] font-medium">{t("hero.music")}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Visual Elements */}
          <div className="relative lg:block hidden">
            <AnimatedSection animation="slide-left" delay={600}>
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-[#A77B9E]/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#000000]">Portfolio Analytics</h3>
                    <div className="w-3 h-3 bg-[#A77B9E] rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[#2C2F33]/70 text-sm">Projets complétés</span>
                      <span className="font-bold text-[#3A2A4E]">6+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#2C2F33]/70 text-sm">Technologies maîtrisées</span>
                      <span className="font-bold text-[#A77B9E]">10+</span>
                    </div>
                    <div className="w-full bg-[#EAE8F3] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#A77B9E] to-[#3A2A4E] h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Code Card */}
                <div className="absolute -top-4 -right-4 bg-[#2C2F33] rounded-xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Code className="w-8 h-8 text-[#A77B9E] mb-2" />
                  <div className="text-[#EAE8F3] text-xs font-mono">
                    <div>const dev = {`{`}</div>
                    <div className="ml-2">name: "Ange",</div>
                    <div className="ml-2">skills: ["React", "Node.js"]</div>
                    <div>{`}`}</div>
                  </div>
                </div>
                {/* Skills Floating Cards */}
                <div className="absolute -bottom-6 -left-6 space-y-2">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg flex items-center space-x-2 transform hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 text-[#3A2A4E]" />
                  <span className="text-sm font-medium text-[#000000]">Performance</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 right-1/2 w-32 h-32 border-2 border-[#A77B9E]/20 rounded-full animate-spin-slow"></div>
                <div className="absolute -top-8 left-1/4 w-4 h-4 bg-[#A77B9E]/40 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 right-1/4 w-6 h-6 bg-[#3A2A4E]/30 rounded-full animate-pulse"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Trust Indicators */}
        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mt-20 text-center">
            <p className="text-[#2C2F33]/60 text-sm mb-8 uppercase tracking-wider font-medium">
              Technologies que j'utilise quotidiennement
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-[#3A2A4E]">React</div>
              <div className="text-2xl font-bold text-[#A77B9E]">Next.js</div>
              <div className="text-2xl font-bold text-[#3A2A4E]">Node.js</div>
              <div className="text-2xl font-bold text-[#A77B9E]">TypeScript</div>
              <div className="text-2xl font-bold text-[#3A2A4E]">Express Js</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
