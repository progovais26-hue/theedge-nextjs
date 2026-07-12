# TheEdge Media — Next.js Version

Original static HTML design ko Next.js 14 (App Router) + React mein 1:1 convert kiya gaya hai — same dark theme, orange (#f97316) accents, custom cursor, particle background, typewriter hero, scroll-reveal animations, aur animated counters, sab kuch component-based.

## Run karne ka tareeqa

```bash
npm install
npm run dev
```

Phir browser mein `http://localhost:3000` open karein.

Pehli baar `npm install` / `npm run dev` chalane par internet chahiye hoga kyunke Google Fonts (Barlow, Barlow Condensed) `next/font/google` ke zariye automatically fetch hote hain — is se koi extra setup nahi karna, bas normal internet connection kaafi hai.

## Project structure

```
app/
  layout.js        → fonts (next/font) + global metadata
  page.js           → sab sections ko assemble karta hai
  globals.css       → original CSS (as-is, sirf font-family ko CSS vars se replace kiya)
components/
  CustomCursor.jsx  → custom mouse cursor (ring + dot)
  ParticleField.jsx → canvas particle/fire background
  Reveal.jsx        → reusable scroll-reveal wrapper (IntersectionObserver)
  StatCounter.jsx   → animated number counters (Stats section)
  Navbar.jsx        → scroll-aware navbar
  Hero.jsx          → typewriter hero section
  Services.jsx
  Work.jsx
  Showreel.jsx
  Process.jsx
  Testimonials.jsx
  Contact.jsx
  Footer.jsx
```

## Notes

- Har section apna alag component hai — content (services, testimonials, work items, process steps) top of each file mein array ke through defined hai, isliye copy/edit karna aasan hai.
- Sab animations (cursor, particles, typewriter, reveal-on-scroll, counters) original vanilla JS se `useEffect`/`useRef` ke through React mein port ki gayi hain — behavior bilkul same hai.
- Contact form abhi sirf UI hai (original mein bhi koi backend/submit handler nahi tha) — jab chahen `Contact.jsx` mein `onSubmit` add kar ke apna form-handling (e.g. API route, Formspree, etc.) laga sakte hain.
- Design ko customize karna ho to `app/globals.css` hi single source of truth hai — colors, spacing, sab wahin hai jaise original file mein tha.
