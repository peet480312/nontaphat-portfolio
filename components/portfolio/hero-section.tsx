import Link from "next/link"
import { ArrowDown, Github, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const navbarHeight = 80
      const targetPosition = (target as HTMLElement).offsetTop - navbarHeight
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="tech-grid relative flex min-h-screen flex-col justify-center pt-20"
      style={{
        background: `
          radial-gradient(ellipse at top right, oklch(0.72 0.19 220 / 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, oklch(0.5 0.15 280 / 0.05) 0%, transparent 50%),
          oklch(0.08 0.015 250)
        `,
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-code">Aspiring AI & Web Developer</span>
          </div>
          
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-blue-300 md:text-5xl lg:text-6xl">
            Nontaphat Petgorn
          </h1>
          
          <h2 className="mb-2 text-xl font-semibold text-slate-100 md:text-2xl">
              Computer Engineering & AI
          </h2>
          <h3 className="mb-2 text-lg text-slate-200 md:text-xl">
            Aspiring AI Developer | Frontend Developer
          </h3>
          <p className="mb-6 font-code text-sm text-blue-400">
            @ Walailak University
          </p>
          
          <p className="mb-8 max-w-lg text-slate-300 lg:max-w-none">
            Computer Engineering & AI student developing practical skills in AI, Web Development, and Data Analysis by building real-world projects.
          </p>

          <div className="flex flex-row flex-nowrap justify-center gap-2 sm:gap-4 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="text-sm px-3 py-3 sm:text-base sm:px-6 sm:py-3 whitespace-nowrap glow-shadow font-semibold transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-500 hover:to-blue-300"
            >
              <Link href="#projects" onClick={(e) => handleScrollClick(e, "#projects")}>
                View Projects
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="group text-sm px-3 py-3 sm:text-base sm:px-6 sm:py-3 whitespace-nowrap border border-blue-500/30 bg-blue-950/30 text-slate-100 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-blue-600/15 hover:border-blue-400/60 hover:text-blue-300"
            >
              <Link href="#resume" onClick={(e) => handleScrollClick(e, "#resume")}>
                Download Resume
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group text-sm px-3 py-3 sm:text-base sm:px-6 sm:py-3 whitespace-nowrap border border-blue-500/30 bg-blue-950/30 text-slate-100 transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-blue-600/15 hover:border-blue-400/60 hover:text-blue-300"
            >
              <Link href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Github className="mr-2 h-4 w-4 text-slate-200 transition-colors group-hover:text-blue-300" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Avatar with Tech Design */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Outer ring with gradient */}
            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-sky-400/20 via-transparent to-blue-500/15 blur-sm" />
            
            {/* Main avatar container */}
            <div className="animate-pulse-glow relative flex h-56 w-56 items-center justify-center rounded-full border-2 border-blue-500/40 bg-slate-900/90 shadow-[0_0_40px_rgba(59,130,246,0.18)] md:h-72 md:w-72">
              {/* Inner decorative ring */}
              <div className="absolute inset-4 rounded-full border border-blue-500/40 bg-slate-950/60" />
              
              {/* Initials */}
              <span className="font-code text-6xl font-extrabold text-blue-300 md:text-7xl">NP</span>
              
              {/* Corner decorations */}
              <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-sky-400/80" />
              <div className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-blue-400/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 text-center">
        <Link
          href="#about"
          onClick={(e) => handleScrollClick(e, "#about")}
          className="inline-flex flex-col items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
        >
          <span className="font-code text-xs">Scroll to explore</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </Link>
      </div>

      {/* Decorative elements removed for cleaner layout */}
    </section>
  )
}
