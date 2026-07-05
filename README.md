# Jack — 3D Creator Portfolio

A dark-themed, animation-rich portfolio landing page for a 3D creator, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero** — massive gradient headline, mouse-following magnetic portrait, staggered entrance animations
- **Marquee** — two rows of showcase GIFs that translate in opposite directions on scroll
- **About** — character-by-character scroll-reveal paragraph with floating 3D decorations
- **Services** — clean numbered list on a contrasting white panel
- **Projects** — sticky card-stacking effect where cards scale down as you scroll past

## Tech Stack

- [React 18](https://react.dev/) + TypeScript
- [Vite](https://vitejs.dev/) for build tooling
- [Tailwind CSS 3](https://tailwindcss.com/) with fluid `clamp()` typography
- [Framer Motion 12](https://www.framer.com/motion/) for scroll-driven and entrance animations
- [Lucide React](https://lucide.dev/) icon library
- Kanit font from Google Fonts (weights 300–900)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── components/       # Reusable building blocks
│   ├── AnimatedText.tsx   # Scroll-driven character reveal
│   ├── ContactButton.tsx  # Gradient pill CTA
│   ├── FadeIn.tsx         # Viewport-triggered entrance animation
│   ├── LiveProjectButton.tsx
│   └── Magnet.tsx         # Magnetic cursor-follow effect
├── sections/         # Page sections, in render order
│   ├── HeroSection.tsx
│   ├── MarqueeSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   └── ProjectsSection.tsx
├── App.tsx
├── main.tsx
└── index.css         # Global styles + .hero-heading gradient text
```
