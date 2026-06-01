import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  Github,
  ExternalLink,
  FolderGit2,
  Clock,
  Calendar,
  Monitor,
  PawPrint,
  BrainCircuit,
  BarChart3,
} from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type ProjectStatus = "In Progress" | "Planned" | "Completed"

interface Project {
  title: string
  type: string
  timeline: string
  description: string
  status: ProjectStatus
  tech: string[]
  github: string
  demo: string
  previewLabel: string
  previewIcon: LucideIcon
}

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    type: "Web Portfolio",
    timeline: "2026 • Portfolio Project",
    description:
      "เว็บไซต์พอร์ตโฟลิโอส่วนตัวสำหรับแสดงผลงานและทักษะ เพื่อเตรียมตัวฝึกงานและสมัครงาน",
    status: "In Progress",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    previewLabel: "Portfolio Preview",
    previewIcon: Monitor,
  },
  {
    title: "Pet Shop Landing Page",
    type: "Landing Page",
    timeline: "2026 • Planned Project",
    description:
      "หน้าเว็บ Landing Page สำหรับร้านขายสัตว์เลี้ยง ออกแบบให้สวยงามและใช้งานง่าย",
    status: "Planned",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    previewLabel: "Pet Shop Preview",
    previewIcon: PawPrint,
  },
  {
    title: "Dog & Cat Image Classifier",
    type: "AI / Machine Learning",
    timeline: "2026 • Planned Project",
    description:
      "โมเดล Machine Learning สำหรับจำแนกรูปภาพสุนัขและแมว ใช้เทคนิค Deep Learning",
    status: "Planned",
    tech: ["Python", "Machine Learning", "TensorFlow"],
    github: "#",
    demo: "#",
    previewLabel: "AI Model Preview",
    previewIcon: BrainCircuit,
  },
  {
    title: "Pet Shop Sales Dashboard",
    type: "Data Dashboard",
    timeline: "2026 • Planned Project",
    description:
      "Dashboard วิเคราะห์ยอดขายร้านสัตว์เลี้ยง แสดงข้อมูลด้วย Data Visualization",
    status: "Planned",
    tech: ["Python", "Pandas", "Data Visualization"],
    github: "#",
    demo: "#",
    previewLabel: "Dashboard Preview",
    previewIcon: BarChart3,
  },
]

const statusConfig: Record<ProjectStatus, { bg: string; text: string; dot: string }> = {
  "In Progress": {
    bg: "bg-success/10 border-success/30",
    text: "text-success",
    dot: "bg-success animate-pulse",
  },
  Planned: {
    bg: "bg-warning/10 border-warning/30",
    text: "text-warning",
    dot: "bg-warning",
  },
  Completed: {
    bg: "bg-primary/10 border-primary/30",
    text: "text-primary",
    dot: "bg-primary",
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.25)] active:-translate-y-1 active:scale-[1.03]">
            <FolderGit2 className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 md:text-4xl">
              Projects
            </h2>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            Selected projects I am building to practice web development, AI, and data skills.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const status = statusConfig[project.status]
            const hasGithub = project.github !== "#"
            const hasDemo = project.demo !== "#"
            const PreviewIcon = project.previewIcon

            return (
              <Card
                key={project.title}
                className="project-card-shine card-glow group overflow-hidden rounded-2xl border border-blue-200/50 bg-white/95 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-blue-300/70 hover:shadow-[0_18px_45px_rgba(59,130,246,0.16)] active:-translate-y-1 active:scale-[1.005]"
              >
                <CardHeader className="relative z-10 space-y-4 pb-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Badge
                      variant="outline"
                      className={`w-fit gap-2 text-xs font-medium transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 ${status.bg} ${status.text}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      {project.status}
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="cursor-default border border-blue-200/60 bg-blue-50/70 px-3 py-1 font-code text-xs text-blue-600 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105"
                    >
                      {project.type}
                    </Badge>
                  </div>

                  <div className="relative overflow-hidden rounded-xl border border-blue-100/70 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 p-4">
                    <div className="flex items-center gap-3">
                      <div className="project-preview-icon-shine relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-blue-100 text-blue-600 shadow-[0_0_18px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(59,130,246,0.22)]">
                        <PreviewIcon className="relative z-20 h-6 w-6 transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
                      </div>

                      <div>
                        <p className="font-code text-xs text-slate-500">Preview</p>
                        <p className="text-sm font-semibold text-slate-800">
                          {project.previewLabel}
                        </p>
                      </div>
                    </div>

                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-foreground transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:text-primary group-hover:drop-shadow-[0_6px_14px_rgba(59,130,246,0.22)]">
                      {project.title}
                    </h3>

                    <p className="flex items-center gap-1.5 font-code text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {project.timeline}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

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

                  <div className="space-y-2 border-t border-border pt-4">
                    <div className="flex flex-wrap gap-4">
                      {hasGithub ? (
                        <Link
                          href={project.github}
                          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary hover:drop-shadow-[0_4px_10px_rgba(59,130,246,0.22)]"
                        >
                          <Github className="h-4 w-4" />
                          <span className="font-code">View Code</span>
                        </Link>
                      ) : (
                        <div className="flex cursor-not-allowed items-center gap-1.5 text-sm text-slate-400">
                          <Github className="h-4 w-4" />
                          <span className="font-code">View Code</span>
                          <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                            <Clock className="h-3 w-3" />
                            Coming Soon
                          </span>
                        </div>
                      )}

                      {hasDemo ? (
                        <Link
                          href={project.demo}
                          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:text-primary hover:drop-shadow-[0_4px_10px_rgba(59,130,246,0.22)]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="font-code">Live Demo</span>
                        </Link>
                      ) : (
                        <div className="flex cursor-not-allowed items-center gap-1.5 text-sm text-slate-400">
                          <ExternalLink className="h-4 w-4" />
                          <span className="font-code">Live Demo</span>
                          <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                            <Clock className="h-3 w-3" />
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {!hasGithub && !hasDemo && (
                      <p className="text-xs text-slate-400">
                        Code and demo will be available soon.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}