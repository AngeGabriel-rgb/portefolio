"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types/project"

interface ProjectFilterProps {
  projects: Project[]
  onFilterChange: (filteredProjects: Project[]) => void
}

const categories = [
  { value: "all", label: "Tous", icon: "🌟" },
  { value: "web", label: "Web", icon: "🌐" },
  { value: "api", label: "API", icon: "🔌" },
]

const statuses = [
  { value: "all", label: "Tous" },
  { value: "completed", label: "Terminés" },
  { value: "in-progress", label: "En cours" },
  { value: "archived", label: "Archivés" },
]

export function ProjectFilter({ projects, onFilterChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeStatus, setActiveStatus] = useState("all")

  const filterProjects = (category: string, status: string) => {
    let filtered = projects

    if (category !== "all") {
      filtered = filtered.filter((project) => project.category === category)
    }

    if (status !== "all") {
      filtered = filtered.filter((project) => project.status === status)
    }

    onFilterChange(filtered)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    filterProjects(category, activeStatus)
  }

  const handleStatusChange = (status: string) => {
    setActiveStatus(status)
    filterProjects(activeCategory, status)
  }

  return (
    <div className="space-y-4 mb-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={activeCategory === category.value ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category.value)}
            className="btn-github-animation"
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </Button>
        ))}
      </div>

      {/* Status Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {statuses.map((status) => (
          <Button
            key={status.value}
            variant={activeStatus === status.value ? "secondary" : "ghost"}
            size="sm"
            onClick={() => handleStatusChange(status.value)}
            className="btn-github-animation text-xs"
          >
            {status.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
