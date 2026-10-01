// Page metadata shared by the app (client-side updates) and scripts/prerenderMeta.mjs
// (static HTML per route, so link previews work without JavaScript).
import { profile, publicArticles, researchStats } from './data.js'

export const SITE_URL = 'https://damodharapalavali.com'
export const SITE_NAME = profile.name

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: `${profile.name} — Zero Trust, identity security, and applied AI research`,
}

const homeDescription = `Technologist and researcher with ${profile.experienceLabel} of experience in Zero Trust, identity security, Agentic AI, enterprise Java, and secure cloud systems.`

export const routeMeta = {
  '/': {
    title: `${profile.name} | Zero Trust & Identity Security`,
    description: homeDescription,
  },
  '/about': {
    title: `About | ${profile.name}`,
    description: `Technologist and researcher focused on Zero Trust, identity security, enterprise Java, cloud platforms, and trustworthy AI systems. Based in ${profile.location}.`,
  },
  '/work': {
    title: `Selected Work | ${profile.name}`,
    description: 'Selected identity, healthcare, financial-services, and automotive modernization work, with approximate, non-confidential impact figures.',
  },
  '/research': {
    title: `Research | ${profile.name}`,
    description: `${researchStats.published} published papers and ${researchStats.accepted} accepted or forthcoming works in Zero Trust, behavioral authentication, AI security, and healthcare systems.`,
  },
  '/writing': {
    title: `Technical Writing | ${profile.name}`,
    description: `${publicArticles.length} technical articles on Zero Trust, identity security, enterprise Java, cloud platforms, and emerging AI technologies.`,
  },
  '/speaking': {
    title: `Speaking & Service | ${profile.name}`,
    description: 'Conference presentations, invited talks, peer review, and judging across secure systems, applied AI, and enterprise modernization.',
  },
}

export const getRouteMeta = (pathname) => routeMeta[pathname] || routeMeta['/']
export const canonicalFor = (pathname) => `${SITE_URL}${routeMeta[pathname] ? pathname : '/'}`
