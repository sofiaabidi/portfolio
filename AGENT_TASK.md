# CODING AGENT HANDOFF — Sofia Abidi Portfolio (Combined Phases 1 + 2)

**Task:** Personalize the existing portfolio repository for Sofia Abidi while retaining its visual identity, and make the code ready for future project screenshots. Implement and verify the site; do **not** stop after writing a plan.

**Inputs expected in this repository:**
- Existing checked-out portfolio repository (original uploaded archive was `portfolio-main.zip`).
- `public/resume/Sofia_Abidi_Resume.pdf` — Sofia's August 2026 résumé, to use as a factual source **and** downloadable résumé. If missing, do not invent a PDF: proceed with the factual profile below, make the missing asset clear in the handoff, and avoid a broken download link.
- Optionally, `public/projects/<project-slug>/...` containing authentic screenshots/diagrams. These may be **absent during this run**.

## Non-negotiable constraints

1. **Preserve the current aesthetic**: warm cream background, exact existing orange/coral/yellow/mint/lilac palette, Playfair/DM Sans/Space Mono typography, sharp black outlines, offset shadows, card dimensions/patterns as far as practical, icon styles, nav layout, ticker strips, responsive behavior, transitions/animations. **Do not redesign, recolor, modernize, or replace this with generic AI-portfolio visuals.** Keep the visual appearance as close as reasonably possible to the baseline screenshots / working site.
2. **Content-first, limited structural edits.** Modify/reuse existing components and the established `?view=` / `?id=` navigation rather than migrating the app or creating a different template. Necessary exceptions: authentic Beyond-the-Code feature instead of a testimonial; proper blog reading experience; optional project images; accurate education/experience representation; reliable contact form behavior.
3. **Do not fabricate** roles, academic degrees, internship employers, project dates, client relationships, certifications, published articles, users, usage statistics, production deployments, test results, publication dates or endorsements. When a claim is unverified, use modest text or note it in the handoff; never show `[TBD]`, invented figures or a fake badge to public visitors.
4. Keep **TraffIQ, Exoplanet Detection Pipeline, Parichay** as the exact first three **Featured Projects**, in that order, with their existing position-specific lilac, orange and coral styling. All six projects should appear in Projects.
5. Do not publish Sofia's **phone number on the website**. Use her publicly supplied email, GitHub and LinkedIn details below. Note: her original résumé PDF might contain the number and the downloadable PDF is public; do not silently alter résumé content.
6. Respect the **original MIT license**: keep `LICENSE` and its copyright notice intact. Original-owner profile copy and metadata should be removed everywhere outside the license file.
7. Do not assume optional screenshots are present. Missing images must not render broken thumbnails or placeholders pretending to be real media; retain the existing attractive icon-on-color cards.
8. Aim for a **complete, professional student portfolio**, not a corporate-executive portfolio. Natural and precise writing; no generic AI hype. Keep card copy short enough for the existing layouts and mobile screens.

## 0. Inspect before editing (briefly)

Read `README.md`, `package.json`, `src/lib/portfolio-data.ts`, `src/components/portfolio/*-view.tsx`, `navbar.tsx`, `footer.tsx`, `use-view-nav.ts`, `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`, `structured-data.tsx`, `src/lib/icon-map.tsx`, `scripts/` (icons/favicon/OG), and `public/`.

Relevant original implementation details:
- Next.js **16.1.1**, TypeScript, React 19, Tailwind CSS 4, Framer Motion 12.
- Main content data in `src/lib/portfolio-data.ts`; **some very visible copy is hardcoded** in page components, so changing only the data file is insufficient.
- The original uses query parameters such as `?view=projects`, `?view=project&id=...` for navigation. Preserve existing deep-link behavior and Back / forward interaction.
- `src/components/portfolio/use-experience.ts` computes the original owner's job tenure using `careerStartDate` and overrides some stats. **Remove or bypass this original-owner-specific professional-experience behavior**, not by substituting a fictitious student job start date.
- The original `ContactView` simulates a **successful form submission in demo mode**, even when no Web3Forms key exists. **Do not leave a misleading fake-success flow.**
- Original `package.json` scripts use Unix-specific `tee` and `cp`, problematic on Windows PowerShell. Adjust dev/build/start scripts to Windows-friendly, Vercel-compatible commands without unnecessary dependencies. The current `next.config.ts` has `output: 'standalone'` and `typescript.ignoreBuildErrors: true`; rationalize these settings if necessary. Ensure TypeScript errors are not hidden by a nominally successful build.

