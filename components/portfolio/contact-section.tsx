"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Github, Linkedin, MapPin, Copy, Check, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "anucha.t@example.com",
    href: "mailto:anucha.t@example.com",
    copyable: true,
    available: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/peet480312/nontaphat-portfolio",
    href: "https://github.com/peet480312/nontaphat-portfolio",
    copyable: false,
    available: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Coming Soon",
    href: null,
    copyable: false,
    available: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Thailand",
    href: null,
    copyable: false,
    available: true,
  },
]

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    const email = contactItems.find((item) => item.copyable)?.value

    if (!email) return

    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 1800)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)

      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 1800)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="group inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:drop-shadow-[0_8px_18px_rgba(59,130,246,0.22)] active:-translate-y-0.5 active:scale-[1.02]">
            <Send className="h-5 w-5 text-primary transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />

            <h2 className="gradient-text text-center text-3xl font-bold transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04] md:text-4xl">
              Contact
            </h2>
          </div>

          <p className="mx-auto mt-3 max-w-2xl font-code text-sm leading-relaxed text-slate-500 md:text-base">
            {"// Let’s connect"}
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
            Feel free to contact me for internship or entry-level opportunities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <Card
              key={item.label}
              className="card-glow group overflow-hidden rounded-2xl border border-blue-200/50 bg-white/95 text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300/50 hover:shadow-[0_12px_28px_rgba(59,130,246,0.12)] active:-translate-y-0.5 active:scale-[1.005]"
            >
              <CardContent className="relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="contact-icon-shine relative mx-auto mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-primary/10 shadow-[0_0_18px_rgba(59,130,246,0.12)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-blue-100 group-hover:shadow-[0_0_22px_rgba(59,130,246,0.22)]">
                    <item.icon className="relative z-20 h-6 w-6 text-primary transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
                  </div>

                  <p className="mb-2 font-code text-xs text-muted-foreground transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-blue-500">
                    {item.label}
                  </p>

                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block break-all text-sm font-medium text-foreground transition-all duration-300 ease-out hover:text-primary hover:underline group-hover:-translate-y-0.5"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p
                      className={`text-sm font-medium transition-all duration-300 ease-out group-hover:-translate-y-0.5 ${
                        item.available ? "text-foreground" : "text-slate-400"
                      }`}
                    >
                      {item.value}
                    </p>
                  )}

                  {item.copyable && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyEmail}
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}