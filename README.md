# AscentCommerce — Amazon Growth Agency Website

A premium, light "daylight sky" marketing site for a full-service Amazon
agency, built with Next.js 14 (App Router) + TypeScript, Tailwind CSS,
Framer Motion, GSAP/ScrollTrigger, Lenis, and React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build && npm run start` for a
production build.

> Note: the heading font (Bricolage Grotesque) and body font (Inter) load
> from Google Fonts at build time via `next/font/google`, so an internet
> connection is required the first time you build.

## Project structure

```
app/
  layout.tsx        Root layout: fonts, Lenis provider, custom cursor
  page.tsx           Assembles all sections in order
  globals.css        Design tokens: glass panels, aurora blobs, cursor, scrollbar

components/
  sections/          One file per full-width page section (Navbar, Hero, ...)
  ui/                 Small reusable pieces (MagneticButton, TextReveal, Counter, AuroraBackground, CustomCursor)
  three/              React Three Fiber hero scene (dynamically imported, no SSR)

hooks/
  useMagnetic.ts      Magnetic pull-toward-cursor effect for buttons
  useTextReveal.ts    Word/char split + Framer Motion variants for mask reveals
  useParallax.ts      useScroll/useTransform helper for layered parallax

lib/
  SmoothScrollProvider.tsx   Lenis instance synced to GSAP ScrollTrigger
```

## How to swap content

### 1. Copy & headlines
Every section component (`components/sections/*.tsx`) keeps its copy in a
small array or inline JSX near the top of the file — e.g. `SERVICES` in
`BentoServices.tsx`, `STEPS` in `Process.tsx`, `CASES` in `Results.tsx`,
`QUOTES` in `Testimonials.tsx`, `TIERS` in `Pricing.tsx`, `FAQS` in
`FAQ.tsx`. Edit those arrays directly — no need to touch markup.

### 2. Brand name & logo
Update the "A" badge + "AscentCommerce" text in `Navbar.tsx` and
`Footer.tsx`. Replace the badge `<span>` with an `<Image>` if you have a
logo mark.

### 3. Colors
All brand colors are defined once in `tailwind.config.ts` under
`theme.extend.colors` (`sky`, `navy`, `amazon`) and as CSS custom
properties in `app/globals.css` (`--glass-bg`, `--glass-border`,
`--glass-shadow`). Change them there and every glass panel, button
gradient, and aurora blob updates automatically.

### 4. Fonts
Swap `Bricolage_Grotesque` / `Inter` in `app/layout.tsx` for any other
`next/font/google` pair, or use `next/font/local` if you have licensed
files for Clash Display / Satoshi (used in the original brief but not
distributed on Google Fonts).

### 5. Real photography
`WhyChooseUs.tsx` currently renders initials on a gradient card as team
photo placeholders, and `Results.tsx` uses gradient panels instead of
screenshots. Swap the placeholder `<div>` blocks for `next/image`
components pointing at `/public` assets — the glass frame and parallax
`style={{ y }}` binding around them will keep working unchanged.

### 6. Lottie animations
`lottie-react` is installed but no bundled `.json` files are included
(none were provided in the brief). Drop your exported Lottie JSON files
into `public/lottie/`, then in any component:

```tsx
import Lottie from 'lottie-react';
import growthIcon from '@/public/lottie/growth-arrow.json';

<Lottie animationData={growthIcon} loop autoplay className="h-10 w-10" />
```

Good places to add them: the icon slot in each `BentoServices` card, the
star row in `Testimonials.tsx`, and the floating shapes in
`FinalCTA.tsx`.

### 7. Pricing numbers & CTAs
`Pricing.tsx`'s `TIERS` array holds monthly/annual prices and feature
lists. `MagneticButton`'s `href` prop can be set on any button to link to
a real booking page (e.g. Calendly) instead of the default `onClick`.

### 8. Forms
The newsletter form in `Footer.tsx` is a plain `<form>` with
`preventDefault()` — wire its `onSubmit` up to your email provider (e.g.
a `/api/subscribe` route, Mailchimp, or ConvertKit) when ready.

## Design tokens reference

```css
/* Glass panel */
background: rgba(255,255,255,0.45);
backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.6);
box-shadow: 0 8px 32px rgba(56,166,240,0.15);

/* CTA gradient */
linear-gradient(135deg, #3AA6F0, #0284C7);

/* Amazon accent gradient (sparing use only) */
linear-gradient(135deg, #FF9900, #FFB347);
```

## Accessibility & performance notes

- All scroll-hijacking (Lenis) and scrub animations (GSAP ScrollTrigger,
  the `Process` pinned section) are skipped entirely when the OS-level
  `prefers-reduced-motion` setting is on.
- The custom cursor and 3D tilt effects are disabled on touch devices
  (`hover: none` / `pointer: coarse` media query) — native cursor and tap
  interactions are used instead.
- The Three.js hero scene and Lenis are dynamically imported / initialized
  client-side only (no SSR cost, no hydration mismatch).
- Keep the R3F scene's poly count low if you swap the abstract glass
  shards for a custom Amazon-box model — a single low-poly `.glb` under
  ~50k triangles keeps first paint fast on mobile.
