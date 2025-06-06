export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  category: "web" | "mobile" | "desktop" | "api"
  featured?: boolean
  status: "completed" | "in-progress" | "archived"
}
