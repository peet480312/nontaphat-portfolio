import { Check, Circle, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface LearningItem {
  text: string
  completed: boolean
}

const learningItems: LearningItem[] = [
  { text: "HTML & CSS พื้นฐาน", completed: true },
  { text: "JavaScript เบื้องต้น", completed: true },
  { text: "Git & GitHub", completed: true },
  { text: "Responsive Web Design", completed: true },
  { text: "Python สำหรับ Data Science", completed: false },
  { text: "Machine Learning พื้นฐาน", completed: false },
  { text: "React.js / Next.js", completed: false },
  { text: "Database (SQL)", completed: false },
]

export function LearningSection() {
  const completedCount = learningItems.filter((item) => item.completed).length
  const totalCount = learningItems.length
  const progressPercent = Math.round((completedCount / totalCount) * 100)

  return (
    <section id="learning" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.22)] active:-translate-y-0.5 active:scale-[1.02]">
            <BookOpen className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />

            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] md:text-4xl">
              Learning Journey
            </h2>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            Topics I am currently learning to improve my web development, AI,
            and data skills.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>

            <span className="font-code text-primary">
              {completedCount}/{totalCount} ({progressPercent}%)
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-[0_0_14px_rgba(59,130,246,0.28)] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl space-y-3">
          {learningItems.map((item, index) => (
            <Card
              key={item.text}
              className={`gradient-border group overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_30px_rgba(59,130,246,0.12)] active:-translate-y-0.5 active:scale-[1.005] ${
                item.completed
                  ? "border-success/30 bg-success/5"
                  : "border-blue-200/60 bg-white/90"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="flex items-center gap-4 p-3.5">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 ${
                    item.completed
                      ? "bg-success text-success-foreground shadow-[0_8px_18px_rgba(34,197,94,0.22)]"
                      : "border border-blue-200 bg-blue-50/70 text-slate-500 group-hover:border-blue-300 group-hover:bg-blue-100 group-hover:text-blue-600"
                  }`}
                >
                  {item.completed ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Circle className="h-3.5 w-3.5" />
                  )}
                </div>

                <span
                  className={`flex-1 text-sm font-medium transition-all duration-300 ease-out group-hover:translate-x-1 ${
                    item.completed ? "text-foreground" : "text-slate-500"
                  }`}
                >
                  {item.text}
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 font-code text-xs transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 ${
                    item.completed
                      ? "bg-success/10 text-success"
                      : "bg-blue-50 text-blue-500"
                  }`}
                >
                  {item.completed ? "done" : "in progress"}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}