## 1. Portfolio identity — shared data and brand

**Name:** Sofia Abidi  
**Monogram:** SA (instead of MN)  
**Short role:** Computer Engineering Student · VJTI  
**Education:** Third-year BTech Computer Engineering, Veermata Jijabai Technological Institute (VJTI), Matunga, Mumbai (Aug 2024–present; résumé dated Aug 2026).  
**Location:** Thane, India (do not expose precise address)  
**CGPA:** 9.69/10 (VJTI)  
**Email:** `sofiaabidi2005@gmail.com`  
**LinkedIn:** `https://linkedin.com/in/sofia-abidi`  
**GitHub:** `https://github.com/sofiaabidi`  
**Résumé path:** `/resume/Sofia_Abidi_Resume.pdf`  
**Résumé download filename:** `Sofia_Abidi_Resume.pdf`  
**Phone on website:** OMIT.  
**Public site URL:** unknown until deployment; use `NEXT_PUBLIC_SITE_URL` when provided. For local fallback use a safe local URL for metadata (`http://localhost:3000`) rather than retaining the previous owner's deployment URL or inventing Sofia's deployed domain.

Navigation must remain: **Home | About | Projects | Writing | Experience | Contact | Resume** (small wording changes on page headings permitted). Keep active states.

Search and replace stale owner-related **visible or SEO content**: previous-owner names, company claims, old stats, social links, phone, résumé, sitemap/robots URLs, JSON-LD handles, page metadata/OG, webmanifest, favicon/monogram and footer. Keep the legal copyright notice in `LICENSE` intact. Remove old personal Google verification files/tokens and disable old analytics; only activate analytics when configured with Sofia's own ID.

## 2. HOME — retain every major component

### 2A. Navbar and hero

Keep the current responsive header, cream hero, orange highlighting, heart motif, CTA buttons and profile-card stickers.

Suggested hero copy (fit the existing 2-column layout; tighten if needed without changing its meaning):

- Mint availability badge: **OPEN TO LEARNING & OPPORTUNITIES**.
- Main line: **Hi, I'm Sofia Abidi <3** (highlight `Sofia` in the same original orange treatment).
- Highlighted headline: **I build intelligent systems, full-stack products & optimization tools.** Apply original orange/lilac highlight treatments to a couple of phrases, as appropriate.
- Intro paragraph: **I'm a third-year Computer Engineering student at VJTI. I enjoy solving challenging problems through machine learning, algorithms and software development — from adaptive traffic signals to astronomy data and real-world web platforms.**
- Hero meta row: **Thane, India · VJTI, Mumbai · Computer Engineering**. No fake years of work experience or corporate affiliation.
- Buttons: **View Projects · Get in Touch · Resume** (keep actions working).

### 2B. Hero profile card, stickers and statistics

- Initials/large graphic: `SA`, nameplate `Sofia Abidi`, subtitle `COMPUTER ENGINEERING · VJTI`.
- Sticker 1: `SIH 2025 WINNER`.
- Sticker 2: `OPEN-SOURCE CONTRIBUTOR`.
- Four tiny stat cells (these must be readable in current layout): `9.69 — CGPA / 10`, `2025 — SIH WINNER`, `10 — MERGED PRS`, `2/50 — CODEHUNT`.
- Optional floating existing mini card: `22 — TRANSIT CANDIDATES` (not 22 confirmed planets; if too small, use a short equivalent such as `22 CANDIDATES`).

The shared six-stat strip (used on Home and About) must contain these **verified facts**, with brief labels:

| Display | Label | Context |
|---|---|---|
| `9.69` | `VJTI CGPA / 10` | Official résumé |
| `2025` | `SIH WINNER` | Smart India Hackathon 2025 |
| `10` | `MERGED PRS` | Hacktoberfest 2025 |
| `2/50` | `CODEHUNT RANK` | 2nd out of 50 teams |
| `22` | `TRANSIT CANDIDATES` | Flagged in the exoplanet project; not confirmed planets |
| `200+` | `VOLUNTEERS COORDINATED` | Student Council activities |

