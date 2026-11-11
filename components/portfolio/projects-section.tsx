import Link from "next/link"
import type { LucideIcon } from "lucide-react"

import {
  Github,
  ExternalLink,
  FolderGit2,
  Monitor,
  PawPrint,
  Bot,
  Utensils,
  Cpu,
  Building2,
  Database,
  Sprout,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

// ========================================
// Project Types
// ========================================

type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Planned"

interface Project {
  title: string
  type: string
  timeline: string
  description: string
  status: ProjectStatus
  tech: string[]
  github?: string
  demo?: string
  previewLabel: string
  previewIcon: LucideIcon

  // Controls whether project appears on website
  showInPortfolio: boolean
}

// ========================================
// Projects Data
// ========================================

const projects: Project[] = [

  // ========================================
  // 1. SkillSync AI - Visible
  // ========================================

  {
    title: "SkillSync AI",
    type: "Web Application",
    timeline: "2026 • Completed Project",

    description:
      "Career skill matching web application that compares user skills with job requirements using weighted scoring. Features include skill gap analysis, learning recommendations, user authentication, and analysis history stored with Supabase.",

    status: "Completed",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
    ],

    github:
      "https://github.com/peet480312/skillsync-ai",

    demo:
      "https://skillsync-ai-henna.vercel.app",

    previewLabel: "SkillSync AI Preview",
    previewIcon: Bot,

    showInPortfolio: true,
  },

  // ========================================
  // 2. Personal Portfolio - Visible
  // ========================================

  {
    title: "Personal Portfolio Website",
    type: "Frontend Development",
    timeline: "2026 • In Progress",

    description:
      "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features responsive layouts, interactive UI components, smooth navigation, and project showcases designed for internship applications.",

    status: "In Progress",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],

    github:
      "https://github.com/peet480312/nontaphat-portfolio",

    previewLabel: "Portfolio Preview",
    previewIcon: Monitor,

    showInPortfolio: true,
  },

  // ========================================
  // 3. WU Canteen Website - Hidden
  // ========================================

  {
    title: "WU Canteen Website",
    type: "Frontend Development",
    timeline: "2026 • Completed Web Project",

    description:
      "Responsive university canteen website featuring food categories, menu sections, drink lists, navigation components, and a vendor contact form. Developed to practice frontend development and responsive web design.",

    status: "Completed",

    tech: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],

    previewLabel: "WU Canteen Preview",
    previewIcon: Utensils,

    // Hidden until the project is ready
    showInPortfolio: false,
  },

  // ========================================
  // Hidden Projects
  // Can be enabled later
  // ========================================

  {
    title: "Pet Shop Landing Page",
    type: "Frontend Web Project",
    timeline: "2026 • In Progress",

    description:
      "Pet shop landing page focused on product presentation, responsive layouts, clear navigation, call-to-action buttons, and user-friendly interface design.",

    status: "In Progress",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI Design",
    ],

    previewLabel: "Pet Shop Preview",
    previewIcon: PawPrint,

    showInPortfolio: false,
  },

  {
    title: "Dormitory Management System",
    type: "Object-Oriented Programming",
    timeline: "2026 • Completed Team Project",

    description:
      "Dormitory management system designed as a university course project, applying object-oriented programming concepts, system design, and teamwork.",

    status: "Completed",

    tech: [
      "OOP",
      "System Design",
      "Team Project",
    ],

    previewLabel: "Dormitory System",
    previewIcon: Building2,

    showInPortfolio: false,
  },

  {
    title: "Food Safety Tracking System",
    type: "Database System Design",
    timeline: "2026 • Completed Team Project",

    description:
      "Food safety tracking system designed as a university database project, focusing on requirement analysis, database design, and project coordination.",

    status: "Completed",

    tech: [
      "Requirement Analysis",
      "Database Design",
      "System Design",
    ],

    previewLabel: "Food Safety System",
    previewIcon: Database,

    showInPortfolio: false,
  },

  {
    title: "Smart Plant Watering System Using ESP32",
    type: "IoT / Embedded System",
    timeline: "2026 • Completed Team Project",

    description:
      "Smart plant watering system using ESP32 sensors and embedded system concepts to monitor plant conditions and automate watering.",

    status: "Completed",

    tech: [
      "ESP32",
      "IoT",
      "Embedded Systems",
    ],

    previewLabel: "Smart Plant System",
    previewIcon: Sprout,

    showInPortfolio: false,
  },

  {
    title: "ARM Architecture Report",
    type: "Computer Architecture",
    timeline: "2026 • Completed Course Report",

    description:
      "Technical report about ARM Architecture, focusing on processor architecture and fundamental computer hardware concepts.",

    status: "Completed",

    tech: [
      "ARM Architecture",
      "Computer Architecture",
      "Technical Report",
    ],

    previewLabel: "ARM Architecture Report",
    previewIcon: Cpu,

    showInPortfolio: false,
  },
]

// ========================================
// Project Status Styles
// ========================================

