"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    toggleVisibility()
    window.addEventListener("scroll", toggleVisibility, { passive: true })

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      size="icon"
      className={`back-to-top-btn fixed bottom-4 right-4 z-[60] h-11 w-11 rounded-full border border-cyan-400/25 bg-slate-950/85 text-slate-100 shadow-[0_12px_32px_rgba(14,165,233,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/95 hover:text-cyan-100 hover:shadow-[0_14px_36px_rgba(56,189,248,0.24)] md:bottom-6 md:right-6 md:h-12 md:w-12 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
    </Button>
  )
}