Do not let old dynamic `Years Experience` conditional rendering interfere with stats.

### 2C. Four expertise cards (same layouts and original per-slot colors)

**Card 1: AI & Machine Learning** (original orange)  
Copy: `Working with classical ML, neural networks and reinforcement learning to design and evaluate models on real datasets and simulated environments.`  
Tags: `PYTORCH · SCIKIT-LEARN · XGBOOST · RL`.

**Card 2: Full-Stack Development** (original coral)  
Copy: `Building software end to end — from responsive interfaces and APIs to databases, user workflows and practical integrations.`  
Tags: `NEXT.JS · REACT · NODE.JS · MONGODB`.

**Card 3: Algorithms & Optimization** (original yellow)  
Copy: `Exploring efficient algorithms, mathematical optimization and solver design through hands-on systems projects.`  
Tags: `C++ · LP/MILP · ALGORITHMS · SOLVERS`.

**Card 4: Data Science & Applied Research** (original mint)  
Copy: `Turning complex data into interpretable results through experiments, simulation, model evaluation and visualization.`  
Tags: `PYTHON · SHAP · SUMO · DATA ANALYSIS`.

Suggested heading: **What I Work On**; subtitle: **The areas I keep coming back to.** No palette change. Map any necessary new Lucide icons in `src/lib/icon-map.tsx`.

### 2D. Featured Projects (exact approved order)

Keep three large featured cards, first three from the projects array, exactly **lilac / orange / coral** as in the original design. Preserve icon treatment initially; optional image enhancement covered in §8.

1. **TraffIQ**  
   Category `AI & ML` · context `REINFORCEMENT LEARNING`  
   Summary: `Adaptive traffic signal control in SUMO using Q-Learning, DQN, PPO, MAPPO and genetic algorithms to reduce congestion.`  
   Tags: `PYTHON · PYTORCH · SUMO · MARL`.
2. **Exoplanet Detection Pipeline** (card may shorten to **Exoplanet Detection** to prevent overflow)  
   Category `AI & ML` · context `BAH 2026 · ASTRONOMY`  
   Summary: `An ML pipeline that analyzed 200+ TESS light curves and flagged 22 possible transit candidates using signal vetting and XGBoost.`  
   Tags: `XGBOOST · SHAP · TESS · TLS/BLS`.
3. **Parichay**  
   Category `Full-Stack` · context `WORKFORCE INTELLIGENCE`  
   Summary: `A workforce analytics platform with role-based KPI dashboards and ML models for performance, workload and staffing insights.`  
   Tags: `REACT · NODE.JS · SCIKIT-LEARN · ML`.

Featured section heading **Featured Projects**; subtitle `A few projects I've worked on across AI, data and software.`. Automatically show **+3 more** if full project count is six (never hardcode original +7 or original 10-project total).

### 2E. Honours & Certifications

Homepage 3 cards, retain original order/color slots:
1. **Smart India Hackathon 2025 — Winner** · `SMART INDIA HACKATHON` · winner, team competition (orange).
2. **BNY Spectrum Joint Certification Program — Selected Participant** · `BNY` · March 2026; software architecture, design patterns, clean code and databases (coral).
3. **CodeHunt — 2nd Place** · `COMMUNITY OF CODERS, VJTI` · 2nd out of 50 teams (yellow).

About page also includes: **Hacktoberfest 2025** · ten merged pull requests (mint). Don't invent additional credentials to fill a six-card grid. Retain original card styling.

### 2F. Testimonial → Beyond the Code

**Repurpose**, don't delete the large orange prominent panel. Maintain its original color, border, shadows and typographic scale; minimally adjust attribution layout so it is **not impersonating someone else's testimonial**.

- Kicker: `// BEYOND THE CODE`
- Main feature text: `The work I remember most isn't always on a screen. I've helped students build their first IoT project and worked with student teams on blood donation and beach clean-up initiatives. Engineering matters to me, but so does the community around it.`
- Lower identity: `STEM MENTORING · STUDENT LEADERSHIP`
- Supporting line: `Agastya Foundation × JPMorgan | MPSTME Student Council`.
- Optional, if space permits: `200+ volunteers coordinated`.