const statusConfig: Record<
  ProjectStatus,
  {
    bg: string
    text: string
    dot: string
  }
> = {
  Completed: {
    bg: "bg-emerald-500/10 border-emerald-400/30",
    text: "text-emerald-600",
    dot: "bg-emerald-500",
  },

  "In Progress": {
    bg: "bg-blue-500/10 border-blue-400/30",
    text: "text-blue-600",
    dot: "bg-blue-500 animate-pulse",
  },

  Planned: {
    bg: "bg-amber-500/10 border-amber-400/30",
    text: "text-amber-600",
    dot: "bg-amber-500",
  },
}

// ========================================
// Filter Visible Projects
// ========================================

const visibleProjects = projects.filter(
  (project) => project.showInPortfolio
)

// ========================================
// Project Card
// ========================================

function ProjectCard({
  project,
}: {
  project: Project
}) {
  const status = statusConfig[project.status]

  const hasGithub = Boolean(
    project.github && project.github !== "#"
  )

  const hasDemo = Boolean(
    project.demo && project.demo !== "#"
  )

  const PreviewIcon = project.previewIcon

  return (
    <Card
      className="project-card-shine card-glow group overflow-hidden rounded-2xl border border-blue-200/50 bg-white/95 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-blue-300/70 hover:shadow-[0_18px_45px_rgba(59,130,246,0.16)] active:-translate-y-1 active:scale-[1.005]"
    >
      <CardHeader className="relative z-10 space-y-4 pb-2">

        {/* Status and Project Type */}

        <div className="flex flex-wrap items-center justify-between gap-3">

          <Badge
            variant="outline"
            className={`w-fit gap-2 text-xs font-medium transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 ${status.bg} ${status.text}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
            />

            {project.status}
          </Badge>

          <Badge
            variant="secondary"
            className="cursor-default border border-blue-200/60 bg-blue-50/70 px-3 py-1 font-code text-xs text-blue-600 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105"
          >
            {project.type}
          </Badge>

        </div>

        {/* Project Preview */}

        <div className="relative overflow-hidden rounded-xl border border-blue-100/70 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 p-4">

          <div className="flex items-center gap-3">

            <div className="project-preview-icon-shine relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-blue-100 text-blue-600 shadow-[0_0_18px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(59,130,246,0.22)]">

              <PreviewIcon className="relative z-20 h-6 w-6 transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />

            </div>

            <div className="min-w-0">

              <p className="font-code text-xs text-slate-500">
                Project Overview
              </p>

              <p className="text-sm font-semibold text-slate-800">
                {project.previewLabel}
              </p>

            </div>

          </div>

          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

        </div>

      </CardHeader>

      <CardContent className="relative z-10 space-y-4">

        {/* Project Title */}

        <div className="space-y-1">

          <h3 className="text-xl font-semibold text-foreground transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:text-primary group-hover:drop-shadow-[0_6px_14px_rgba(59,130,246,0.22)]">
            {project.title}
          </h3>

          <p className="font-code text-xs text-slate-400">
            {project.timeline}
          </p>

        </div>

        {/* Description */}

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2">

          {project.tech.map((tech) => (

            <Badge
              key={tech}
              variant="secondary"
              className="cursor-default border border-border bg-background/50 font-code text-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-[0_8px_18px_rgba(59,130,246,0.16)]"
            >
              {tech}
            </Badge>

          ))}

        </div>

        {/* ========================================
            Only Show Available Links
        ======================================== */}

        {(hasGithub || hasDemo) && (

          <div className="border-t border-border pt-4">

            <div className="flex flex-wrap gap-4">

              {/* GitHub */}

              {hasGithub && project.github && (

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary hover:drop-shadow-[0_4px_10px_rgba(59,130,246,0.22)]"
                >

                  <Github className="h-4 w-4" />

                  <span className="font-code">
                    View Code
                  </span>

                </Link>

              )}

              {/* Live Demo */}

              {hasDemo && project.demo && (

                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary hover:drop-shadow-[0_4px_10px_rgba(59,130,246,0.22)]"
                >

                  <ExternalLink className="h-4 w-4" />

                  <span className="font-code">
                    Live Demo
                  </span>

                </Link>

              )}

            </div>

          </div>

        )}

      </CardContent>

    </Card>
  )
}

// ========================================
// Projects Section
// ========================================

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-secondary py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Title */}

        <div className="mb-12 text-center">

          <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.25)] active:-translate-y-1 active:scale-[1.03]">

            <FolderGit2 className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />

            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 md:text-4xl">
              Projects
            </h2>

          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            Selected web development projects demonstrating
            my practical experience in building responsive
            websites and web applications.
          </p>

        </div>

        {/* Selected Projects */}

        <div className="grid gap-6 md:grid-cols-2">

          {visibleProjects.map((project) => (

            <ProjectCard
              key={project.title}
              project={project}
            />

          ))}

        </div>

      </div>
    </section>
  )
}