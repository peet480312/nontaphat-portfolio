import {
  GraduationCap,
  Laptop,
  MapPin,
  Monitor,
  Code,
  Globe,
  Sparkles,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

// ========================================
// About Information Cards
// ========================================

const infoItems = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Computer Engineering and AI",
    description:
      "Third-year student at Walailak University, focusing on web development, software development, and practical engineering skills.",
  },
  {
    icon: Laptop,
    label: "Practical Experience",
    value: "Web Application Projects",
    description:
      "Hands-on project experience using Next.js, TypeScript, Tailwind CSS, and Supabase to build responsive web applications.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Thailand",
    description:
      "Open to internship opportunities in frontend development, web application development, and software development.",
  },
]

// ========================================
// Career Interests
// ========================================

const careerInterests = [
  {
    icon: Monitor,
    title: "Frontend Developer",
    description:
      "Interested in developing responsive, user-friendly, and interactive web interfaces using modern frontend technologies.",
  },
  {
    icon: Code,
    title: "Software Developer",
    description:
      "Interested in problem-solving, writing maintainable code, and developing practical software solutions for real-world applications.",
  },
  {
    icon: Globe,
    title: "Web Application Developer",
    description:
      "Interested in building web applications with authentication, database integration, and functional features that improve user experiences.",
  },
]

// ========================================
// About Section Component
// ========================================

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden pb-20 pt-28 md:pt-32"
      style={{
        background: `
          radial-gradient(
            circle at top right,
            rgba(59, 130, 246, 0.22),
            transparent 34%
          ),
          radial-gradient(
            circle at bottom left,
            rgba(37, 99, 235, 0.12),
            transparent 42%
          ),
          linear-gradient(
            180deg,
            #F1F7FF 0%,
            #DFECFF 100%
          )
        `,
      }}
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* ========================================
            About Me Title
        ======================================== */}

        <div className="about-title-pop mb-2 flex items-center justify-center gap-2">

          <Sparkles className="about-title-icon h-5 w-5 text-primary" />

          <h2 className="gradient-text text-center text-3xl font-bold md:text-4xl">
            About Me
          </h2>

        </div>

        <div className="mb-12" />

        {/* ========================================
            About Content
        ======================================== */}

        <div className="mb-12 grid gap-12 lg:grid-cols-2">

          {/* ========================================
              About Text - 3 Paragraphs
          ======================================== */}

          <div className="space-y-5 text-slate-700">

            {/* Paragraph 1: Introduction */}

            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">

              Hello, my name is{" "}

              <strong className="font-semibold text-slate-900">
                Nontaphat Petgorn
              </strong>

              . I am a third-year{" "}

              <span className="font-semibold text-blue-500">
                Computer Engineering and Artificial Intelligence
              </span>{" "}

              student at Walailak University.

            </p>

            {/* Paragraph 2: Interests and Experience */}

            <p className="text-lg leading-relaxed md:text-xl">

              My main interests are{" "}

              <span className="rounded-md bg-blue-100/70 px-2 py-0.5 font-code text-blue-700">
                Web Development
              </span>

              ,{" "}

              <span className="rounded-md bg-blue-100/70 px-2 py-0.5 font-code text-blue-700">
                Software Development
              </span>

              , and{" "}

              <span className="rounded-md bg-blue-100/70 px-2 py-0.5 font-code text-blue-700">
                AI
              </span>

              . Through projects such as{" "}

              <strong className="font-semibold text-blue-600">
                SkillSync AI
              </strong>

              , I have gained hands-on experience building
              responsive web applications using{" "}

              <span className="font-semibold text-slate-900">
                Next.js, TypeScript, Tailwind CSS, and Supabase
              </span>

              , including authentication and database integration.

            </p>

            {/* Paragraph 3: Internship Goal */}

            <p className="text-lg leading-relaxed md:text-xl">

              I am currently seeking an internship in{" "}

              <span className="font-semibold text-blue-600">
                Frontend or Web Application Development
              </span>

              , where I can contribute to a software development
              team, gain practical experience, and continue
              improving my technical skills.

            </p>

          </div>

          {/* ========================================
              Information Cards
          ======================================== */}

          <div className="flex flex-col gap-4">

            {infoItems.map((item, index) => (

              <Card
                key={item.label}
                className="gradient-border group overflow-hidden rounded-2xl border border-blue-200/50 bg-white/95 shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-2 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_18px_45px_rgba(59,130,246,0.16)] active:-translate-y-1 active:scale-[1.005]"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                <CardContent className="relative flex items-center gap-4 p-3.5">

                  {/* Card Icon */}

                  <div className="info-icon-shine relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary/10 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-blue-100 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.18)]">

                    <item.icon className="relative z-20 h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.28)]" />

                  </div>

                  {/* Card Content */}

                  <div className="relative z-20 min-w-0 px-1 py-0.5">

                    <p className="font-code text-xs text-slate-500 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105">
                      {item.label}
                    </p>

                    <p className="origin-left font-semibold text-slate-950 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.04] group-hover:text-blue-600 group-hover:drop-shadow-[0_2px_8px_rgba(59,130,246,0.22)]">
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

        {/* ========================================
            Career Interest Section
        ======================================== */}

        <div className="section-divider mb-12" />

        <div>

          {/* Career Interest Title */}

          <div className="career-title-pop mb-8 text-center">

            <h3 className="gradient-text text-xl font-bold md:text-2xl">
              Career Interest
            </h3>

          </div>

          {/* ========================================
              Career Interest Cards
          ======================================== */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {careerInterests.map((career) => (

              <Card
                key={career.title}
                className="card-glow group overflow-hidden rounded-2xl border border-blue-200/50 bg-white/95 text-center shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_14px_36px_rgba(59,130,246,0.14)] active:-translate-y-0.5 active:scale-[1.005]"
              >

                <CardContent className="relative overflow-hidden p-5">

                  <div className="relative z-10">

                    {/* Career Icon */}

                    <div className="career-icon-shine relative mx-auto mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-blue-100/80 shadow-[0_0_0_1px_rgba(147,197,253,0.28),0_10px_28px_rgba(59,130,246,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-blue-100 group-hover:shadow-[0_0_0_1px_rgba(96,165,250,0.42),0_0_26px_rgba(59,130,246,0.28),0_14px_34px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.95)]">

                      <career.icon className="relative z-20 h-7 w-7 text-blue-600 transition-all duration-500 ease-out group-hover:scale-105 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.45)]" />

                    </div>

                    {/* Career Title */}

                    <h4 className="mb-2 text-lg font-semibold text-foreground transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] group-hover:text-primary">
                      {career.title}
                    </h4>

                    {/* Career Description */}

                    <p className="text-sm text-muted-foreground">
                      {career.description}
                    </p>

                  </div>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}