No fake quote marks or author endorsement.

### 2G. Latest Posts

Use the three posts described in §6, with existing 3-card presentation and category styles. Replace `READ ON LINKEDIN` with `READ ARTICLE` for local posts. Do not show arbitrary relative dates (like `3 MO AGO`) or fake view counts. If a date must be displayed, use an actual confirmed publication date or a neutral tag (such as `TECHNICAL NOTE`).

### 2H. Three roadmap cards (same colors and status chips)

**01 / COMPLETED / MINT — Finding My Foundations**  
`Started with programming and IT at MPSTME, then moved into Computer Engineering at VJTI. Along the way, I grew interested in algorithms, data and practical software.`

**02 / CURRENT / ORANGE — Building & Experimenting**  
`Exploring AI, reinforcement learning, full-stack applications and optimization through projects such as TraffIQ, EKATMA and NIRNAY, while learning through open source and team competitions.`

**03 / NEXT / LILAC — Going Deeper**  
`I want to keep improving my engineering fundamentals, work on dependable intelligent systems, and turn experiments into useful, well-tested products.`

### 2I. Orange footer CTA

Keep the large orange full-width CTA and decorations. Replace ERP/corporate language with:

- Kicker: `// LET'S CONNECT`
- Title: `Have an interesting problem? Let's work on it.` (or equivalent short, natural line that fits)
- Text: `I'm open to internships, technical collaborations, hackathons and conversations about software, AI and algorithms.`
- Buttons: `GET IN TOUCH` and direct email (working links).

## 3. ABOUT — biography, toolbox, academics, activities

Keep current About view proportions, introductory section, Quick Facts panel, skill cards, 6-cell stat strip, education card and award grid.

**Heading:** `The student behind the projects.` (preserve emphasized word/layout).

**Bio (split across existing paragraph slots and lightly tighten for fit):**

`I'm Sofia, a third-year Computer Engineering student at VJTI, Mumbai. Most of my work sits somewhere between algorithms, machine learning and building software people can actually use.`

`I've worked on reinforcement-learning traffic control, a pipeline for finding possible exoplanet transits in noisy light curves, and workforce analytics software. More recently I've been exploring entrepreneur-focused web platforms through EKATMA and optimization algorithms through NIRNAY.`

`Outside coursework and code, I've been involved in competitive programming, open-source contributions, STEM mentoring and student-led social initiatives. I enjoy the mix of technical problem-solving and working with people.`

**Quick Facts (adapt the existing compact panel):**
- Based in: `Thane, India`
- Currently: `BTech Computer Engineering · VJTI`
- Interests: `AI/ML · Algorithms · Full-Stack`
- Highlight: `SIH 2025 Winner`
- Academic: `CGPA 9.69 / 10`
- Beyond tech: `Mentoring · Open Source · Community Work`

**Four toolbox cards** (keep original UI and colors; rework icons/type union as needed):
1. **Programming & CS** — C++, Python, Java, JavaScript, TypeScript, DSA, algorithm analysis.
2. **AI, ML & Data** — PyTorch, TensorFlow, scikit-learn, XGBoost, OpenCV, SHAP, SUMO, reinforcement learning.
3. **Web Development** — Next.js, React, Node.js, Flask, FastAPI, HTML/CSS, MongoDB, PostgreSQL.
4. **Tools & Workflow** — Git, GitHub, GitLab, Jupyter, Postman, SQL, Linux, Agile/Scrum; include only résumé-supported tools.

**Education (critical factual distinction):**
- **VJTI**, BTech Computer Engineering, **Aug 2024–Present**, CGPA **9.69/10**. This is the primary education card.
- **MPSTME, Mumbai**, studied BTech Information Technology, **Jul 2023–May 2024**, CGPA **3.98/4.0**. This is **earlier study, not a completed MPSTME degree**. Add a visually consistent secondary education entry, or a compact subsection directly beneath the main card.
- Earlier academics can be omitted to keep the page concise; if useful, HSC **94.5%** from Universal High School.

