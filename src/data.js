import {
  Shield,
  Rocket,
  Cloud,
  Headphones,
  Server,
  Activity,
  Users,
  ShieldCheck,
  Clock,
  Award,
  Lock,
  Network as NetworkIcon,
  Monitor,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "ACCUEIL", href: "#accueil" },
  { label: "SERVICES", href: "#services" },
  { label: "SOLUTIONS", href: "#solutions" },
  { label: "À PROPOS", href: "#apropos" },
  { label: "BLOG", href: "#blog" },
];

export const FEATURES = [
  {
    icon: Shield,
    title: "SÉCURITÉ AVANCÉE",
    desc: "Protégez vos données et systèmes contre les menaces.",
  },
  {
    icon: Rocket,
    title: "PERFORMANCE OPTIMISÉE",
    desc: "Des infrastructures rapides et fiables.",
  },
  {
    icon: Cloud,
    title: "ÉVOLUTIVITÉ GARANTIE",
    desc: "Des solutions qui grandissent avec votre entreprise.",
  },
  {
    icon: Headphones,
    title: "SUPPORT 24/7",
    desc: "Une équipe d'experts disponible à tout moment.",
  },
];

export const SERVICES = [
  {
    icon: Shield,
    title: "SÉCURITÉ INFORMATIQUE",
    desc: "Audit, gestion des vulnérabilités, pare-feu, protection des données.",
  },
  {
    icon: Server,
    title: "INFRASTRUCTURE IT",
    desc: "Conception, déploiement et maintenance d'infrastructures haute performance.",
  },
  {
    icon: Cloud,
    title: "CLOUD & VIRTUALISATION",
    desc: "Solutions cloud sécurisées et flexibles pour votre activité.",
  },
  {
    icon: Activity,
    title: "SUPERVISION & MONITORING",
    desc: "Surveillance en temps réel pour assurer la disponibilité de vos systèmes.",
  },
];

export const STATS = [
  { icon: Users, value: "120+", label: "Clients satisfaits" },
  { icon: ShieldCheck, value: "98%", label: "Taux de sécurité" },
  { icon: Clock, value: "99.9%", label: "Disponibilité garantie" },
  { icon: Award, value: "15+", label: "Années d'expertise" },
];

/* "Notre domaine d'expertise" — repris tel quel de la présentation onboarding */
export const SOLUTIONS = [
  {
    icon: Lock,
    title: "CYBERSÉCURITÉ",
    desc: "Protection proactive, détection des menaces et réponse rapide aux incidents.",
  },
  {
    icon: Cloud,
    title: "CLOUD & DEVOPS",
    desc: "Architectures cloud modernes et automatisation des déploiements.",
  },
  {
    icon: NetworkIcon,
    title: "NETWORK OPERATIONS AND SUPPORT",
    desc: "Conception, exploitation et support des infrastructures réseau d'entreprise.",
  },
  {
    icon: Monitor,
    title: "SUPERVISION & MONITORING IT",
    desc: "Surveillance continue et pilotage de la disponibilité de vos systèmes.",
  },
];

/* Section "Qui sommes-nous ?" — texte repris de la présentation onboarding */
export const ABOUT = {
  eyebrow: "QUI SOMMES-NOUS",
  title: "Qui Sommes-Nous ?",
  paragraphs: [
    "AtlasCybera est une startup spécialisée en cybersécurité et ingénierie des réseaux, dédiée à la conception de solutions IT sécurisées, performantes et évolutives.",
    "Nous accompagnons nos clients de l'analyse des besoins jusqu'à la mise en œuvre opérationnelle, en combinant expertise technique, innovation et vision stratégique.",
    "Notre approche repose sur des standards élevés en matière de sécurité, de performance et de fiabilité, afin de garantir des infrastructures robustes et adaptées aux exigences d'un environnement numérique en constante évolution.",
  ],
};

export const CORE_VALUES = [
  "Solutions en réseau et cybersécurité, conseil et surveillance 24/7",
  "Pour entreprises de toutes tailles",
  "Expertise technique et stratégie combinées",
  "Protection proactive et réponse rapide aux incidents",
];

export const CEO = {
  name: "Mohamed Benaoud Tlemsani",
  role: "CEO & Founder",
  email: "Benaoudtlemsanimohamed@atlascybera.com",
};

/* Organigramme — repris de la présentation onboarding */
export const TEAM = [
  { name: "Safaa Farid", role: "HR Lead" },
  { name: "Mourad Dafralah", role: "Sales Lead" },
  { name: "Abdelmalik Zouiten", role: "Network Operations Manager" },
  { name: "Rabii Salmi", role: "Cyber Défense Manager" },
];

export const OPEN_ROLES = [
  "Growth Marketer",
  "Business Analyst",
  "Cloud & DevOps Manager",
  "NOC Manager",
];

export const CONTACT = {
  address: "Casablanca, Maroc",
  phone: "+212 5 00 00 00 00",
  email: "contact@atlascybera.com",
};
