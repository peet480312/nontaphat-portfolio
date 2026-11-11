"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import {
  Mail,
  Github,
  MapPin,
  Copy,
  Check,
  Send,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// ========================================
// Contact Information
// ========================================

const EMAIL_ADDRESS = "nontapat0312@gmail.com"

const GITHUB_URL = "https://github.com/peet480312"

const LOCATION = "Thailand"

// Validate email address
const hasEmail =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EMAIL_ADDRESS)

// ========================================
// Contact Items
// ========================================

const contactItems = [
  {
    icon: Mail,
    label: "Email",

    value: hasEmail
      ? EMAIL_ADDRESS
      : "Add your email address",

    href: hasEmail
      ? `mailto:${EMAIL_ADDRESS}`
      : null,

    copyable: hasEmail,
  },

  {
    icon: Github,
    label: "GitHub",

    value: "github.com/peet480312",

    href: GITHUB_URL,

    copyable: false,
  },

  {
    icon: MapPin,
    label: "Location",

    value: LOCATION,

    href: null,

    copyable: false,
  },
]

// ========================================
// Contact Section Component
// ========================================

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current)
      }
    }
  }, [])

  // ========================================
  // Copy Email Function
  // ========================================

  const handleCopyEmail = async () => {
    if (!hasEmail) return

    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API unavailable")
      }

      await navigator.clipboard.writeText(EMAIL_ADDRESS)
    } catch {
      // Fallback for browsers without Clipboard API
      const textArea = document.createElement("textarea")

      textArea.value = EMAIL_ADDRESS
      textArea.style.position = "fixed"
      textArea.style.opacity = "0"

      document.body.appendChild(textArea)

      textArea.focus()
      textArea.select()

      const copied = document.execCommand("copy")

      document.body.removeChild(textArea)

      if (!copied) return
    }

    setCopiedEmail(true)

    if (resetTimer.current) {
      clearTimeout(resetTimer.current)
    }

    resetTimer.current = setTimeout(() => {
      setCopiedEmail(false)
    }, 1800)
  }

  // ========================================
  // Render Contact Section
  // ========================================

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* ========================================
            Section Header
        ======================================== */}

        <div className="mb-12 text-center">

          <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.22)] active:-translate-y-0.5 active:scale-[1.02]">

            <Send
              className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]"
            />

            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] md:text-4xl">
              Contact
            </h2>

          </div>

          {/* Subtitle */}

          <p className="mx-auto mt-3 max-w-2xl font-code text-sm leading-relaxed text-slate-500 md:text-base">
            {"// Let's connect"}
          </p>

          {/* ========================================
              Updated Contact Description
          ======================================== */}

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            I am currently seeking internship opportunities
            in Frontend and Web Application Development.
            Feel free to get in touch!
          </p>

        </div>

        {/* ========================================
            Contact Cards Grid
        ======================================== */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {contactItems.map((item) => (

            <Card
              key={item.label}
              className="card-glow group h-full overflow-hidden rounded-2xl border border-blue-200/50 bg-white/95 text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300/50 hover:shadow-[0_12px_28px_rgba(59,130,246,0.12)] active:-translate-y-0.5 active:scale-[1.005]"
            >

              <CardContent className="relative flex h-full flex-col items-center overflow-hidden p-6">

                {/* Background Hover Effect */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex w-full flex-1 flex-col items-center">

                  {/* ========================================
                      Contact Icon
                  ======================================== */}

                  <div className="contact-icon-shine relative mx-auto mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-primary/10 shadow-[0_0_18px_rgba(59,130,246,0.12)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-blue-100 group-hover:shadow-[0_0_22px_rgba(59,130,246,0.22)]">

                    <item.icon
                      className="relative z-20 h-6 w-6 text-primary transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]"
                    />

                  </div>

                  {/* ========================================
                      Contact Label
                  ======================================== */}

                  <p className="mb-2 font-code text-xs text-muted-foreground transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-blue-500">
                    {item.label}
                  </p>

                  {/* ========================================
                      Contact Value
                  ======================================== */}

                  {item.href ? (

                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block max-w-full break-all text-sm font-medium text-foreground transition-all duration-300 ease-out hover:text-primary hover:underline group-hover:-translate-y-0.5"
                    >
                      {item.value}
                    </Link>

                  ) : (

                    <p className="text-sm font-medium text-foreground transition-all duration-300 ease-out group-hover:-translate-y-0.5">
                      {item.value}
                    </p>

                  )}

                  {/* ========================================
                      Copy Email Button
                  ======================================== */}

                  {item.copyable && (

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className={`mt-4 font-code text-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-[1.02] ${
                        copiedEmail
                          ? "border-success bg-success/10 text-success hover:bg-success/10 hover:text-success"
                          : "border-blue-200 bg-white/70 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >

                      {copiedEmail ? (

                        <>
                          <Check className="mr-1.5 h-3.5 w-3.5" />
                          Copied!
                        </>

                      ) : (

                        <>
                          <Copy className="mr-1.5 h-3.5 w-3.5" />
                          Copy Email
                        </>

                      )}

                    </Button>

                  )}

                  <span
                    aria-live="polite"
                    className="sr-only"
                  >
                    {copiedEmail && item.copyable
                      ? "Email address copied"
                      : ""}
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