**Awards grid:** the four true recognitions above; avoid decorative fake awards to fill up available space. About bottom CTA stays, retitled to suit a student profile.

## 4. PROJECTS — five full case studies and filters

**Page title:** `Projects I've built.` (not `Projects I've shipped`; the latter implies all are deployed).  
**Intro:** `A mix of AI experiments, full-stack platforms and algorithm-heavy projects. Open a card to explore the problem, approach and what I learned.`

**Filters:** `All | AI & ML | Full-Stack | Algorithms & Systems`. Check that each filter yields accurate content and `All` yields five cards; reuse the original filter/card layout. Keep original position-specific accent colors through all five: lilac, orange, coral, yellow, mint.

| # | Slug (suggested) | Title | Filter | Status, if needed |
|---|---|---|---|---|
| 1 | `traffiq` | TraffIQ | AI & ML | Tested simulation/RL project |
| 2 | `exoplanet-detection` | Exoplanet Detection Pipeline | AI & ML | BAH 2026 project |
| 3 | `parichay` | Parichay — Workforce Intelligence | Full-Stack | Developed and presented |
| 4 | `ekatma` | EKATMA | Full-Stack | Development project; do not claim live production without evidence |
| 5 | `nirnay` | NIRNAY — Optimization Solver | Algorithms & Systems | Prototype/ongoing solver work |

**Summaries for projects #4–5:**

- **EKATMA:** `A Next.js platform for entrepreneur workflows covering incentive discovery, eligibility, portfolio management, claim readiness and regulatory guidance.`  Tags: `NEXT.JS · TYPESCRIPT · APP ROUTER · WEB`. Prior discussion supports an in-development business-context model, incentives pages and regulatory assistant work. Do not assert a production launch, paid users, full compliance certification or completed STT/TTS.
- **NIRNAY:** `An indigenous optimization-solver project exploring LP and mixed-integer algorithms, refinery scheduling models and correctness-focused validation.` Tags: `LP · MILP · OPTIMIZATION · SOLVER DESIGN`. Do not claim complete industrial solver parity, production-grade MIQP/NLP/MINLP, reliable GPU speedups, full barrier/crossover implementation or finished advanced methods without inspected proof. Label incomplete items as work in progress only where relevant.

**Actual case-study content:** Populate **all five** existing project detail views, ideally with their present structure. For each use: 1) problem/context, 2) technical approach, 3) verification/outcome, 4) lessons/next steps, 5) tools/technologies. If original type uses `client`, change user-visible meaning to `Context`/`Project setting` rather than suggesting Sofia served fictitious paying clients. Preserve working `Read case study`, return-to-projects and next-case-study actions. No dead links or empty impact stats.

**Project-specific factual anchors:**
- **TraffIQ** (`Jul–Oct 2025` per résumé): SUMO + TraCI simulations; Q-Learning, DQN, PPO, MAPPO, genetic algorithms, rule-based baselines; simulated queue/wait/throughput-type evaluation. Around **25% shorter queues** and **55% lower waiting time** in tested scenarios vs rule-based policies (do **not** generalize to real citywide traffic).
- **Exoplanet Detection Pipeline** (`Jun 2026`): ISRO Bharatiya Antariksh Hackathon 2026; **200+** TESS light curves; **22 potential transit candidates**; BLS/TLS transit analysis and Wotan; **18-feature** vetting including odd-even depth, secondary eclipse and centroid shift; two-stage XGBoost, SHAP and block-bootstrap confidence estimates; **+9 macro-F1 points over a naïve baseline across five-fold CV** as stated in résumé. Résumé also says **79%/83% held-out accuracy** without clear stage naming, so avoid prominently presenting those as comparable metrics unless correctly labeled. Never call candidates confirmed exoplanets.
- **Parichay** (`Sep–Dec 2025`): React, Node.js, scikit-learn; role-specific workforce KPI dashboards; performance scoring, workload prediction, staffing optimization and anomaly detection; presented to **Brahmaputra Board leadership / Chairman**, in the Ministry of Jal Shakti context. Do not claim live government deployment, approved government product or quantified productivity improvements.
- **EKATMA:** existing Next.js App Router project with entrepreneur selection context, incentive center/calculator, portfolios, claim readiness/claims, ROI/scenarios/policy updates, regulatory assistant integration. Actual current branch may differ. Avoid fabricated numbers/results.
- **NIRNAY:** optimization-solver prototype (SIH 2026 refinery context); LP/MILP directions, simplex/interior-point concepts, branch-and-bound/cut work, benchmark/feasibility validation and refinery crude scheduling demo. Distinguish demonstrated implementation from planned GPU acceleration, advanced cuts and broader nonlinear coverage. No benchmark claims without evidence.

