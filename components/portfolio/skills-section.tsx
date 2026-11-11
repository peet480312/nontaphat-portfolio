import {
  Palette,
  Brain,
  Wrench,
  Database,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// ========================================
// Skill Categories
// ========================================

const skillCategories = [
  // ========================================
  // Frontend Development
  // ========================================
  {
    icon: Palette,
    title: "Frontend Development",
    color: "from-cyan-500/20",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  // ========================================
  // Backend & Database
  // ========================================
  {
    icon: Database,
    title: "Backend & Database",
    color: "from-amber-500/20",
    skills: [
      "Supabase",
      "Supabase Authentication",
      "Database Integration",
      "SQL",
      "MySQL",
    ],
  },

  // ========================================
  // Development Tools
  // ========================================
  {
    icon: Wrench,
    title: "Development Tools",
    color: "from-emerald-500/20",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Vercel",
      "Canva",
    ],
  },

  // ========================================
  // Additional Knowledge
  // ========================================
  {
    icon: Brain,
    title: "Additional Knowledge",
    color: "from-primary/20",
    skills: [
      "Python",
      "Machine Learning",
      "Neural Networks",
      "Deep Learning",
      "Pandas",
      "NumPy",
      "Data Visualization",
    ],
  },
]

// ========================================
// Skills Section Component
// ========================================

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* ========================================
            Skills Title
        ======================================== */}

        <div className="mb-12 text-center">

          <div className="group inline-flex cursor-pointer items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.22)] active:-translate-y-0.5 active:scale-[1.02]">

            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] md:text-4xl">
              Skills
            </h2>

          </div>

          {/* Skills Description */}

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            Technologies and tools I have used in web development
            projects, along with additional technical knowledge
            I am continuing to develop.
          </p>

        </div>

        {/* ========================================
            Skill Cards Grid
        ======================================== */}

        <div className="grid gap-6 md:grid-cols-2">

          {skillCategories.map((category) => (

            <Card
              key={category.title}
              className="skill-card-shine card-glow group overflow-hidden rounded-2xl border border-blue-200/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_14px_36px_rgba(59,130,246,0.14)] active:-translate-y-0.5 active:scale-[1.005]"
            >

              <CardContent
                className={`relative bg-gradient-to-br ${category.color} to-transparent p-6`}
              >

                {/* ========================================
                    Category Header
                ======================================== */}

                <div className="mb-4 flex items-center gap-3">

                  {/* Category Icon */}

                  <div className="skill-icon-shine relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary/10 transition-all duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:-rotate-3 group-hover:scale-[1.03] group-hover:bg-blue-100 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.18)]">

                    <category.icon className="relative z-20 h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.28)]" />

                  </div>

                  {/* Category Information */}

                  <div>

                    <h3 className="text-lg font-semibold text-foreground transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] group-hover:text-slate-950 group-hover:drop-shadow-[0_6px_14px_rgba(59,130,246,0.2)]">
                      {category.title}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {category.skills.length} skills
                    </p>

                  </div>

                </div>

                {/* ========================================
                    Skill Badges
                ======================================== */}

                <div className="flex flex-wrap gap-2">

                  {category.skills.map((skill) => (

                    <Badge
                      key={skill}
                      variant="secondary"
                      className="cursor-default border border-border bg-background/50 px-3 py-1.5 font-code text-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-[0_8px_18px_rgba(59,130,246,0.16)]"
                    >

                      <span>
                        {skill}
                      </span>

                    </Badge>

                  ))}

                </div>

                {/* ========================================
                    Decorative Glow
                ======================================== */}

                <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />

              </CardContent>

            </Card>

          ))}

        </div>

      </div>
    </section>
  )
}