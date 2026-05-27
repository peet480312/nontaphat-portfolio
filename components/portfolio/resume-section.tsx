import Link from "next/link"
import { FileText, Eye, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ResumeSection() {
  return (
    <section id="resume" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-2 flex items-center justify-center gap-2">
          <FileDown className="h-5 w-5 text-primary" />
          <h2 className="gradient-text text-center text-3xl font-bold md:text-4xl">Resume</h2>
        </div>
        <p className="mb-8 text-center font-code text-sm text-muted-foreground">
          {"// ดาวน์โหลด Resume ของผม"}
        </p>

        <Card className="card-glow mx-auto max-w-2xl overflow-hidden">
          <CardContent className="relative p-8 text-center">
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <FileText className="h-8 w-8 text-primary" />
              </div>

              <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                {"Resume ฉบับเต็มประกอบด้วยข้อมูลการศึกษา ทักษะ และประสบการณ์ต่าง ๆ สามารถดาวน์โหลดได้ที่ปุ่มด้านล่าง"}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="glow-shadow font-semibold">
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#">
                    <Eye className="mr-2 h-4 w-4" />
                    View Online
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