## 5. EXPERIENCE — real student roles, not corporate employment

**Heading:** `Experience beyond the classroom.`  
**Intro:** `Mentoring, organizing and learning how to work with people — not just code.`  
Reuse the alternating timeline with original colors, date badges, lines and cards. No role marked `CURRENT` if the dates ended.

Reverse chronological:

1. **STEM Mentor** — `Agastya Foundation × JPMorgan` — `Dec 2025–Mar 2026`. `Mentored school students as they built an IoT-based decibel meter, introducing sensors, embedded systems and hands-on electronics.` Relevant bullets should describe actual teaching/support, no invented number of students.
2. **Marketing Executive** — `Institution of Engineering and Technology (IET), MPSTME` — `Jul 2023–May 2024`. `Worked on event partnerships and sponsorships for technical festivals, liaising with brands and stakeholders.`
3. **Social Impact Executive** — `Student Council, MPSTME` — `Jul 2023–May 2024`. `Helped coordinate blood donation and beach clean-up initiatives in collaboration with NGOs, including activities involving 200+ student volunteers.`

These are volunteering/student organization responsibilities; keep the page accurate. If a tooltip or icon says `Work Experience`, prefer `Experience & Leadership`. Do not make TraffIQ, EKATMA or NIRNAY seem like corporate jobs.

## 6. WRITING — three real readable on-site technical notes

The assignment explicitly requires blogging, so **do not leave cards pointing to the previous owner's LinkedIn** or to dead external links. Preserve the Writing grid, tags and filters; add the **smallest maintainable local article-reading flow** consistent with the current app (`?view=article&id=<slug>` with appropriate back link, or a simple Next page route if demonstrably cleaner). Do not introduce a CMS, external API, Markdown editor or huge new dependency.

**Heading:** `Notes from building things.`  
**Intro:** `Short technical write-ups about things I learned working on AI, algorithms and software projects.`  
**Categories:** `All | AI & ML | Data Science | Algorithms | Engineering` — only show categories actually used; reuse existing colored category tags.

Write three original, readable **short technical notes** (roughly **250–400 words each**; natural student voice, grounded only in verified project details; no invented failures/benchmarks or claims of publicly publishing previously):

1. `Teaching Traffic Signals to Adapt with Reinforcement Learning` — `AI & ML`. Cover why fixed-time policies can underperform, SUMO/TraCI setup, comparing rule-based / Q-learning / DQN / PPO / MAPPO / GA, and limitations of simulation. No made-up new improvement numbers beyond résumé.
2. `Finding Possible Exoplanets in Noisy Light Curves` — `Data Science`. Cover TESS light curves, preprocessing, BLS/TLS, candidate vetting, XGBoost, SHAP, and distinction between candidate detections and confirmed planets. Ground quantitative details in the résumé.
3. `What I Learned from Exploring Optimization Solvers` — `Algorithms`. Cover the purpose of LP/MILP, numerical correctness, solver validation and NIRNAY as a **prototype/in-development exercise**, with no claim of finished GPU acceleration or commercial-solver parity.

All cards must open an article **on-site**, reachable by direct link and browser back/forward. Display an actual date **only if specified/appropriate** (new note can use publication date of this implementation if explicitly documented; otherwise use a neutral `TECHNICAL NOTE` label). No fabricated reading figures, engagement counts, or LinkedIn-post frequency. A neutral article byline `Sofia Abidi` is fine. Latest Posts on Home should lead to these articles as well. If displaying reading time, derive from actual text, or omit it rather than inventing it.

**Bottom orange Writing CTA:** `Let's keep the conversation going.` with real links to GitHub, LinkedIn, contact; don't claim a regular publishing schedule.

