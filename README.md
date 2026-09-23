# Damodhara Reddy Palavali — Portfolio

Professional portfolio website built with **React + Vite** and a custom responsive CSS design system.

## Tech Stack

- **React 18** — UI components
- **Vite 5** — build tool / dev server
- **React Router 6** — dedicated profile, research, and writing routes
- **Clash Display** + **Cabinet Grotesk** — typography

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

Structured content lives in `src/data.js` — update publications, articles, expertise, case studies, professional service, memberships, and profile links there.

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
├── index.css                     # Responsive global design system
├── data.js                       # Publications and structured profile content
├── pages/
│   ├── AboutPage.jsx             # Executive profile and career context
│   ├── ResearchPage.jsx          # Complete verified research list
│   └── WritingPage.jsx           # Complete technical writing list
└── components/
    ├── Nav.jsx                   # Compact responsive navigation
    ├── Hero.jsx
    ├── Credibility.jsx
    ├── SelectedImpact.jsx
    ├── Expertise.jsx
    ├── Research.jsx
    ├── ProfessionalService.jsx
    ├── Articles.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── Icon.jsx
    └── SectionHeading.jsx
```
