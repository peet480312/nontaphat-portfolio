import { Code2 } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <span className="font-code text-lg font-bold text-primary">NP</span>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Nontaphat Petgorn. All rights reserved.
          </p>
          <p className="font-code text-center text-xs text-muted-foreground/70">
            {"Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui"}          </p>
        </div>
      </div>
    </footer>
  )
}
