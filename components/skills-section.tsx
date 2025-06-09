"use client"

import { useLanguage } from "@/contexts/language-context"

const skills = [
  { name: "TypeScript", icon: "📘", category: "Frontend Development" },
  { name: "React", icon: "⚛️", category: "Frontend Development" },
  { name: "Next.js", icon: "▲", category: "Frontend Development" },
  { name: "Node.js", icon: "🟢", category: "Backend Development" },
  { name: "Express", icon: "🚀", category: "Backend Development" },
  { name: "NoSQL", icon: "🍃", category: "Backend Development" },
  { name: "SQL", icon: "🗄️", category: "Backend Development" },
  { name: "API", icon: "🔗", category: "Backend Development" },
  { name: "Prisma", icon: "🔺", category: "Backend Development" },
]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[#3A2A4E]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#EAE8F3] mb-4">{t("skills.title")}</h2>
          <h3 className="text-3xl font-bold text-[#A77B9E]">{t("skills.experience")}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h4 className="text-xl font-bold text-[#A77B9E] mb-8 text-center">{t("skills.frontend")}</h4>
            <div className="grid grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === "Frontend Development")
                .map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#2C2F33] p-6 rounded-lg text-center hover:bg-[#2C2F33]/80 transition-colors group border border-[#A77B9E]/20"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{skill.icon}</div>
                    <span className="text-[#EAE8F3] text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#A77B9E] mb-8 text-center">{t("skills.backend")}</h4>
            <div className="grid grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === "Backend Development")
                .map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#2C2F33] p-6 rounded-lg text-center hover:bg-[#2C2F33]/80 transition-colors group border border-[#A77B9E]/20"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{skill.icon}</div>
                    <span className="text-[#EAE8F3] text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
