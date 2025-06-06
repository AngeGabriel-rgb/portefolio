"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function PhotoReveal() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // L'animation commence après 100px de scroll et se termine à 800px
      const startScroll = 100
      const endScroll = 800

      if (currentScrollY >= startScroll && currentScrollY <= endScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calcul de la progression de l'animation (0 à 1)
  const progress = Math.min(Math.max((scrollY - 100) / 700, 0), 1)

  // Calcul des transformations
  const scale = 0.3 + progress * 0.7 // De 0.3 à 1
  const opacity = progress
  const blur = (1 - progress) * 20 // De 20px à 0px
  const translateY = (1 - progress) * 100 // De 100px à 0px

  return (
    <>
      {/* Photo en arrière-plan fixe */}
      <div
        className="fixed inset-0 z-0 transition-all duration-800 ease-out"
        style={{
          opacity: opacity * 0.3,
          transform: `scale(${1 + progress * 0.1})`,
        }}
      >
        <Image
          src="/ange1.jpg"
          alt="Photo de profil en arrière-plan"
          fill
          className="object-cover"
          style={{
            filter: `blur(${blur}px) brightness(0.4)`,
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Photo principale qui apparaît */}
      <div
        className={`fixed inset-0 z-10 flex items-center justify-center pointer-events-none transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div
          className="relative"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          {/* Cercle de lumière derrière la photo */}
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(163, 68, 93, ${opacity * 0.6}) 0%, rgba(139, 45, 86, ${opacity * 0.4}) 50%, transparent 70%)`,
              transform: "scale(1.5)",
            }}
          />

          {/* Photo principale */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/ange.jpg"
              alt="Photo de profil"
              fill
              className="object-cover rounded-full border-4 border-white/20 shadow-2xl"
              style={{
                filter: `blur(${(1 - progress) * 5}px)`,
              }}
            />

            {/* Effet de particules autour de la photo */}
            <div className="absolute inset-0 rounded-full">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{
                    top: `${20 + Math.sin((i * Math.PI) / 4) * 40}%`,
                    left: `${50 + Math.cos((i * Math.PI) / 4) * 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    opacity: opacity,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Texte qui apparaît avec la photo */}
          <div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            style={{ opacity: progress }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">KOUEVIDJIN Ange Gabriel</h3>
            <p className="text-lg text-white/80">Développeur web</p>
          </div>
        </div>
      </div>
    </>
  )
}
