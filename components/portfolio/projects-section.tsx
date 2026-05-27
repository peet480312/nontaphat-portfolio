import Link from "next/link"
import { Github, ExternalLink, FolderGit2 } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type ProjectStatus = "In Progress" | "Planned" | "Completed"

interface Project {
  title: string
  description: string
  status: ProjectStatus
  tech: string[]
  github: string
  demo: string
}

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวสำหรับแสดงผลงานและทักษะ เพื่อเตรียมตัวฝึกงานและสมัครงาน",
    status: "In Progress",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Pet Shop Landing Page",
    description: "หน้าเว็บ Landing Page สำหรับร้านขายสัตว์เลี้ยง ออกแบบให้สวยงามและใช้งานง่าย",
    status: "Planned",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dog & Cat Image Classifier",
    description: "โมเดล Machine Learning สำหรับจำแนกรูปภาพสุนัขและแมว ใช้เทคนิค Deep Learning",
    status: "Planned",
    tech: ["Python", "Machine Learning", "TensorFlow"],
    github: "#",
    demo: "#",
  },
  {
    title: "Pet Shop Sales Dashboard",
    description: "Dashboard วิเคราะห์ยอดขายร้านสัตว์เลี้ยง แสดงข้อมูลด้วย Data Visualization",
    status: "Planned",
    tech: ["Python", "Pandas", "Data Visualization"],
    github: "#",
    demo: "#",
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
        <div className="mb-2 flex items-center justify-center gap-2">
          <FolderGit2 className="h-5 w-5 text-primary" />
          <h2 className="gradient-text text-center text-3xl font-bold md:text-4xl">Projects</h2>
        </div>
        <p className="mb-12 text-center font-code text-sm text-muted-foreground">{"// ผลงานของผม"}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const status = statusConfig[project.status]
            return (
              <Card
                key={project.title}
                className="card-glow group overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="pb-2">
                  <Badge
                    variant="outline"
                    className={`w-fit gap-2 text-xs font-medium ${status.bg} ${status.text}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                    {project.status}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="border border-border bg-background/50 font-code text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 border-t border-border pt-4">
                    <Link
                      href={project.github}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                      <span className="font-code">View Code</span>
                    </Link>
                    <Link
                      href={project.demo}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-code">Live Demo</span>
                    </Link>
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
