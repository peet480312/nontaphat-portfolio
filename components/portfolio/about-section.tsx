import { GraduationCap, Building2, MapPin, Bot, Code, BarChart3, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const infoItems = [
  {
    icon: GraduationCap,
    label: "การศึกษา",
    value: "Computer Engineering and AI",
  },
  {
    icon: Building2,
    label: "มหาวิทยาลัย",
    value: "Walailak University",
  },
  {
    icon: MapPin,
    label: "ที่ตั้ง",
    value: "Thailand",
  },
]

const careerInterests = [
  {
    icon: Bot,
    title: "AI Engineer",
    description: "สนใจพัฒนาระบบ Machine Learning และ Deep Learning เพื่อแก้ปัญหาในโลกจริง",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Code,
    title: "Software Developer",
    description: "สนใจพัฒนา Web Application และ Full-stack Development เพื่อสร้างผลิตภัณฑ์ที่มีคุณค่า",
    gradient: "from-primary/15 to-transparent",
  },
  {
    icon: BarChart3,
    title: "Data Analyst",
    description: "สนใจวิเคราะห์ข้อมูลและสร้าง Dashboard เพื่อช่วยในการตัดสินใจทางธุรกิจ",
    gradient: "from-primary/10 to-transparent",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="gradient-text text-center text-3xl font-bold md:text-4xl">About Me</h2>
        </div>
        <p className="mb-12 text-center font-code text-sm text-muted-foreground">{"// เกี่ยวกับผม"}</p>

        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* About Text */}
          <div className="space-y-4 text-muted-foreground">
            <p>
              {"สวัสดีครับ ผมชื่อ "}
              <strong className="text-foreground">{"อนุชา ตาประจิตร์ (Nontaphat Petgorn)"}</strong>
              {" เป็นนักศึกษาสาขา "}
              <strong className="text-primary">{"วิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์"}</strong>
              {" มหาวิทยาลัยวลัยลักษณ์"}
            </p>
            <p>
              {"ผมมีความสนใจในด้าน "}
              <span className="rounded bg-primary/10 px-1.5 py-0.5 font-code text-sm text-primary">AI</span>
              {", "}
              <span className="rounded bg-primary/10 px-1.5 py-0.5 font-code text-sm text-primary">Web Dev</span>
              {" และ "}
              <span className="rounded bg-primary/10 px-1.5 py-0.5 font-code text-sm text-primary">Data</span>
              {" และกำลังพัฒนาทักษะเหล่านี้ผ่านการทำโปรเจกต์จริง"}
            </p>
            <p>
              {"เว็บไซต์นี้เป็นส่วนหนึ่งของการเตรียมตัวสำหรับการฝึกงานและสมัครงานในอนาคต โดยผมตั้งใจจะรวบรวมผลงานและทักษะต่าง ๆ ไว้ที่นี่"}
            </p>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {infoItems.map((item, index) => (
              <Card
                key={item.label}
                className="gradient-border group transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-code text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Interest */}
        <div className="section-divider mb-12" />
        
        <div>
          <h3 className="mb-2 text-center text-xl font-semibold text-foreground">Career Interest</h3>
          <p className="mb-8 text-center font-code text-xs text-muted-foreground">{"// สายงานที่สนใจ"}</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerInterests.map((career) => (
              <Card
                key={career.title}
                className="card-glow group overflow-hidden text-center transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className={`relative p-6 bg-gradient-to-b ${career.gradient}`}>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <career.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-foreground">{career.title}</h4>
                  <p className="text-sm text-muted-foreground">{career.description}</p>
                  
                  {/* Decorative corner */}
                  <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-bl from-primary/10 to-transparent" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
