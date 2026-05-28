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
      className={`back-to-top-btn fixed bottom-3 right-3 z-[60] h-10 w-10 rounded-full border border-cyan-400/25 bg-slate-950/85 text-slate-100 shadow-[0_10px_26px_rgba(14,165,233,0.14)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/95 hover:text-cyan-100 hover:shadow-[0_12px_30px_rgba(56,189,248,0.22)] md:bottom-5 md:right-5 md:h-11 md:w-11 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}
