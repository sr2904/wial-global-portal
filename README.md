# GlobeWIAL — Global Portal

<div align="center">

**A fully interactive multi-role web portal for the World Institute for Action Learning**

[![GitHub](https://img.shields.io/badge/GitHub-sr2904%2Fwial--global--portal-blue?logo=github)]([https://github.com/sr2904/wial-global-portal](https://2026-asu-wics-opportunity-hack.github.io/14-quadcoders/))
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

</div>

---

## What This Is

GlobeWIAL is a fully interactive multi-role web portal for **WIAL (World Institute for Action Learning)** — a global non-profit that certifies Action Learning coaches across 20+ countries.

The portal serves **5 distinct user roles**, each with a tailored dashboard. It includes a public-facing website, AI-powered coach search, multilingual support in 5 languages, and a payments system — all in a single HTML/CSS/JS application with no backend required.

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    wial-portal.html                     │
│              (Public Site + Portal Shell)               │
└────────────┬────────────────────────┬───────────────────┘
             │                        │
             ▼                        ▼
┌────────────────────┐    ┌───────────────────────────────┐
│   Public Website   │    │        Member Portal          │
│                    │    │                               │
│  • Hero Section    │    │  Role selected at login       │
│  • Coach Directory │    │  → Dashboard renders          │
│  • Certification   │    │    dynamically per role       │
│  • Events          │    │                               │
│  • Resources       │    │  Shared state via JS objects  │
│  • Contact         │    │  No page reloads needed       │
└────────────────────┘    └───────────────────────────────┘
```

---

## The 5 Roles

```
Login → Select Role
            │
            ├──► 🔑 Super Admin
            │         Global badge approvals
            │         Template push to all 9 chapters
            │         Revenue by chapter + analytics
            │
            ├──► 🏢 Admin (Chapter Lead)
            │         Chapter site management
            │         UC4 payment flow + dues tracking
            │         Email campaigns + events
            │
            ├──► 📝 Content Creator
            │         Edit assigned chapter pages
            │         Manage testimonials + events
            │
            ├──► 🎓 Coach
            │         Coaching hours log
            │         CE credit tracker + recertification
            │         Job board + directory profile
            │
            └──► 💼 Client / Organisation
                      AI coach search (multilingual)
                      Interactive global map
                      Smart matching + enrolment flow
```

---

## AI Coach Search Flow

```
User types query (any language)
        │
        ▼
┌───────────────────────┐
│   Language Normaliser │  "liderança Brasil" → "leadership brazil"
│   (mlMap dictionary)  │  "führung" → "leadership"
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│    AI Scoring Engine  │  Weights: skills (+30), location (+25),
│    (aiSc function)    │  certification (+40), sector (+20), rating (+2×)
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│   Ranked Results      │  Top matches with % score + "why matched" reason
│   + Map Pin Update    │  Country pins update with match counts
└───────────────────────┘
```

---

## Multilingual Support

```
User logs in
     │
     ├── Role = Client  →  Uses prefLang (selected at login)
     └── Role = Other   →  Uses CC[country].lang (auto from chapter)
              │
              ▼
     curLocale() → "en" | "pt" | "es" | "fr" | "de"
              │
              ▼
     applyTranslations()        ← Public site headings/buttons
     localizeRenderedContent()  ← Dashboard labels via DOM tree walk
              │
              ▼
     Translate bar appears for non-English pages
     → One click to force English
```

---

## Features at a Glance

| Feature | Details |
|---|---|
| **Roles** | 5 roles, each with unique nav + dashboard |
| **AI Search** | Cross-lingual scoring engine, no external API |
| **Languages** | English, Portuguese, Spanish, French, German |
| **Map** | Custom SVG world map, interactive country pins |
| **Accessibility** | 4 modes: large text, colour blind, high contrast, keyboard |
| **Payments** | Stripe + PayPal demo flow (UC4 dues system) |
| **Charts** | Donut chart, bar chart, payment funnel — pure CSS/SVG |
| **Certification** | CALC → PALC → SALC → MALC — full recertification flow |
| **CE Tracker** | Credit logging, progress bar, deadline reminders |
| **Job Board** | Coaching roles with certification requirements |
| **Forums** | Member discussion threads with filters |
| **Email** | Campaign templates with subscriber stats |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 — custom design system with CSS variables |
| Logic | Vanilla JavaScript — zero dependencies |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Maps | Custom SVG with JS-driven interactive pins |
| Charts | Pure CSS/SVG — no chart libraries |
| i18n | Custom JS translation engine |
| Accessibility | CSS class injection + ARIA attributes |
| Payments | Stripe + PayPal demo (no live checkout) |
| Deployment | Static — runs in any browser, no server needed |

**No frameworks. No build tools. No backend. No npm install.**

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/sr2904/wial-global-portal.git
cd wial-global-portal

# Open in browser (Mac)
open wial-portal.html

# Or just drag wial-portal.html into any browser
```

---

## How to Demo

1. Open `wial-portal.html` in a browser
2. Click **Portal Login →** in the top right
3. Select a role and click **Sign In to Dashboard**

**Recommended demo order:**

| Step | Role | What to show |
|---|---|---|
| 1 | Client | AI coach search — type "liderança Brasil" and watch it match |
| 2 | Client | Click a country pin on the global map |
| 3 | Coach | CE credit tracker + recertification modal |
| 4 | Admin | Payment flow — UC4 dues system |
| 5 | Super Admin | Badge approvals + push template to all chapters |

---

## File Structure

```
wial-global-portal/
├── wial-portal.html    — full app structure (public site + portal shell)
├── wial-portal.css     — design system, a11y modes, responsive layout
├── wial-portal.js      — all logic: roles, AI, i18n, map, payments
└── README.md
```

---

## Key Design Decisions

**Single-file architecture** — the entire portal runs from 3 linked files. No build step, no dependencies, deployable instantly to any static host including GitHub Pages.

**Role-based rendering** — instead of separate pages per role, JS renders the correct dashboard dynamically based on login selection. This keeps the codebase unified and state consistent.

**AI without an API** — the coach matching engine is a pure JS scoring function. Multilingual queries are handled by mapping foreign-language terms to English before scoring — no external API call needed.

**Accessibility as first-class** — four a11y modes are toggleable at runtime via CSS class injection with no page reload.

**i18n without a library** — translations live in plain JS objects. A DOM tree-walking function applies them after every render, using longest-match replacement to handle phrases before individual words.
