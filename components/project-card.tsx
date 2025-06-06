import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Clock, CheckCircle, Archive } from "lucide-react"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

const statusIcons = {
  completed: CheckCircle,
  "in-progress": Clock,
  archived: Archive,
}

const statusColors = {
  completed: "text-green-500",
  "in-progress": "text-yellow-500",
  archived: "text-gray-500",
}

const categoryColors = {
  web: "bg-blue-500/10 text-blue-500",
  mobile: "bg-green-500/10 text-green-500",
  desktop: "bg-purple-500/10 text-purple-500",
  api: "bg-orange-500/10 text-orange-500",
}

export function ProjectCard({ project }: ProjectCardProps) {
  const StatusIcon = statusIcons[project.status]

  return (
    <div className="group glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 relative">
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-primary text-primary-foreground">⭐ Featured</Badge>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm ${statusColors[project.status]}`}
        >
          <StatusIcon className="h-3 w-3" />
          <span className="text-xs capitalize">{project.status.replace("-", " ")}</span>
        </div>
      </div>

      {/* Image Container */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge className={categoryColors[project.category]}>{project.category.toUpperCase()}</Badge>
        </div>

        {/* Technologies */}
        <div className="absolute bottom-4 right-4">
          <div className="flex gap-1 flex-wrap justify-end max-w-[200px]">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

        {/* All Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="ghost" size="sm" className="btn-github-animation flex-1" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="ghost" size="sm" className="btn-github-animation flex-1" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
