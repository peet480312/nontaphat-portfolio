import { FileText, Eye, FileDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// ======================================================
// RESUME DATA
// ======================================================

const resumes = [
  {
    id: "english",

    language: "English",

    title: "English Resume",

    subtitle: "English • PDF",

    description:
      "Professional resume featuring my education, technical skills, and web development projects.",

    file: "/resumes/Nontaphat_Resume_EN.pdf",

    fileName: "Nontaphat_Resume_EN.pdf",

    badge: "EN",
  },

  {
    id: "thai",

    language: "Thai",

    title: "Thai Resume",

    subtitle: "Thai • PDF",

    description:
      "เรซูเม่ภาษาไทยสำหรับสมัครฝึกงาน พร้อมข้อมูลการศึกษา ทักษะทางเทคนิค และผลงานพัฒนาเว็บไซต์",

    file: "/resumes/Nontaphat_Resume_TH.pdf",

    fileName: "Nontaphat_Resume_TH.pdf",

    badge: "TH",
  },
]

// ======================================================
// RESUME SECTION
// ======================================================

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="scroll-mt-20 bg-secondary py-16"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* =========================================== */}
        {/* SECTION HEADER */}
        {/* =========================================== */}

        <div className="mb-10 text-center">

          <div
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-300
              ease-out
              hover:-translate-y-1
              hover:scale-[1.04]
              hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.22)]
            "
          >

            <FileDown
              className="
                h-5 w-5
                text-primary
                transition-all
                duration-300
                ease-out
                group-hover:-translate-y-0.5
                group-hover:scale-105
                group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]
              "
            />

            <h2
              className="
                gradient-text
                text-center
                text-3xl
                font-bold
                transition-all
                duration-300
                ease-out
                group-hover:-translate-y-0.5
                group-hover:scale-[1.04]
                md:text-4xl
              "
            >
              Resume
            </h2>

          </div>

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              font-code
              text-sm
              leading-relaxed
              text-slate-500
              md:text-base
            "
          >
            View or download my resume in English or Thai.
          </p>

        </div>

        {/* =========================================== */}
        {/* RESUME CARDS */}
        {/* =========================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-5xl
            grid-cols-1
            items-stretch
            gap-6
            md:grid-cols-2
          "
        >

          {resumes.map((resume) => (

            <Card
              key={resume.id}
              className="
                card-glow
                group
                relative
                h-full
                overflow-hidden
                rounded-2xl
                border
                border-blue-200/60
                bg-white/95
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:scale-[1.01]
                hover:border-blue-300/70
                hover:shadow-[0_18px_45px_rgba(59,130,246,0.16)]
                active:-translate-y-0.5
                active:scale-[1.005]
              "
            >

              <CardContent
                className="
                  relative
                  flex
                  h-full
                  flex-col
                  items-center
                  p-6
                  text-center
                  md:p-7
                "
              >

                {/* ================================= */}
                {/* BACKGROUND DECORATION */}
                {/* ================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-40
                    w-40
                    rounded-full
                    bg-primary/5
                    blur-3xl
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-10
                    -left-10
                    h-32
                    w-32
                    rounded-full
                    bg-primary/5
                    blur-3xl
                  "
                />

                {/* ================================= */}
                {/* LANGUAGE BADGE */}
                {/* ================================= */}

                <div
                  className="
                    relative
                    z-10
                    mb-4
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-blue-200
                    bg-blue-50
                    px-4
                    py-1.5
                    font-code
                    text-xs
                    font-semibold
                    text-blue-600
                  "
                >
                  {resume.language} Version
                </div>

                {/* ================================= */}
                {/* RESUME ICON */}
                {/* ================================= */}

                <div
                  className="
                    resume-icon-shine
                    relative
                    z-10
                    mb-4
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-primary/10
                    shadow-[0_0_18px_rgba(59,130,246,0.15)]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:-translate-y-1
                    group-hover:scale-110
                    group-hover:bg-blue-100
                    group-hover:shadow-[0_0_24px_rgba(59,130,246,0.24)]
                  "
                >

                  <FileText
                    className="
                      relative
                      z-20
                      h-7
                      w-7
                      text-primary
                      transition-all
                      duration-300
                      ease-out
                      group-hover:scale-110
                      group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]
                    "
                  />

                </div>

                {/* ================================= */}
                {/* RESUME TITLE */}
                {/* ================================= */}

                <h3
                  className="
                    relative
                    z-10
                    mb-1
                    text-xl
                    font-bold
                    text-slate-900
                    md:text-2xl
                  "
                >
                  {resume.title}
                </h3>

                {/* ================================= */}
                {/* SUBTITLE */}
                {/* ================================= */}

                <p
                  className="
                    relative
                    z-10
                    mb-4
                    font-code
                    text-xs
                    font-medium
                    text-blue-500
                  "
                >
                  {resume.subtitle}
                </p>

                {/* ================================= */}
                {/* DESCRIPTION */}
                {/* ================================= */}

                <p
                  className="
                    relative
                    z-10
                    mb-6
                    max-w-md
                    flex-1
                    text-sm
                    leading-relaxed
                    text-muted-foreground
                    md:text-base
                  "
                >
                  {resume.description}
                </p>

                {/* ================================= */}
                {/* ACTION BUTTONS */}
                {/* ================================= */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    w-full
                    flex-col
                    justify-center
                    gap-3
                    sm:flex-row
                  "
                >

                  {/* =============================== */}
                  {/* VIEW PDF */}
                  {/* =============================== */}

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="
                      border-blue-200
                      bg-white/70
                      font-semibold
                      text-slate-900
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-1
                      hover:scale-105
                      hover:border-blue-300
                      hover:bg-blue-50
                      hover:text-blue-600
                      active:translate-y-0
                      active:scale-[1.02]
                    "
                  >

                    <a
                      href={resume.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${resume.title}`}
                    >

                      <Eye className="mr-2 h-4 w-4" />

                      View PDF

                    </a>

                  </Button>

                  {/* =============================== */}
                  {/* DOWNLOAD PDF */}
                  {/* =============================== */}

                  <Button
                    asChild
                    size="lg"
                    className="
                      glow-shadow
                      font-semibold
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-1
                      hover:scale-105
                      active:translate-y-0
                      active:scale-[1.02]
                    "
                  >

                    <a
                      href={resume.file}
                      download={resume.fileName}
                      aria-label={`Download ${resume.title}`}
                    >

                      <FileDown className="mr-2 h-4 w-4" />

                      Download PDF

                    </a>

                  </Button>

                </div>

                {/* ================================= */}
                {/* CARD FOOTER */}
                {/* ================================= */}

                <div
                  className="
                    relative
                    z-10
                    mt-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-code
                    text-xs
                    text-slate-400
                  "
                >

                  <FileText className="h-3.5 w-3.5" />

                  <span>
                    PDF Format • 2026
                  </span>

                </div>

              </CardContent>

            </Card>

          ))}

        </div>

      </div>
    </section>
  )
}