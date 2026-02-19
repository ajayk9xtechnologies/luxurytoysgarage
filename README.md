# Luxury Toys Garage - Premium Exotic Car Repair Workshop Website

A production-grade Next.js website for Luxury Toys Garage, a premium exotic car repair workshop in Dubai.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Bootstrap 5.3** (Layout & UI components)
- **Lenis** (Smooth scroll)
- **GSAP + ScrollTrigger** (Scroll-driven animations & parallax)
- **Tailwind CSS** (Utility classes)

## Features

- 🎨 Dark luxury aesthetic with gold accents
- ✨ Smooth scroll animations with Lenis
- 🎬 GSAP ScrollTrigger animations
- 📱 Fully responsive design
- 🖱️ Custom animated cursor
- 🎭 Parallax effects on hero section
- 🎪 Auto-advancing hero slideshow
- 📋 FAQ accordion
- 🏷️ Brand showcase with hover effects

## Project Structure

```
luxurytoysgarage/
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── terms-and-conditions/
│   │   └── page.tsx        # Terms & Conditions page
│   └── privacy-policy/
│       └── page.tsx        # Privacy Policy page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero slideshow section
│   ├── About.tsx           # About Us section
│   ├── CTABanner.tsx       # CTA banner section
│   ├── Brands.tsx          # Brands showcase
│   ├── Services.tsx         # Services grid
│   ├── BodyShop.tsx        # Body shop services
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Footer.tsx          # Footer component
│   ├── CustomCursor.tsx    # Custom cursor component
│   ├── SmoothScrollProvider.tsx  # Lenis smooth scroll wrapper
│   └── BootstrapClient.tsx # Bootstrap JS initialization
├── lib/
│   └── brands.ts           # Brand data mapping
└── public/
    └── assets/
        ├── hero/           # Hero slideshow images (hero1-4.jpg)
        ├── brands/         # Brand logos (1-150x150.png through 18-150x150.png)
        ├── about/          # About section image (about-workshop.jpg)
        └── services/       # Service images (dent-removal.jpg, carbon-fibre.jpg, peelable-paint.jpg)
```

## Required Assets

Make sure the following images are placed in the `/public/assets/` directory:

### Hero Images (`/public/assets/hero/`)
- `hero1.jpg`
- `hero2.jpg`
- `hero3.jpg`
- `hero4.jpg`

### Brand Logos (`/public/assets/brands/`)
- `1-150x150.png` through `18-150x150.png`

### About Section (`/public/assets/about/`)
- `about-workshop.jpg`

### Services (`/public/assets/services/`)
- `dent-removal.jpg`
- `carbon-fibre.jpg`
- `peelable-paint.jpg`

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Design System

- **Primary Color (Dark)**: `#0A0A0A`
- **Accent Color (Gold)**: `#C9A84C`
- **Serif Font**: Cormorant Garamond
- **Sans-serif Font**: Montserrat

## Pages

- `/` - Homepage with all sections
- `/terms-and-conditions` - Terms & Conditions page
- `/privacy-policy` - Privacy Policy page

## Sections

1. **Hero** - Full-screen slideshow with parallax
2. **About Us** - Two-column layout with stats
3. **CTA Banner** - Service packages promotion
4. **Brands We Specialize** - 18 brand logos grid
5. **Services We Provide** - 6 service cards
6. **In-House Body Shop** - 3 body shop services
7. **FAQ** - Accordion with common questions
8. **Footer** - Contact information and links

## Customization

### Brand Mapping
Edit `/lib/brands.ts` to update brand names and image paths.

### Content
All content is editable directly in the component files.

### Colors
Update CSS variables in `/app/globals.css`:
- `--dark`: `#0A0A0A`
- `--gold`: `#C9A84C`

## License

© 2025 Luxury Toys Garage. All rights reserved.
