"use client"

import { useState, useEffect } from "react"

import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { LearningSection } from "@/components/portfolio/learning-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { BackToTop } from "@/components/portfolio/back-to-top"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    // ตรวจสอบตำแหน่งหน้าเว็บทันทีเมื่อโหลด
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Home */}
      <HeroSection />

      {/* About Me */}
      <AboutSection />

      {/* Technical Skills */}
      <SkillsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Resume - English & Thai */}
      <ResumeSection />

      {/* Currently Learning */}
      <LearningSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />
    </main>
  )
}