## 7. CONTACT, FOOTER, RESUME, SEO

**Contact heading:** `Let's build something interesting together.`  
**Intro:** `Have a project idea, research question, collaboration or opportunity in mind? Feel free to reach out.`

Keep existing two-column form + contact-card layout, palette and borders. Contact-card choices: **Email**, **GitHub**, **LinkedIn**, **Location (Thane, India)**, and **Download Resume**. **Remove Phone** card/phone icon and all phone links. Optional `Company` input can become `Organization (optional)`.

**Email form:** Existing form uses Web3Forms. If `NEXT_PUBLIC_WEB3FORMS_KEY` is missing, DO NOT simulate success or claim an email was sent. Either disable submit with clearly worded setup state and provide a visible `Email me directly` mailto action, or use an honest fallback that opens the email app. Once configured with a real key, preserve form submission feedback (submitting, success, error) and validate required fields. Do not hardcode a key in source; add `.env.example` with placeholder and document configuration. Avoid printing private secrets in errors or logs.

**Resume:** Link all existing résumé CTAs to `public/resume/Sofia_Abidi_Resume.pdf`, ensuring consistent `download` filename. Remove or stop linking to any previous-owner résumé file. If the new file is missing, show no deceptive active download link and report the blocker.

**Footer:** `Sofia Abidi`, student focus, current email/LinkedIn/GitHub, copyright Sofia for new work; retain the original MIT license and clear starter attribution in README. No original owner's company, personal socials, phone, or résumé in displayed footer.

**SEO/brand:** update `src/app/layout.tsx`, `robots.ts`, `sitemap.ts`, `structured-data.tsx`, `public/site.webmanifest`, `public/logo.svg`, `public/favicon.svg`, icon files, OG preview and any generator scripts (`scripts/gen-favicons.ts`, `scripts/gen-og-image.ts`). Keep current graphic **style/colors**, substitute `SA` and Sofia's details. Do not retain the previous owner's Google ownership token (`public/google*.html`). Keep `.env.example` clear about `NEXT_PUBLIC_SITE_URL`, analytics optional, Web3Forms optional. Do not invent a final Vercel deployment URL. Update README setup instructions and asset slots. Do not spend time on custom domain integrations or new analytics.

## 8. OPTIONAL PROJECT IMAGES — implement support now; add photos later

The user wants to add **authentic project screenshots, diagrams and dashboards** after the content pass. Build the simplest optional media system without changing the baseline layout/color blocks.

**Suggested filesystem paths (only examples; files may not exist yet):**

```text
public/
├── resume/
│   └── Sofia_Abidi_Resume.pdf
└── projects/
    ├── traffiq/
    │   ├── cover.webp
    │   └── simulation.png
    ├── exoplanet-detection/
    │   ├── cover.webp
    │   └── light-curve.png
    ├── parichay/
    │   ├── cover.webp
    │   └── dashboard.png
    ├── ekatma/
    │   └── dashboard.webp
    └── nirnay/
        └── solver-benchmark.png
```

**Implementation requirements:**
1. Add optional `coverImage?: string`, `coverAlt?: string`, `gallery?: { src: string; alt: string; caption?: string }[]` or similar to the project type in `src/lib/portfolio-data.ts`.
2. **Do not set an image path in a project object until that actual file exists.** If no image, continue rendering the **original colored header with project icon**, and don't change card height or insert generic stock photos.
3. When a real `coverImage` is configured, render it with sensible `object-fit: cover` within the original color-framed project header; do not replace black borders, accent backgrounds, category tag, shadows or hover effects. Choose cropping that does not hide critical UI in screenshots; `object-contain` may be preferable for dashboard diagrams. Make it responsive.
4. In each existing case-study page, optionally display a clean image gallery with captions/alt text. No carousel dependency necessary. If `gallery` empty, don't render an empty heading or broken media area.
5. Use normal Next image practices (`next/image` where appropriate), meaningful alt text, reasonable media sizing and no layout shifts. Keep source images editable and in `public/projects/`, not in an external image CDN.
6. Add a short `docs/ADDING_PROJECT_IMAGES.md` explaining exactly how Sofia can add a screenshot later, which data fields to update, image formats (prefer `.webp` for screenshots/large images; PNG for diagrams), names and recommended ~1200–1600 px widths; include a code example with a real project slug.
7. Never generate artificial screenshots or imply a visualization comes from an actual result unless user provided it. Don't attach someone else's project images.

