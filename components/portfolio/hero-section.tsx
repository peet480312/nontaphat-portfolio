"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowDown, Github, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [showProfileImage, setShowProfileImage] = useState(true)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const navbarHeight = 80
      const targetPosition = (target as HTMLElement).offsetTop - navbarHeight
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
  }

  const handleMouseGlowMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    target.style.setProperty("--x", `${x}px`)
    target.style.setProperty("--y", `${y}px`)
  }

  const handleMouseGlowReset = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement
    target.style.setProperty("--x", "50%")
    target.style.setProperty("--y", "50%")
  }

  const handleProfileTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const maxTilt = 4
    const rotateY = Math.max(-maxTilt, Math.min(maxTilt, ((x / rect.width) - 0.5) * maxTilt))
    const rotateX = Math.max(-maxTilt, Math.min(maxTilt, ((0.5 - (y / rect.height))) * maxTilt))

    setTilt({ x: rotateX, y: rotateY })
  }

  const handleProfileTiltLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const neuralNodes = [
    { cx: 50, cy: 16, delay: "0s" },
    { cx: 78, cy: 24, delay: "0.2s" },
    { cx: 86, cy: 50, delay: "0.4s" },
    { cx: 76, cy: 78, delay: "0.6s" },
    { cx: 50, cy: 86, delay: "0.8s" },
    { cx: 24, cy: 78, delay: "1s" },
  ]

  const neuralConnections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 0],
    [1, 4],
    [2, 5],
  ]

  return (
    <section
      id="home"
      className="tech-grid relative flex min-h-screen flex-col justify-center pt-20"
      style={{
        background: `
          radial-gradient(ellipse 60% 55% at 85% 25%, rgba(37, 99, 235, 0.10) 0%, rgba(37, 99, 235, 0.04) 28%, transparent 58%),
          radial-gradient(ellipse 45% 45% at 18% 18%, rgba(56, 189, 248, 0.06) 0%, rgba(56, 189, 248, 0.02) 30%, transparent 58%),
          radial-gradient(ellipse 45% 45% at 72% 78%, rgba(14, 165, 233, 0.05) 0%, transparent 52%),
          linear-gradient(135deg, #020617 0%, #0f172a 45%, #020617 100%)
        `,
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="hero-reveal mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary" style={{ animationDelay: "0.08s" }}>
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-code">Aspiring AI & Web Developer</span>
          </div>
          
          <div className="hero-reveal mb-4" style={{ animationDelay: "0.18s" }}>
  <h1
    data-text="Nontaphat Petgorn"
    className="hero-name-shine text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
  >
    Nontaphat Petgorn
  </h1>
</div>
          
          <h2 className="hero-reveal mb-2 text-xl font-semibold text-slate-100 md:text-2xl" style={{ animationDelay: "0.28s" }}>
              Computer Engineering & AI
          </h2>
          <h3 className="hero-reveal mb-2 text-lg text-slate-200 md:text-xl" style={{ animationDelay: "0.36s" }}>
            Aspiring AI Developer | Frontend Developer
          </h3>
          <p className="hero-reveal mb-6 font-code text-sm text-blue-400" style={{ animationDelay: "0.44s" }}>
            @ Walailak University
          </p>
          
          <p className="hero-reveal mb-8 max-w-lg text-slate-300 lg:max-w-none" style={{ animationDelay: "0.52s" }}>
            Computer Engineering & AI student developing practical skills in AI, Web Development, and Data Analysis by building real-world projects.
          </p>

          <div className="hero-reveal flex flex-row flex-nowrap justify-center gap-2 sm:gap-4 lg:justify-start" style={{ animationDelay: "0.62s" }}>
            <Button
              asChild
              size="lg"
              onMouseMove={handleMouseGlowMove}
              onMouseLeave={handleMouseGlowReset}
              className="glow-button hero-btn-primary text-sm px-3 py-3 sm:text-base sm:px-6 sm:py-3 whitespace-nowrap glow-shadow font-semibold transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg text-white"
            >
              <Link href="#projects" onClick={(e) => handleScrollClick(e, "#projects")}>
                View Projects
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              onMouseMove={handleMouseGlowMove}
              onMouseLeave={handleMouseGlowReset}
              className="glow-button hero-btn-secondary group text-sm px-3 py-3 sm:text-base sm:px-6 sm:py-3 whitespace-nowrap border transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg text-white"
            >
              <Link href="#resume" onClick={(e) => handleScrollClick(e, "#resume")}>
                Download Resume
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              onMouseMove={handleMouseGlowMove}
              onMouseLeave={handleMouseGlowReset}
              className="glow-button hero-btn-link group text-sm px-3 py-3 sm:text-base sm:px-6 sm:py-3 whitespace-nowrap border transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg text-white"
            >
              <Link
                href="https://github.com/peet480312/nontaphat-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-white focus:text-white active:text-white"
              >
                <Github className="mr-2 h-4 w-4 text-white transition-colors group-hover:text-white group-focus:text-white group-active:text-white" />
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
            <div
              className="profile-orbit-wrap profile-hover-group hover-group np-avatar-shell hero-avatar-fade-in relative flex h-56 w-56 items-center justify-center rounded-full border-2 border-blue-500/40 bg-slate-900/90 shadow-[0_0_40px_rgba(59,130,246,0.18)] transition-all duration-300 ease-out md:h-72 md:w-72"
              style={{
                animationDelay: "0.72s",
                ['--tilt-x' as string]: `${tilt.x}deg`,
                ['--tilt-y' as string]: `${tilt.y}deg`,
              }}
              onMouseMove={handleProfileTiltMove}
              onMouseLeave={handleProfileTiltLeave}
            >
              <div className="tech-hud-ring tech-hud-ring-outer outer-hud-ring" aria-hidden="true" />
              <div className="tech-hud-ring tech-hud-ring-middle middle-hud-ring" aria-hidden="true" />
              <div className="tech-hud-ring tech-hud-ring-inner inner-hud-ring" aria-hidden="true" />
              <span className="tech-hud-segment segment-a" aria-hidden="true" />
              <span className="tech-hud-segment segment-b" aria-hidden="true" />
              <span className="tech-hud-segment segment-c" aria-hidden="true" />
              <span className="tech-hud-segment segment-d" aria-hidden="true" />
              <span className="tech-hud-scan" aria-hidden="true" />

              {/* Inner decorative ring */}
              <div className="np-ring-spin absolute inset-4 rounded-full border border-blue-500/40 bg-slate-950/60" />

              <svg
                viewBox="0 0 100 100"
                className="np-network-overlay absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="npNodeGlow" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.95" />
                    <stop offset="42%" stopColor="#67e8f9" stopOpacity="0.82" />
                    <stop offset="100%" stopColor="#0891b2" stopOpacity="0.55" />
                  </radialGradient>
                </defs>

                {neuralConnections.map(([from, to]) => (
                  <path
                    key={`connection-${from}-${to}`}
                    d={`M ${neuralNodes[from].cx} ${neuralNodes[from].cy} L ${neuralNodes[to].cx} ${neuralNodes[to].cy}`}
                    className="np-network-line"
                  />
                ))}

                {neuralNodes.map((node, index) => (
                  <circle
                    key={`node-${index}`}
                    cx={node.cx}
                    cy={node.cy}
                    r="2.3"
                    className="np-node"
                    style={{ animationDelay: node.delay }}
                  />
                ))}
              </svg>

              <div className="np-tech-orbit-ring absolute inset-1 rounded-full border border-cyan-300/25" />
              <div className="np-tech-orbit-ring-soft absolute inset-3 rounded-full border border-sky-200/20" />

              <div className="np-profile-frame absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-full border border-cyan-400/40 bg-slate-950/80 shadow-[0_0_24px_rgba(14,165,233,0.18)]">
                {showProfileImage ? (
                  <img
                    src="/profile.jpg"
                    alt="Portrait of Nontaphat Petgorn"
                    className="profile-image np-profile-image h-full w-full rounded-full object-cover"
                    draggable={false}
                    onError={() => setShowProfileImage(false)}
                  />
                ) : (
                  <span className="np-profile-fallback np-text-glow font-code text-6xl font-extrabold text-blue-300 md:text-7xl">NP</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-reveal mt-12 text-center" style={{ animationDelay: "0.9s" }}>
        <Link
          href="#about"
          onClick={(e) => handleScrollClick(e, "#about")}
          className="scroll-indicator group inline-flex cursor-pointer flex-col items-center gap-2 text-sm text-slate-400 transition-colors duration-300 ease-out"
        >
          <span className="font-code text-xs transition-transform duration-300 ease-out">Scroll to explore</span>
          <ArrowDown className="scroll-indicator-arrow h-5 w-5 transition-transform duration-300 ease-out" />
        </Link>
      </div>

      {/* Decorative elements removed for cleaner layout */}
    </section>
  )
}
