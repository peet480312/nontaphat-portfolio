import Link from "next/link"
import { FileText, Eye, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ResumeSection() {
  return (
    <section id="resume" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.22)] active:-translate-y-0.5 active:scale-[1.02]">
            <FileDown className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />

            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] md:text-4xl">
              Resume
            </h2>
          </div>

          <p className="mx-auto mt-3 max-w-2xl font-code text-sm leading-relaxed text-slate-500 md:text-base">
            {"Download my resume"}
          </p>
        </div>

        <Card className="card-glow group mx-auto max-w-2xl overflow-hidden rounded-2xl border border-blue-200/60 bg-white/95 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_18px_45px_rgba(59,130,246,0.16)] active:-translate-y-0.5 active:scale-[1.005]">
          <CardContent className="relative p-7 text-center md:p-8">
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10">
              <div className="resume-icon-shine mx-auto mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 shadow-[0_0_18px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-blue-100 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.24)]">
                <FileText className="relative z-20 h-8 w-8 text-primary transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
              </div>

              <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                My resume includes my education, skills, projects, and contact
                information. You can download it or view it online.
              </p>

              <div className="mb-4 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="glow-shadow font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-[1.02]"
                >
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-200 bg-white/70 font-semibold text-slate-900 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 active:translate-y-0 active:scale-[1.02]"
                >
                  <Link href="#">
                    <Eye className="mr-2 h-4 w-4" />
                    View Online
                  </Link>
                </Button>
              </div>

              <p className="font-code text-xs text-slate-400">
                PDF format • Updated 2026
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}