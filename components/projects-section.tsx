"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { projects as allProjects } from "@/data/projects"
import type { Project } from "@/types/project"

export function ProjectsSection() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects)

  const handleFilterChange = (filtered: Project[]) => {
    setFilteredProjects(filtered)
  }

  return (
    <section id="projects" className="py-24 bg-muted/30 relative z-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block glass rounded-full px-4 py-2 text-sm mb-4">
            <span className="text-primary">Portfolio</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Projets Récents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes travaux récents qui démontrent mes compétences et mon expertise.
          </p>
        </div>

        {/* Filters */}
        <ProjectFilter projects={allProjects} onFilterChange={handleFilterChange} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
            <p className="text-muted-foreground">Essayez de modifier vos filtres pour voir plus de projets.</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{allProjects.length}</div>
            <div className="text-sm text-muted-foreground">Projets totaux</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-500">
              {allProjects.filter((p) => p.status === "completed").length}
            </div>
            <div className="text-sm text-muted-foreground">Terminés</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {allProjects.filter((p) => p.status === "in-progress").length}
            </div>
            <div className="text-sm text-muted-foreground">En cours</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{allProjects.filter((p) => p.featured).length}</div>
            <div className="text-sm text-muted-foreground">Featured</div>
          </div>
        </div>
      </div>
    </section>
  )
}
