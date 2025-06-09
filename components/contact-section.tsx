"use client"

import type React from "react"

import { useState } from "react"
import { Send, Github, Twitter, Linkedin, Mail, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 bg-[#000000] text-[#EAE8F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-8 tracking-wider text-[#EAE8F3]">{t("contact.title")}</h2>

          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#EAE8F3]">{t("contact.question")}</h3>
            <h4 className="text-4xl font-bold">
              <span className="text-[#EAE8F3]">Contactez-</span>
              <span className="text-[#A77B9E]">moi !</span>
            </h4>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium mb-2 text-[#EAE8F3]">
                  {t("contact.email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact.email.placeholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#2C2F33] border-[#A77B9E]/30 text-[#EAE8F3] placeholder:text-[#A77B9E]/60 focus:border-[#A77B9E]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium mb-2 text-[#EAE8F3]">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("contact.message.placeholder")}
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#2C2F33] border-[#A77B9E]/30 text-[#EAE8F3] placeholder:text-[#A77B9E]/60 focus:border-[#A77B9E] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#EAE8F3] text-[#000000] hover:bg-[#A77B9E] hover:text-[#EAE8F3] font-bold py-3 text-lg tracking-wider transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                {t("contact.send")}
              </Button>
            </div>
          </form>

          <div className="flex justify-center space-x-6">
            <a
                href="https://github.com/AngeGabriel-rgb"
              className="w-12 h-12 bg-[#A77B9E] rounded-full flex items-center justify-center hover:bg-[#3A2A4E] transition-colors"
            >
              <Github className="w-6 h-6 text-[#EAE8F3]" />
            </a>
            <a
                href="https://x.com/Angelito452214"
              className="w-12 h-12 bg-[#A77B9E] rounded-full flex items-center justify-center hover:bg-[#3A2A4E] transition-colors"
            >
              <Twitter className="w-6 h-6 text-[#EAE8F3]" />
            </a>
            <a
                href="https://www.linkedin.com/in/ange-gabriel-431aa636a/"
              className="w-12 h-12 bg-[#A77B9E] rounded-full flex items-center justify-center hover:bg-[#3A2A4E] transition-colors"
            >
              <Linkedin className="w-6 h-6 text-[#EAE8F3]" />
            </a>
            <a
                href="mailto:gabrielange748@gmail.com"
              className="w-12 h-12 bg-[#A77B9E] rounded-full flex items-center justify-center hover:bg-[#3A2A4E] transition-colors"
            >
              <Mail className="w-6 h-6 text-[#EAE8F3]" />
            </a>
            <a
              href="https://open.spotify.com/intl-fr/track/1c3GkbZBnyrQ1cm4TGHFrK?si=33a595989d9a4ab4"
              className="w-12 h-12 bg-[#A77B9E] rounded-full flex items-center justify-center hover:bg-[#3A2A4E] transition-colors"
            >
              <Music className="w-6 h-6 text-[#EAE8F3]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
