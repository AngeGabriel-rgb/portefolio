"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClasses = {
    "fade-up": "translate-y-4 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "translate-x-4 opacity-0",
    "slide-right": "-translate-x-4 opacity-0",
  }

  const visibleClasses = {
    "fade-up": "translate-y-0 opacity-100",
    "fade-in": "opacity-100",
    "slide-left": "translate-x-0 opacity-100",
    "slide-right": "translate-x-0 opacity-100",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? visibleClasses[animation] : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
