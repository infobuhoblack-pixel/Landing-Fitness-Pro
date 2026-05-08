import { Lang } from "./i18n";
import heroImg from "@/assets/hero-fitness.jpg";
import galleryWorkout from "@/assets/gallery-workout.jpg";
import galleryTransform from "@/assets/gallery-transform.jpg";
import galleryNutrition from "@/assets/gallery-nutrition.jpg";

type T = Record<Lang, string>;

export interface SiteContent {
  hero: { title: T; subtitle: T; cta: T; ctaUrl: string; image: string };
  benefits: Array<{ icon: string; title: T; description: T }>;
  programs: Array<{ name: T; price: string; features: T; cta: T; ctaUrl: string; highlighted: boolean }>;
  gallery: Array<{ src: string; alt: string }>;
  testimonials: Array<{ name: string; initials: string; text: T; rating: number }>;
  faq: Array<{ question: T; answer: T }>;
  ctaFinal: { title: T; subtitle: T; cta: T; ctaUrl: string };
  footer: { email: string; phone: string; instagram: string; facebook: string; youtube: string };
}

export const defaultContent: SiteContent = {
  hero: {
    title: {
      es: "Transforma tu cuerpo en 90 días",
      en: "Transform your body in 90 days",
      fr: "Transforme ton corps en 90 jours",
    },
    subtitle: {
      es: "Entrenamiento + nutrición + resultados reales",
      en: "Training + nutrition + real results",
      fr: "Entraînement + nutrition + résultats réels",
    },
    cta: { es: "Empieza ahora", en: "Start now", fr: "Commence maintenant" },
    ctaUrl: "#contacto",
    image: heroImg,
  },
  benefits: [
    {
      icon: "Zap",
      title: { es: "Resultados rápidos", en: "Fast results", fr: "Résultats rapides" },
      description: {
        es: "Notarás cambios desde la primera semana con nuestro método probado.",
        en: "You'll notice changes from the first week with our proven method.",
        fr: "Tu remarqueras des changements dès la première semaine.",
      },
    },
    {
      icon: "Target",
      title: { es: "Entrenamiento personalizado", en: "Personalized training", fr: "Entraînement personnalisé" },
      description: {
        es: "Cada plan se adapta a tu nivel, objetivos y disponibilidad.",
        en: "Each plan adapts to your level, goals, and availability.",
        fr: "Chaque plan s'adapte à ton niveau et tes objectifs.",
      },
    },
    {
      icon: "TrendingUp",
      title: { es: "Seguimiento profesional", en: "Professional tracking", fr: "Suivi professionnel" },
      description: {
        es: "Acompañamiento constante para garantizar tu progreso.",
        en: "Constant support to guarantee your progress.",
        fr: "Accompagnement constant pour garantir ta progression.",
      },
    },
  ],
  programs: [
    {
      name: { es: "Plan Básico", en: "Basic Plan", fr: "Plan Basique" },
      price: "€49/mes",
      features: {
        es: "Rutina personalizada\nGuía nutricional\nSoporte por email",
        en: "Custom routine\nNutritional guide\nEmail support",
        fr: "Routine personnalisée\nGuide nutritionnel\nSupport email",
      },
      cta: { es: "Elegir plan", en: "Choose plan", fr: "Choisir le plan" },
      ctaUrl: "#contacto",
      highlighted: false,
    },
    {
      name: { es: "Plan Avanzado", en: "Advanced Plan", fr: "Plan Avancé" },
      price: "€89/mes",
      features: {
        es: "Todo del básico\nVideollamadas semanales\nAjustes mensuales\nAcceso a comunidad",
        en: "Everything in basic\nWeekly video calls\nMonthly adjustments\nCommunity access",
        fr: "Tout du basique\nAppels vidéo hebdomadaires\nAjustements mensuels\nAccès communauté",
      },
      cta: { es: "Elegir plan", en: "Choose plan", fr: "Choisir le plan" },
      ctaUrl: "#contacto",
      highlighted: true,
    },
    {
      name: { es: "Plan Premium", en: "Premium Plan", fr: "Plan Premium" },
      price: "€149/mes",
      features: {
        es: "Todo del avanzado\nCoach personal 24/7\nPlan de suplementación\nAcceso VIP",
        en: "Everything in advanced\nPersonal coach 24/7\nSupplementation plan\nVIP access",
        fr: "Tout de l'avancé\nCoach personnel 24/7\nPlan de supplémentation\nAccès VIP",
      },
      cta: { es: "Elegir plan", en: "Choose plan", fr: "Choisir le plan" },
      ctaUrl: "#contacto",
      highlighted: false,
    },
  ],
  gallery: [
    { src: galleryWorkout, alt: "Workout" },
    { src: galleryTransform, alt: "Transformation" },
    { src: galleryNutrition, alt: "Nutrition" },
  ],
  testimonials: [
    {
      name: "Carlos M.",
      initials: "CM",
      text: {
        es: "En 3 meses perdí 15kg y gané masa muscular. El mejor programa que he seguido.",
        en: "In 3 months I lost 15kg and gained muscle mass. The best program I've followed.",
        fr: "En 3 mois j'ai perdu 15kg et gagné de la masse musculaire.",
      },
      rating: 5,
    },
    {
      name: "María L.",
      initials: "ML",
      text: {
        es: "El seguimiento personalizado marca la diferencia. Me siento más fuerte que nunca.",
        en: "The personalized follow-up makes the difference. I feel stronger than ever.",
        fr: "Le suivi personnalisé fait la différence. Je me sens plus forte que jamais.",
      },
      rating: 5,
    },
    {
      name: "David R.",
      initials: "DR",
      text: {
        es: "Profesionalismo total. Los resultados hablan por sí solos.",
        en: "Total professionalism. The results speak for themselves.",
        fr: "Professionnalisme total. Les résultats parlent d'eux-mêmes.",
      },
      rating: 5,
    },
  ],
  faq: [
    {
      question: {
        es: "¿Cuánto tiempo tardo en ver resultados?",
        en: "How long until I see results?",
        fr: "Combien de temps pour voir des résultats?",
      },
      answer: {
        es: "La mayoría de nuestros clientes notan cambios visibles en las primeras 3-4 semanas siguiendo el plan.",
        en: "Most clients see visible changes within the first 3-4 weeks following the plan.",
        fr: "La plupart des clients voient des changements visibles en 3-4 semaines.",
      },
    },
    {
      question: {
        es: "¿Necesito ir al gimnasio?",
        en: "Do I need a gym?",
        fr: "Ai-je besoin d'une salle de sport?",
      },
      answer: {
        es: "No necesariamente. Adaptamos las rutinas a tu equipamiento, ya sea casa o gimnasio.",
        en: "Not necessarily. We adapt routines to your equipment, home or gym.",
        fr: "Pas nécessairement. Nous adaptons les routines à ton équipement.",
      },
    },
    {
      question: {
        es: "¿Puedo cancelar en cualquier momento?",
        en: "Can I cancel anytime?",
        fr: "Puis-je annuler à tout moment?",
      },
      answer: {
        es: "Sí, sin compromiso. Puedes cancelar tu plan cuando quieras.",
        en: "Yes, no commitment. Cancel anytime.",
        fr: "Oui, sans engagement. Annule quand tu veux.",
      },
    },
  ],
  ctaFinal: {
    title: {
      es: "Empieza tu transformación hoy",
      en: "Start your transformation today",
      fr: "Commence ta transformation aujourd'hui",
    },
    subtitle: {
      es: "No esperes más. Tu mejor versión te está esperando.",
      en: "Don't wait. Your best version is waiting.",
      fr: "N'attends plus. Ta meilleure version t'attend.",
    },
    cta: { es: "Contactar por WhatsApp", en: "Contact via WhatsApp", fr: "Contacter par WhatsApp" },
    ctaUrl: "https://wa.me/34600000000",
  },
  footer: {
    email: "info@fitnesspro.com",
    phone: "+34 600 000 000",
    instagram: "https://instagram.com/fitnesspro",
    facebook: "https://facebook.com/fitnesspro",
    youtube: "https://youtube.com/fitnesspro",
  },
};
