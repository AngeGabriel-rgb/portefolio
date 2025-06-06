"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Github, Star } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold">Portfolio</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium nav-link hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link href="#projects" className="text-sm font-medium nav-link hover:text-primary transition-colors">
            Projets
          </Link>
          <Link href="#contact" className="text-sm font-medium nav-link hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="btn-github-animation">
            <Github className="h-4 w-4 mr-2" />
            <Star className="h-4 w-4 mr-1" />
            GitHub
          </Button>
          <ThemeToggle />
          <Button size="sm" className="btn-github-animation gradient-bg text-white border-0">
            Me contacter
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-sm font-medium nav-link hover:text-primary" onClick={toggleMenu}>
              Accueil
            </Link>
            <Link href="#projects" className="text-sm font-medium nav-link hover:text-primary" onClick={toggleMenu}>
              Projets
            </Link>
            <Link href="#contact" className="text-sm font-medium nav-link hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex gap-4 pt-2">
              <Button variant="outline" size="sm" className="btn-github-animation">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" className="btn-github-animation gradient-bg text-white border-0">
                Contact
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
