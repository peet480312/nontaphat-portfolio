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
        <div className="mb-2 flex items-center justify-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="gradient-text text-center text-3xl font-bold md:text-4xl">
            Learning Journey
          </h2>
        </div>
        <p className="mb-8 text-center font-code text-sm text-muted-foreground">
          {"// สิ่งที่กำลังเรียนรู้"}
        </p>

        {/* Progress bar */}
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-code text-primary">
              {completedCount}/{totalCount} ({progressPercent}%)
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl space-y-3">
          {learningItems.map((item, index) => (
            <Card
              key={item.text}
              className={`gradient-border transition-all duration-300 ${
                item.completed ? "border-success/30 bg-success/5" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                    item.completed
                      ? "bg-success text-success-foreground"
                      : "border border-border bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {item.completed ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Circle className="h-3 w-3" />
                  )}
                </div>
                <span
                  className={`flex-1 text-sm ${
                    item.completed ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.text}
                </span>
                {item.completed && (
                  <span className="font-code text-xs text-success">done</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
