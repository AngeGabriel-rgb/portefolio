"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Send, Github, Twitter, Linkedin, Mail, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()
  const { toast } = useToast()

  const EMAILJS_CONFIG = {
    serviceId: "service_mu1960v",
    templateId: "template_qe67fhm", 
    publicKey: "gLE1xvpjusIK1EdsF",
    destinationEmail: "gabruielange748@gmail.com",
  }

  // Initialisation d'EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Envoi avec EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: EMAILJS_CONFIG.destinationEmail,
          reply_to: formData.email,
        },
        EMAILJS_CONFIG.publicKey,
      )

      console.log("✅ Email envoyé avec succès :", result.status, result.text)

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      })

      // Reset du formulaire
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error: any) {
      console.error("❌ Erreur lors de l'envoi de l'email :", error)

      // Gestion d'erreur détaillée
      let errorMessage = "Une erreur est survenue lors de l'envoi du message."

      if (error.text) {
        errorMessage = `Erreur EmailJS: ${error.text}`
      } else if (error.message) {
        errorMessage = error.message
      }

      toast({
        title: "Erreur d'envoi",
        description: errorMessage + " Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
                <label htmlFor="name" className="block text-left text-sm font-medium mb-2 text-[#EAE8F3]">
                  Nom complet *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#2C2F33] border-[#A77B9E]/30 text-[#EAE8F3] placeholder:text-[#A77B9E]/60 focus:border-[#A77B9E]"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium mb-2 text-[#EAE8F3]">
                  {t("contact.email")} *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.email.placeholder")}
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#2C2F33] border-[#A77B9E]/30 text-[#EAE8F3] placeholder:text-[#A77B9E]/60 focus:border-[#A77B9E]"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-left text-sm font-medium mb-2 text-[#EAE8F3]">
                  Sujet *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-[#2C2F33] border-[#A77B9E]/30 text-[#EAE8F3] placeholder:text-[#A77B9E]/60 focus:border-[#A77B9E]"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium mb-2 text-[#EAE8F3]">
                  {t("contact.message")} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.message.placeholder")}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#2C2F33] border-[#A77B9E]/30 text-[#EAE8F3] placeholder:text-[#A77B9E]/60 focus:border-[#A77B9E] resize-none"
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#EAE8F3] text-[#000000] hover:bg-[#A77B9E] hover:text-[#EAE8F3] font-bold py-3 text-lg tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t("contact.send")}
                  </>
                )}
              </Button>
            </div>
          </form>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/AngeGabriel-rgb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#A77B9E] rounded-full flex items-center justify-center hover:bg-[#3A2A4E] transition-colors"
            >
              <Github className="w-6 h-6 text-[#EAE8F3]" />
            </a>
            <a
              href="https://x.com/Angelito452214"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#A77B9E] rounded-full flex items-center justify-center hover:bg-[#3A2A4E] transition-colors"
            >
              <Twitter className="w-6 h-6 text-[#EAE8F3]" />
            </a>
            <a
              href="https://www.linkedin.com/in/ange-gabriel-431aa636a/"
              target="_blank"
              rel="noopener noreferrer"
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
          </div>
        </div>
      </div>
    </section>
  )
}