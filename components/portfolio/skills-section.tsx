import { Palette, Brain, Wrench, Database, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    icon: Palette,
    title: "Frontend",
    color: "from-cyan-500/20",
    skills: [
      { name: "HTML", level: null },
      { name: "CSS", level: null },
      { name: "JavaScript", level: null },
      { name: "Responsive Design", level: null },
    ],
  },
  {
    icon: Brain,
    title: "AI / Data",
    color: "from-primary/20",
    skills: [
      { name: "Python", level: null },
      { name: "Pandas", level: null },
      { name: "NumPy", level: null },
      { name: "Machine Learning", level: "Basic" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-emerald-500/20",
    skills: [
      { name: "Git", level: null },
      { name: "GitHub", level: null },
      { name: "VS Code", level: null },
      { name: "Canva", level: null },
      { name: "Figma", level: "Basic" },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-amber-500/20",
    skills: [
      { name: "MySQL", level: "Basic" },
      { name: "PostgreSQL", level: "Basic" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.22)] active:-translate-y-0.5 active:scale-[1.02]">
            <Cpu className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] md:text-4xl">
              Skills
            </h2>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            Technologies and tools I am learning and using for web development,
            AI, and data projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="skill-card-shine card-glow group overflow-hidden rounded-2xl border border-blue-200/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_14px_36px_rgba(59,130,246,0.14)] active:-translate-y-0.5 active:scale-[1.005]"
            >
              <CardContent
                className={`relative bg-gradient-to-br ${category.color} to-transparent p-6`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="skill-icon-shine relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-primary/10 transition-all duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:-rotate-3 group-hover:scale-[1.03] group-hover:bg-blue-100 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.18)]">
                    <category.icon className="relative z-20 h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.28)]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] group-hover:text-slate-950 group-hover:drop-shadow-[0_6px_14px_rgba(59,130,246,0.2)]">
                      {category.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="cursor-default gap-1.5 border border-border bg-background/50 px-3 py-1.5 font-code text-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-[0_8px_18px_rgba(59,130,246,0.16)]"
                    >
                      <span>{skill.name}</span>

                      {skill.level && (
                        <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-500">
                          {skill.level}
                        </span>
                      )}
                    </Badge>
                  ))}
                </div>

                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}