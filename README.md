# Damodhara Reddy Palavali — Portfolio

Professional  portfolio website built with **React + Vite + Tailwind CSS**.

## Tech Stack

- **React 18** — UI components
- **Vite 5** — build tool / dev server
- **Tailwind CSS 3** — utility styling
- **Clash Display** + **Cabinet Grotesk** + **Fira Code** — typography

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

All content lives in `src/data.js` — update publications, articles, judging roles, and links there.

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

- **Colours & fonts:** `src/index.css` (CSS variables at `:root` and `.dark`)
- **Tailwind tokens:** `tailwind.config.js`
- **Sections:** individual files in `src/components/`

## Project Structure

```
src/
├── App.jsx                       # Root — assembles all sections
├── main.jsx                      # Entry point
├── index.css                     # Global styles + CSS variables
├── data.js                       # All content data
├── hooks.js                      # useScrollReveal, useCountUp, useInView
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Research.jsx
    ├── Publications.jsx
    ├── Articles.jsx
    ├── JudgingMemberships.jsx
    ├── Impact.jsx
    ├── Contact.jsx
    └── Footer.jsx
```
