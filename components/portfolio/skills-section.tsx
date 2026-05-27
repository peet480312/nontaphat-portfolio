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
        <div className="mb-2 flex items-center justify-center gap-2">
          <Cpu className="h-5 w-5 text-primary" />
          <h2 className="gradient-text text-center text-3xl font-bold md:text-4xl">Skills</h2>
        </div>
        <p className="mb-12 text-center font-code text-sm text-muted-foreground">{"// ทักษะของผม"}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="card-glow group overflow-hidden transition-all duration-300"
            >
              <CardContent className={`relative p-6 bg-gradient-to-br ${category.color} to-transparent`}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
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
