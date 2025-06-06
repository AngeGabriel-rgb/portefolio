import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhotoReveal } from "@/components/photo-reveal"
import { ArrowRight, Code, Palette, Github, ExternalLink, Zap, Rocket, ArrowDown } from "lucide-react"
import { ProjectsSection } from "@/components/projects-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Photo Reveal Component */}
      <PhotoReveal />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 gradient-bg rounded-full blur-3xl opacity-20 floating" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-destructive/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span></span>
              <ArrowRight className="h-4 w-4" />
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                KOUEVIDJIN ANGE GABRIEL
                <br />
                <span className="gradient-text">Développeur web </span>
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                Développeur back-end passionné, je crée des expériences numériques exceptionnelles. De l&apos;idée au
                déploiement, tout en une seule plateforme.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-github-animation gradient-bg text-white border-0 px-8">
                Commencer un projet
              </Button>
              <Button variant="outline" size="lg" className="btn-github-animation">
                Demander une démo
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-sm text-muted-foreground">Faites défiler pour me découvrir</span>
              <ArrowDown className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Spacer Section pour l'animation */}
      <section className="h-screen relative z-20 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Qui suis-je ?</h2>
        <p className="text-lg text-white mb-6">
  Passionné par le développement web depuis plus de 2 ans, je transforme vos idées en réalités numériques. Mon expertise couvre l'ensemble du développement web, incluant la conception de l'interface utilisateur (front-end) et la gestion des serveurs ainsi que des bases de données (back-end).
</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["React", "Next.js", "Node.js", "ExpressJs" ].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche complète du développement web, de la conception à la mise en production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Développement</h3>
              <p className="text-muted-foreground">
              J'utilise Node.js, Next.js, Express, TypeScript, ainsi que des bases de données SQL et NoSQL pour créer des applications web modernes et performantes.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground">
                Interfaces utilisateur élégantes et intuitives, optimisées pour l&apos;expérience.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Déploiement</h3>
              <p className="text-muted-foreground">
                Mise en production rapide et sécurisée sur les meilleures plateformes, telles que Vercel et Render.
              </p>
            </div>
          </div>
        </div>
      </section>

 {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block glass rounded-full px-4 py-2 text-sm mb-4">
                <span className="text-primary">Contact</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Travaillons Ensemble</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      className="flex h-12 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <input
                    id="subject"
                    className="flex h-12 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full btn-github-animation gradient-bg text-white border-0">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-lg font-bold">Portfolio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Votre Nom. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
