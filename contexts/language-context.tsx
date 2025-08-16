"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.about": "À propos",
    "nav.contact": "Contact",

    // Hero
    "hero.title.name": "ANGE GABRIEL",
    "hero.title.develop": "DEVELOPPEUR",
    "hero.title.web": "BACK-END",
    "hero.listening": "EN TRAIN D'ÉCOUTER",
    "hero.music": "Canon In D",

    // Projects
    "projects.title": "PROJETS",
    "projects.position": "POSIT",
    "projects.position.desc": "Développeur web créatif",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "projects.kreshop.desc": "Une plateforme de commerce électronique moderne avec gestion des produits, des utilisateurs et des commandes. Interface conviviale et responsive.",
    "projects.listepresence.desc": "Une API REST qui gère les enregistrements de présence, permettant aux utilisateurs de suivre et de mettre à jour facilement le statut de présence. Elle offre des points de terminaison pour créer, récupérer, mettre à jour et supprimer des informations de présence, garantissant ainsi une gestion efficace des données de présence.",
    "projects.pizzazasa.desc":"une plateforme de livraison de pizza avec gestion des commandes et des utilisateurs de libreville. Interface moderne et responsive.",
    "projects.foodfinder.desc":"Une plateforme qui permet aux utilisateurs de programmer leur anniversaires et de gerer les participants. Interface moderne et responsive.",
    "projects.mobile.desc": "Notre plateforme e-commerce avec gestion des produits, panier et paiement sécurisé. Design moderne et responsive.",
    "projects.outing.desc": "Une API RESTful pour gérer les anniversaires, les participants et les invitations. Conçue pour être utilisée avec notre plateforme anniversaire.",

// About
    "about.title": "À PROPOS",
    "about.who": "QUI SUIS-JE ?",
    "about.desc1":
"Je m'appelle KOUEVIDJIN ANGE GABRIEL. Je suis un développeur passionné par le web depuis quelques années. Ma vision s'est élargie lorsque j'ai suivi ma formation auprès de l'ONG Ogoue Labs. J'aspire à devenir un développeur qui ne code pas simplement par obligation, mais parce que c'est avant tout un état d'esprit, nourri par l'amour de ce métier.",
    "about.desc2":
      "Tout au long de ma formation, mon expérience a été propulsée par ma passion pour le développement back-end, notamment la création de bases de données, d'API et de serveurs. Par la suite, j'ai élargi mes compétences vers le développement front-end pour concevoir des interfaces et utiliser des frameworks full stack.",
    "about.desc3":
      "En résumé, j'aimerais devenir un développeur expérimenté et, pourquoi pas, full stack. ",

    // Skills
    "skills.title": "Mes Compétences",
    "skills.experience": "Mon Expérience",
    "skills.frontend": "Développement Frontend",
    "skills.backend": "Développement Backend ",

    // Contact
    "contact.title": "CONTACT",
    "contact.question": "Une requête ?",
    "contact.cta": "Contactez-moi !",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "ENVOYER",
    "contact.email.placeholder": "votre.email@exemple.com",
    "contact.message.placeholder": "Votre message...",

    // Footer
    "footer.rights": "2025. Tous droits réservés.",
    "footer.skills": "Compétences",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.title.name": "ANGE GABRIEL",
    "hero.title.develop": "DEVELOPER",
    "hero.title.web": "BACK-END",
    "hero.listening": "NOW LISTENING",
    "hero.music": "Canon In D ",

   // Projects
"projects.title": "PROJECTS",
"projects.position": "POSITION",
"projects.position.desc": "Creative web developer",
"projects.code": "Code",
"projects.demo": "Demo",
"projects.kreshop.desc":"A modern e-commerce platform with product, user, and order management. User-friendly and responsive interface.",
"projects.listepresence.desc": "A REST API that manages attendance records, allowing users to easily track and update presence status. It provides endpoints for creating, retrieving, updating, and deleting attendance information, ensuring efficient management of attendance data.",
"projects.pizzazasa.desc": "A pizza delivery platform with order and user management. Modern and responsive interface.",
"projects.foodfinder.desc": "A platform that allows users to schedule their birthdays and manage participants. Modern and responsive interface.",
"projects.mobile.desc": "Our e-commerce platform with product management, cart, and secure payment. Modern and responsive design.",
"projects.outing.desc": "A RESTful API for managing birthdays, participants, and invitations. Designed to be used with our birthday platform.",
   // About
"about.title": "ABOUT",
"about.who": "WHO AM I?",
"about.desc1":
  "My name is KOUEVIDJIN ANGE GABRIEL. I am a web developer passionate about the field for a few years now. My vision expanded when I underwent training with the NGO Ogoue Labs. I aspire to become a developer who codes not just out of obligation, but because it is fundamentally a mindset, driven by a love for the profession.",
"about.desc2":
  "Throughout my training, my experience has been propelled by my passion for back-end development, particularly in creating databases, APIs, and servers. Subsequently, I have broadened my skills to front-end development to design interfaces and utilize full stack frameworks.",
"about.desc3":
  "In summary, I would like to become an experienced developer and, why not, a full stack developer.",
    // Skills
    "skills.title": "What Skills I Have",
    "skills.experience": "My Experience",
    "skills.frontend": "Frontend Development",
    "skills.backend": "Backend Development ",

    // Contact
    "contact.title": "CONTACT",
    "contact.question": "Got a request?",
    "contact.cta": "Contact me!",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "SEND",
    "contact.email.placeholder": "your.email@example.com",
    "contact.message.placeholder": "Your message...",

    // Footer
    "footer.rights": "2025. All rights reserved.",
    "footer.skills": "Skills",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