## 9. Testing and verification — balanced, not excessive

Work in small, understandable edits. Do **not** add a huge test framework, browser-test suite, new CMS, server backend or unrelated refactors just for this assignment. Do not skip basic validation either.

**Required:**
1. Make dev/build scripts cross-platform. A clean install and local dev server should work in **Windows PowerShell** (`npm install`, `npm run dev`). `npm run build` should work in Windows as well and for Vercel. Remove Unix-specific piping/copy commands or replace with cross-platform logic; keep `output: standalone` only if the chosen build/start workflow actually supports it. Ensure TypeScript is checked (e.g. `npx tsc --noEmit`; don't trust a build that explicitly ignores errors).
2. Run `npx tsc --noEmit`, `npm run lint` and `npm run build` where the environment permits; fix issues you introduced. If pre-existing issues block a command, clearly separate them and avoid changing unrelated hundreds of files.
3. Manual quick-path verification at desktop and mobile widths: Home hero + four expertise cards + stats + Featured Projects; About academic entries/skill cards; Projects has exactly 6 and all category filters work; all 6 detail pages open and return; Writing shows exactly 3 local notes, card/article/back navigation works; Experience timeline shows 3 truthful entries; Contact direct links work and unconfigured form **does not fake success**; résumé downloads only if file exists; navbar/mobile menu and browser back/forward work.
4. Search repository/source for leftover previous-owner identity, company claims, old email/phone, old resume names, outdated BA-specific headings and Google verification details. The copyright notice in `LICENSE` is expected; old user-specific copy elsewhere is not.
5. Verify no 404 images, broken link targets, invalid post dates, horizontal overflows, cut-off hero/CTA headings or illegible text. Preserve the existing HCI-friendly keyboard focus and accessible image descriptions.
6. Record concise test results in final agent message: `Type check: pass/fail`, `Lint: pass/fail`, `Build: pass/fail`, `Manual smoke checks: ...` plus meaningful issues, not a huge report.

### What to hand back at the end

- Working edited repository on a feature branch or user working tree (do not push/deploy or force-reset without permission).
- Brief `README.md` changes: startup, environmental variables, résumé location, screenshot setup and source attribution.
- `docs/ADDING_PROJECT_IMAGES.md` with asset naming/assignment instructions.
- A **short, precise summary** of modified files, work completed, how to run it, pending user inputs and remaining later-phase tasks.
- A list of missing/uncertain facts and project media needed for later polish, if any.

## 10. Completion criteria / stop conditions

Success means: Sofia's real profile is visible across all existing navigation sections; no stale owner identity remains in UI; all six projects have appropriately modest readable cases; TraffIQ / Exoplanet / Parichay featured in order; academic, social, professional, blogging and other activities are covered; résumé/social links point to her; the original design remains recognizably unchanged; optional images are supported with clean icon fallback; contact submission is honest; code passes reasonable checks; the changes are ready for user review before Vercel deployment.

**Do the implementation now.** Do not just propose a second plan or ask for permission already granted in this prompt. Ask only if a missing fact would cause a serious fabricated claim or if a required file cannot be located; otherwise use documented conservative wording and explicitly list what should be confirmed later.

---

## Separate later phases (NOT part of this task)

- **Visual polish once Sofia reviews** — optionally add authentic screenshots to project cards/case studies, refine crop/layout and long mobile text, tweak imagery while retaining approved palette unless requested otherwise.
- **HCI evaluation & assignment report** — explicitly analyze Nielsen's heuristics, Shneiderman's rules, consistency, feedback, error prevention, responsiveness, conduct actual small task-based usability tests/cognitive walkthrough with real participants, report findings and improvements. **Do not invent participant results.**
- **Deployment** — push to Sofia's repository, connect to Vercel, set `NEXT_PUBLIC_SITE_URL`, configure optional Web3Forms key, validate production links / SEO / OG assets, and submit URL/report by course deadline.
