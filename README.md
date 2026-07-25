# DETTROIN Full Stack Developer Internship — Round 1 Submission

## Candidate Details

| Field | Value |
|---|---|
| **Full Name** | Dolby Shekhar |
| **Intern ID** | *[ADD YOUR INTERN ID HERE — check your shortlisting email]* |
| **Email Address** | dolbyshekhar21@gmail.com |
| **GitHub Username** | [Dolby-Shekhar](https://github.com/Dolby-Shekhar) |
| **Selected Website** | [Excellence International School](https://excellenceinternationalschool.com/) |
| **Live Demo Link** | *[ADD YOUR VERCEL DEPLOYMENT URL HERE AFTER DEPLOYING]* |

---

## Technologies Used

- **HTML5** — semantic markup, no framework
- **CSS3** — custom properties (design tokens), CSS Grid, Flexbox, no preprocessor
- **Vanilla JavaScript (ES6)** — no libraries or frameworks
- **Google Fonts** — Fraunces, Work Sans, Space Mono
- **Git & GitHub** — version control
- **Vercel** — deployment

No build tooling, no `node_modules`, no framework dependencies — deliberately kept as a static site so performance and code are easy to audit directly.

---

## Key Improvements Made

The original site is a generic template: default carousel hero, no typographic hierarchy, no intentional motion, weak information architecture, and no distinct visual identity.

### 1. Custom design system
A five-color token palette (`Paper`, `Ink`, `Chalkboard`, `Marigold`, `Notebook Blue`) with a matching type system (Fraunces for display, Work Sans for body, Space Mono for labels/data) — deliberately avoiding generic AI-template defaults (cream+serif+terracotta, black+neon, hairline broadsheet grids).

### 2. Signature UX element — "The Growth Ruler"
The four academic stages (Pre-Primary → Primary → Middle, with Daycare running alongside) sit on a single vertical timeline that fills in and lights up tick marks as you scroll — a real structural device tied to the school's actual Play Group → Class 8 progression, not decorative.

### 3. Responsive design
Tested and rebuilt at mobile (375px), tablet (768px), and desktop (1440px) breakpoints. Sections that would previously rely on hidden horizontal scroll (Life at School, Testimonials) were rebuilt as responsive CSS Grid so all content is visible without hidden interaction at any screen size.

### 4. Accessibility
Skip-to-content link, visible `:focus-visible` states on every interactive element, `aria-label`/`aria-expanded` on nav and FAQ, semantic landmarks, and full `prefers-reduced-motion` support that disables all scroll animation.

### 5. Navigation & IA
Sticky header with active-link highlighting as you scroll, mobile drawer nav with animated hamburger icon, clear single CTA path from hero through to the enquiry form.

### 6. Performance
Zero frameworks or build step, two font requests total, ~100 lines of dependency-free JavaScript, no render-blocking scripts (deferred).

### 7. Code quality & structure
Split into `index.html` / `css/style.css` / `js/main.js` instead of one inline file, CSS organized top-to-bottom in page order with a token system at the top, JS wrapped in an IIFE with clearly separated concerns (nav, FAQ, scroll-reveal, form).

---

## Project Structure

```
DETTROIN-INT-Dolby-Website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
└── README.md
```

## Running Locally

```bash
git clone https://github.com/Dolby-Shekhar/DETTROIN-INT-Dolby-Website.git
cd DETTROIN-INT-Dolby-Website
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deployment

Deployed on **Vercel** as a static site (no build command needed — framework preset: "Other").
