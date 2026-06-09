GlobeWIAL — Global Portal
Multi-Role Web Portal for the World Institute for Action Learning
Live Demo: [Coming Soon] GitHub: https://github.com/sr2904/wial-global-portal Author: Shashwat Rao Balaji | Arizona State University | June 2026

What This Is
GlobeWIAL is a fully interactive multi-role web portal built for WIAL (World Institute for Action Learning) — a global non-profit that certifies Action Learning coaches across 20+ countries.

The portal serves 5 distinct user roles, each with a tailored dashboard, and includes a public-facing website, an AI-powered coach search, multilingual support, and a payments system — all in a single HTML/CSS/JS application with no backend required.

What It Does
Public Website:

Hero section with WIAL stats and calls to action
Coach directory with search, filter by country and certification level
Certification information (CALC, PALC, SALC, MALC)
Events calendar, resources library, client showcase, and contact form
Member Portal (5 roles):

Super Admin — global oversight, badge approvals, template pushes to all 9 chapters, revenue by chapter, analytics dashboard
Admin (Chapter Lead) — chapter site management, payment flow, email campaigns, event management, testimonials
Content Creator — editable content for assigned chapter pages, testimonials, events
Coach — coaching hours log, CE credit tracker, recertification application, job board, profile in directory
Client / Organisation — AI coach search, global map, coach matching, enrolment flow
AI Features:

Cross-lingual coach search — searches work in English, Portuguese, Spanish, French, and German
AI scoring engine ranks coaches by skill match, location, certification level, and rating
AI chat assistant for guided coach discovery
Smart matching with evidence-based explanations ("why matched")
Multilingual Support:

Full i18n for 5 languages: English, Portuguese, Spanish, French, German
Auto-detects language based on user role and country
Translate-to-English toggle for non-English pages
Dashboard UI labels localised per language
Accessibility:

Large text mode
Colour blind friendly mode
High contrast mode
Keyboard navigation mode with visible focus rings
Tech Stack
Layer	Technology
Language	HTML5, CSS3, Vanilla JavaScript
Fonts	Inter (UI), Playfair Display (headings) via Google Fonts
Maps	Custom SVG world map with interactive pins
Charts	Pure CSS/SVG — donut chart, bar chart, payment funnel
Payments	Stripe + PayPal flow (MVP demo)
i18n	Custom JS translation engine with longest-match replacement
Accessibility	CSS class-based a11y modes + ARIA attributes
Deployment	Static HTML — deployable anywhere
No frameworks. No build tools. No backend. Pure HTML, CSS, and JavaScript.

Roles & Features
Role	Key Features
Super Admin	Badge approvals, template push to all chapters, global analytics, revenue by chapter
Admin	Chapter site management, payment flow (UC4 dues system), email campaigns, events
Content Creator	Page editing for assigned chapter, testimonials, events
Coach	Hours log, CE credit tracker, recertification, job board, directory profile
Client	AI coach search, global map, smart matching, enrolment flow
Running Locally
No setup required. Just open the file:

# Clone the repo
git clone https://github.com/sr2904/wial-global-portal.git
cd wial-global-portal

# Open in browser
open wial-portal.html
Or simply drag wial-portal.html into any browser.

How to Use the Portal
Open wial-portal.html in a browser
Click Portal Login → in the top right
Select a role from the dropdown to explore that dashboard
Each role shows a different set of features and navigation
Recommended demo order:

Start as Client — try the AI coach search and global map
Switch to Coach — see the CE tracker and job board
Switch to Admin — explore the payment flow and email campaigns
Switch to Super Admin — see badge approvals and global analytics
File Structure
wial-global-portal/
├── wial-portal.html     — full application structure (public site + portal)
├── wial-portal.css      — design system, accessibility modes, responsive layout
├── wial-portal.js       — all logic: roles, AI search, i18n, map, payments, dashboard
└── README.md
Key Design Decisions
Single-file architecture — the entire portal runs from one HTML file with linked CSS and JS. No build step, no dependencies, deployable instantly to any static host.

Role-based rendering — instead of separate pages per role, the JS renders the correct dashboard dynamically based on login selection. Shared memory keeps state consistent.

AI without an API — the coach matching engine is a pure JS scoring function that weights skills, location, certification level, and ratings. It handles multilingual queries by mapping foreign-language terms to English equivalents before scoring.

Accessibility as a first-class feature — four a11y modes are toggleable at runtime via CSS class injection. No page reload needed.

i18n without a library — translations are stored as plain JS objects and applied via a tree-walking DOM function. Longest-match replacement ensures phrases translate before individual words.
