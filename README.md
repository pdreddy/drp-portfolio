# Damodhara Reddy Palavali — Portfolio

Professional portfolio website built with **React + Vite** and a custom responsive CSS design system.

## Tech Stack

- **React 18** — UI components
- **Vite 5** — build tool / dev server
- **React Router 6** — dedicated profile, research, and writing routes
- **Space Grotesk**, **Inter** + **JetBrains Mono** — typography (dark, developer-style theme)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

Output in `dist/` folder.

## Deploy to Netlify

### Option A — Drag & Drop
1. Run `npm run build`
2. Drag the `dist/` folder to [app.netlify.com](https://app.netlify.com)

### Option B — Git Integration
1. Push repo to GitHub / GitLab
2. In Netlify: **Add new site → Import from Git**
3. Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**

The included `netlify.toml` handles all routing automatically.

## Customization

Structured content lives in `src/data.js` — update the `profile` block (name, title, summary, photo), publications, articles, expertise, case studies, professional service, memberships, and profile links there.

### Content data

Everything factual lives in `src/data.js`, and the homepage, profile assistant, and all pages derive from it:

- `profile`: experience years, location, current role
- `publications`: each record has a `type` (`journal` / `conference` / `chapter`), a `status`, and `links`.
  A record counts as **published** only when `status: 'published'` **and** it has at least one direct
  DOI / publisher / IEEE Xplore / proceedings link. Anything else is shown under *Accepted / Forthcoming*
  with "Verification link pending". `researchGroups` and `researchStats` (counts, citations) are derived.
- `articles` / `publicArticles`: records flagged `needsReview` are hidden and not counted.
- `caseStudies[].metrics`: impact figures with an `Approximately` / `Estimated` qualifier.
- `memberships`, `certifications`, `education`, `speakingActivities` (missing fields are `null` and render as
  "Not yet recorded"; an entry becomes *Verified* once `evidence` holds a direct link).

### Social sharing image

`public/og-image.png` (1200×630) is rendered from `scripts/og/og-image.html` with
`node scripts/og/renderOgImage.mjs` (needs Playwright + Chromium). `npm run build` runs
`scripts/prerenderMeta.mjs` after Vite to write `dist/<route>/index.html` with each route's metadata
from `src/siteMeta.js`, so link previews are correct without JavaScript.

### Profile photo

Add a square headshot at `public/profile.jpg`. Until it exists, the hero shows a gradient ring with initials.

### Auto-update Google Scholar citation counts

You can refresh publication citation counts from Google Scholar (via SerpAPI):

```bash
export SERPAPI_API_KEY=your_key_here
export GOOGLE_SCHOLAR_AUTHOR_ID=gbBDbl4AAAAJ   # optional (defaults to this profile)
npm run citations:update
```

To preview matches without writing changes:

```bash
npm run citations:update:dry
```

- **Colours & fonts:** `src/index.css` (CSS variables at `:root`)
- **Sections:** individual files in `src/components/`

## Project Structure

```
src/
├── App.jsx                       # Routes and page composition
├── main.jsx                      # React entry point
├── index.css                     # Dark responsive design system
├── useReveal.js                  # Scroll-reveal animation hook
├── data.js                       # Single source of truth (see "Content data" below)
├── siteMeta.js                   # Per-route title/description/canonical + OG image
├── profile.js                    # Profile assistant answers, derived from data.js
├── pages/
│   ├── AboutPage.jsx             # Executive profile and career context
│   ├── WorkPage.jsx              # Selected impact and expertise
│   ├── ResearchPage.jsx          # Complete verified research list
│   ├── WritingPage.jsx           # Complete technical writing list
│   └── SpeakingPage.jsx          # Speaking and professional service
└── components/
    ├── Nav.jsx                   # Compact responsive navigation
    ├── Hero.jsx                 # Minimal identity and explorer shell
    ├── ProfileExplorer.jsx       # Deterministic profile Q&A
    ├── Stats.jsx                 # At-a-glance numbers
    ├── Experience.jsx            # Experience timeline
    ├── Expertise.jsx
    ├── Research.jsx              # Publication card with status + direct links
    ├── SpeakingActivities.jsx    # Speaking / review / judging entries
    ├── Articles.jsx              # Article card
    ├── Footer.jsx
    ├── Icon.jsx
    └── SectionHeading.jsx
```
