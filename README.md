# AtlasCybera — Site React

Recréation du site AtlasCybera (cybersécurité & infrastructure IT), avec chaque
section/page découpée en composant séparé.

## Structure

```
src/
  data.js                  → tout le contenu texte (nav, services, stats, etc.)
  App.jsx                  → assemble toutes les sections dans l'ordre
  main.jsx                 → point d'entrée React
  index.css                → Tailwind
  components/
    Logo.jsx
    Buttons.jsx             (GradientButton, OutlineButton)
    SectionEyebrow.jsx
    HeroArt.jsx             (illustration SVG du bouclier)
    Navbar.jsx               → barre de navigation
    Hero.jsx                 → section d'accueil "Protégez. Optimisez..."
    FeatureBar.jsx           → bandeau des 4 avantages
    Services.jsx             → "Nos Services" (4 cartes)
    Stats.jsx                → bandeau chiffres (120+, 98%, 99.9%, 15+)
    WhyUs.jsx                → "Qui Sommes-Nous ?" (texte réel onboarding)
    Solutions.jsx            → "Notre Domaine d'Expertise" (4 domaines réels)
    Team.jsx                 → CEO + Core Team (organigramme réel)
    CTA.jsx                  → appel à l'action final
    Footer.jsx                → pied de page (contact réel)
```

## Contenu mis à jour depuis la présentation Onboarding

- Section **Qui Sommes-Nous ?** : texte exact de la présentation.
- Section **Notre Domaine d'Expertise** : Cybersécurité, Cloud & DevOps,
  Network Operations and Support, Supervision & Monitoring IT.
- Section **Notre Équipe** : Mohamed Benaoud Tlemsani (CEO & Founder),
  Safaa Farid (HR Lead), Mourad Dafralah (Sales Lead), Abdelmalik Zouiten
  (Network Operations Manager), Rabii Salmi (Cyber Défense Manager), plus
  les postes encore à pourvoir (Growth Marketer, Business Analyst, Cloud &
  DevOps Manager, NOC Manager).
- Toutes ces données sont centralisées dans `src/data.js` — modifie-les à
  un seul endroit pour les répercuter partout sur le site.

## Installation

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:5173

## Build production

```bash
npm run build
```
