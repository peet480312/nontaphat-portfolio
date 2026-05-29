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
  <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.25)] active:-translate-y-1 active:scale-[1.03]">
  <Cpu className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
  <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 md:text-4xl">
    Skills
  </h2>
</div>
</div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
className="card-glow group overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.025] hover:border-blue-300/70 hover:shadow-[0_18px_45px_rgba(59,130,246,0.18)] active:-translate-y-1 active:scale-[1.01]"            >
              <CardContent className={`relative p-6 bg-gradient-to-br ${category.color} to-transparent`}>
                <div className="mb-4 flex items-center gap-3">
     <div className="skill-icon-shine flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-primary/10 transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-blue-100 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.18)]">
  <category.icon className="relative z-20 h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.28)]" />
</div>
<h3 className="text-lg font-semibold text-foreground transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:text-slate-950 group-hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.28)]">
  {category.title}
</h3>                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="border border-border bg-background/50 px-3 py-1.5 font-code text-sm transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                      {skill.name}
                      {skill.level && (
                        <span className="ml-1.5 text-xs text-muted-foreground">({skill.level})</span>
                      )}
                    </Badge>
                  ))}
                </div>
                
                {/* Decorative element */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
