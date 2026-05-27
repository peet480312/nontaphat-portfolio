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
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/anucha-t",
    href: "https://github.com/anucha-t",
    copyable: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anucha-t",
    href: "https://linkedin.com/in/anucha-t",
    copyable: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Thailand",
    href: null,
    copyable: false,
  },
]

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    const email = contactItems.find((item) => item.copyable)?.value
    if (email) {
      try {
        await navigator.clipboard.writeText(email)
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } catch {
        const textArea = document.createElement("textarea")
        textArea.value = email
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      }
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Send className="h-5 w-5 text-primary" />
          <h2 className="gradient-text text-center text-3xl font-bold md:text-4xl">Contact</h2>
        </div>
        <p className="mb-12 text-center font-code text-sm text-muted-foreground">{"// ติดต่อผม"}</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <Card
              key={item.label}
              className="card-glow group text-center transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="relative overflow-hidden p-6">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mb-2 font-code text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block break-all text-sm text-foreground transition-colors hover:text-primary hover:underline"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-sm text-foreground">{item.value}</p>
                  )}
                  {item.copyable && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyEmail}
                      className={`mt-4 font-code text-xs transition-all ${
                        copiedEmail ? "border-success bg-success/10 text-success" : ""
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
