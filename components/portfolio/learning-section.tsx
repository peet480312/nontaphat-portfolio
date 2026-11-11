import type { LucideIcon } from "lucide-react"

import {
  BookOpen,
  Code2,
  Braces,
  Database,
  Globe,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

// ========================================
// Learning Item Types
// ========================================

interface LearningItem {
  title: string
  description: string
  icon: LucideIcon
}

// ========================================
// Currently Learning Data
// ========================================

const learningItems: LearningItem[] = [
  {
    title: "React & Next.js",

    description:
      "Improving component development, state management, and React fundamentals to build more interactive and maintainable web applications.",

    icon: Code2,
  },

  {
    title: "JavaScript & TypeScript",

    description:
      "Strengthening programming fundamentals, asynchronous operations, type safety, and code organization for frontend development.",

    icon: Braces,
  },

  {
    title: "Database & SQL",

    description:
      "Learning database queries, data relationships, and database integration to better understand how web applications manage information.",

    icon: Database,
  },

  {
    title: "API Integration",

    description:
      "Learning how to connect frontend applications with backend services and APIs, handle responses, and display dynamic data.",

    icon: Globe,
  },
]

// ========================================
// Learning Section Component
// ========================================

export function LearningSection() {
  return (
    <section
      id="learning"
      className="scroll-mt-24 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* ========================================
            Section Header
        ======================================== */}

        <div className="mb-12 text-center">

          <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.22)] active:-translate-y-0.5 active:scale-[1.02]">

            {/* Section Icon */}

            <BookOpen
              className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]"
            />

            {/* Section Title */}

            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] md:text-4xl">
              Currently Learning
            </h2>

          </div>

          {/* Section Description */}

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            Technologies and concepts I am currently improving
            to strengthen my frontend and web application
            development skills.
          </p>

        </div>

        {/* ========================================
            Learning Cards Grid
        ======================================== */}

        <div className="grid gap-6 md:grid-cols-2">

          {learningItems.map((item, index) => {

            const LearningIcon = item.icon

            return (
              <Card
                key={item.title}
                className="gradient-border group h-full overflow-hidden rounded-2xl border border-blue-200/60 bg-white/90 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_12px_30px_rgba(59,130,246,0.12)] active:-translate-y-0.5 active:scale-[1.005]"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >

                <CardContent className="flex h-full items-start gap-4 p-6">

                  {/* ========================================
                      Learning Icon
                  ======================================== */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50/70 text-blue-600 shadow-[0_8px_18px_rgba(59,130,246,0.10)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-blue-300 group-hover:bg-blue-100 group-hover:shadow-[0_10px_24px_rgba(59,130,246,0.18)]">

                    <LearningIcon
                      className="h-6 w-6 transition-all duration-300 ease-out group-hover:scale-110"
                    />

                  </div>

                  {/* ========================================
                      Learning Information
                  ======================================== */}

                  <div className="min-w-0 flex-1">

                    {/* Learning Title and Status */}

                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">

                      <h3 className="text-lg font-semibold text-slate-900 transition-all duration-300 ease-out group-hover:text-primary">
                        {item.title}
                      </h3>

                      {/* Learning Status */}

                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 font-code text-xs text-blue-600 transition-all duration-300 ease-out group-hover:border-blue-300 group-hover:bg-blue-100">

                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />

                        In Progress

                      </span>

                    </div>

                    {/* Learning Description */}

                    <p className="text-sm leading-relaxed text-slate-500 transition-colors duration-300 ease-out group-hover:text-slate-600">
                      {item.description}
                    </p>

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