import { GraduationCap, Building2, MapPin, Bot, Code, BarChart3, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const infoItems = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Computer Engineering and AI",
    description: "Focused on software development, AI, and practical engineering skills.",
  },
  {
    icon: Building2,
    label: "University",
    value: "Walailak University",
    description: "Currently building academic knowledge and real-world project experience.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Thailand",
    description: "Open to internship and entry-level opportunities in tech-related fields.",
  },
]

const careerInterests = [
  {
    icon: Bot,
    title: "AI Engineer",
    description:
      "Interested in building machine learning and AI-powered systems to solve real-world problems.",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Code,
    title: "Software Developer",
    description:
      "Interested in developing web applications and practical software solutions with real-world value.",
    gradient: "from-primary/15 to-transparent",
  },
  {
    icon: BarChart3,
    title: "Data Analyst",
    description:
      "Interested in analyzing data and creating dashboards to support better decision-making.",
    gradient: "from-primary/10 to-transparent",
  },
]

export function AboutSection() {
  return (
  <section
  id="about"
  className="relative overflow-hidden py-20"
  style={{
    background: `
      radial-gradient(circle at top right, rgba(59, 130, 246, 0.22), transparent 34%),
      radial-gradient(circle at bottom left, rgba(37, 99, 235, 0.12), transparent 42%),
      linear-gradient(180deg, #F1F7FF 0%, #DFECFF 100%)
    `,
  }}
>
      <div className="mx-auto max-w-6xl px-6">
        <div className="about-title-pop mb-2 flex items-center justify-center gap-2">
  <Sparkles className="about-title-icon h-5 w-5 text-primary" />
  <h2 className="gradient-text text-center text-3xl font-bold md:text-4xl">
    About Me
  </h2>
</div>

        <div className="mb-12" />

        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* About Text */}
          <div className="space-y-5 text-slate-700">
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
  Hello, my name is{" "}
  <strong className="font-semibold text-slate-900">
    Nontaphat Petgorn
  </strong>
  . I am a{" "}
  <span className="font-semibold text-sky-500">
  Computer Engineering and Artificial Intelligence
</span>{" "}
student at Walailak University.
</p>

            <p className="text-lg leading-relaxed md:text-xl">
  My main interests are{" "}
  <span className="font-code font-medium text-sky-500">AI</span>,{" "}
  <span className="font-code font-medium text-sky-500">Web Dev</span>, and{" "}
  <span className="font-code font-medium text-sky-500">Data</span>. I am
  continuously improving these skills by building real-world projects.
</p>

            <p className="text-lg leading-relaxed md:text-xl">
              This portfolio is part of my preparation for internship and future
              career opportunities, showcasing my projects, skills, and learning
              journey.
            </p>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-3">
            {infoItems.map((item, index) => (
  <Card
  key={item.label}
  className="group flex min-h-[132px] overflow-hidden rounded-xl border border-blue-200/45 bg-white/90 shadow-[0_5px_18px_rgba(37,99,235,0.06)] backdrop-blur-sm transition-all duration-500 ease-out hover:translate-x-1.5 hover:-translate-y-1 hover:border-blue-300/70 hover:shadow-[0_12px_30px_rgba(59,130,246,0.13)]"
  style={{ animationDelay: `${index * 100}ms` }}
>
<CardContent className="relative flex w-full items-center gap-4 p-4">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-200/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100/70 transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-blue-100 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.18)]">
  <item.icon className="h-5 w-5 text-blue-600 transition-transform duration-500 ease-out group-hover:scale-105" />
</div>

     <div className="relative z-10">
  <p className="font-code text-xs text-slate-500">
    {item.label}
  </p>
  <p className="font-semibold text-slate-950">
    {item.value}
  </p>
 <p className="mt-1 max-w-sm text-xs leading-snug text-slate-500">
  {item.description}
</p>
</div>
    </CardContent>
  </Card>
))}
          </div>
        </div>

        {/* Career Interest */}
        <div className="section-divider mb-12" />

        <div>
          <h3 className="mb-2 text-center text-xl font-semibold text-foreground">
            Career Interest
          </h3>
          <p className="mb-8 text-center font-code text-xs text-muted-foreground">
            // Fields I am interested in
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerInterests.map((career) => (
              <Card
                key={career.title}
                className="card-glow group overflow-hidden text-center transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className={`relative bg-gradient-to-b p-6 ${career.gradient}`}>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <career.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-foreground">
                    {career.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {career.description}
                  </p>

                  <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-bl from-primary/10 to-transparent" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}