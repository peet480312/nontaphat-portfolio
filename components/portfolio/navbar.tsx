"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code2 } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
]

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const navbarHeight = 80
      const targetPosition = (target as HTMLElement).offsetTop - navbarHeight
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? "border-b border-blue-500/10 bg-black/70 shadow-lg backdrop-blur-xl"
          : "border-b border-transparent bg-black/50 backdrop-blur-xl"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3 transition-all duration-300 hover:text-sky-300"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-950/40">
            <Code2 className="h-5 w-5 text-blue-400 transition-colors group-hover:text-sky-300" />
          </div>
          <span className="font-code text-xl font-bold text-blue-400 transition-colors group-hover:text-sky-300">NP</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative rounded-lg px-4 py-2 font-code text-sm font-medium transition-all ${activeSection === item.href.slice(1)
                    ? "bg-blue-600/20 text-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/20 bg-slate-950/90 text-slate-200 transition-colors hover:bg-blue-500/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full border-b border-blue-500/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
          }`}
      >
        <ul className="flex flex-col gap-2 p-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block rounded-lg px-4 py-3 font-code text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                    ? "bg-blue-600/20 text-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
