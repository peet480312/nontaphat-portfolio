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
  },
  {
    icon: Code,
    title: "Software Developer",
    description:
      "Interested in developing web applications and practical software solutions with real-world value.",
  },
  {
    icon: BarChart3,
    title: "Data Analyst",
    description:
      "Interested in analyzing data and creating dashboards to support better decision-making.",
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
          <div className="flex flex-col gap-2">
            {infoItems.map((item, index) => (
              <Card
                key={item.label}
                className="card-full-shine group flex h-[118px] overflow-hidden rounded-xl border border-blue-200/45 bg-white/90 shadow-[0_5px_18px_rgba(37,99,235,0.06)] backdrop-blur-sm transition-all duration-500 ease-out hover:translate-x-1.5 hover:-translate-y-1 hover:border-blue-300/70 hover:shadow-[0_12px_30px_rgba(59,130,246,0.13)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="relative flex h-full w-full items-center gap-4 p-4">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100/70 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-blue-100 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                    <item.icon className="h-5 w-5 text-blue-600 transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.55)]" />
                  </div>

                  <div className="relative z-20 px-1 py-0.5">
                    <p className="font-code text-xs text-slate-500 transition-all duration-500 ease-out group-hover:text-blue-500">
                      {item.label}
                    </p>
                    <p className="origin-left font-semibold text-slate-950 transition-all duration-500 ease-out group-hover:scale-[1.035] group-hover:text-slate-900 group-hover:drop-shadow-[0_2px_8px_rgba(59,130,246,0.18)]">
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
        <div className="section-divider mb-8" />

        <div>
          <div className="career-title-pop mb-8 text-center">
            <h3 className="gradient-text text-xl font-bold md:text-2xl">
              Career Interest
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerInterests.map((career) => (
              <Card
                key={career.title}
                className="group overflow-hidden rounded-2xl border border-blue-200/50 bg-white/95 text-center shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_18px_45px_rgba(59,130,246,0.16)]"
              >
                <CardContent className="relative z-10 p-6">
<div className="career-icon-shine relative mx-auto mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-blue-100/80 shadow-[0_0_0_1px_rgba(147,197,253,0.28),0_10px_28px_rgba(59,130,246,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-blue-100 group-hover:shadow-[0_0_0_1px_rgba(96,165,250,0.42),0_0_26px_rgba(59,130,246,0.28),0_14px_34px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.95)]">                    <career.icon className="relative z-20 h-7 w-7 text-blue-600 transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.45)]" />
                  </div>

  <h4 className="mb-2 text-lg font-semibold text-foreground transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-slate-950 group-hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.28)]">
  {career.title}
</h4>
                  <p className="text-sm text-muted-foreground">
                    {career.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}