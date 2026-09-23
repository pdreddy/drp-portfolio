import {
  careerDomains,
  caseStudies,
  dzoneArticles,
  dzoneProfile,
  expertise,
  memberships,
  profileLinks,
  publications,
  serviceCategories,
} from './data.js'

const featuredWriting = [dzoneArticles[3], dzoneArticles[2], dzoneArticles[1]]
const selectedResearch = publications.slice(0, 4)

export const profileCategories = [
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'writing', label: 'Writing' },
  { id: 'speaking', label: 'Speaking' },
  { id: 'skills', label: 'Skills' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
]

export const profileKnowledge = {
  about: {
    eyebrow: 'Executive Profile',
    title: 'Technology architecture grounded in trust.',
    summary: 'Damodhara Reddy Palavali is a technology architect and researcher with more than 16 years of experience across government, healthcare, financial services, and automotive technology. His work spans Zero Trust, identity modernization, enterprise Java, cloud platforms, behavioral authentication, and applied AI security.',
    links: [{ label: 'Read the full profile', to: '/about' }],
  },
  impact: {
    eyebrow: 'Selected Impact',
    title: 'Modernization across mission-critical systems.',
    summary: 'Selected architecture work is presented at a public, non-confidential level.',
    items: caseStudies.map(({ title, contribution, technology }) => ({
      title,
      text: contribution,
      meta: technology.slice(0, 3).join(' · '),
    })),
    links: [{ label: 'Explore selected work', to: '/work' }],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'A career across complex enterprise domains.',
    summary: 'Experience has progressed from data-intensive healthcare platforms through automotive and financial systems to government identity and security architecture.',
    items: careerDomains.map(({ label, text }) => ({ title: label, text })),
    links: [{ label: 'View career context', to: '/about' }],
  },
  research: {
    eyebrow: 'Research',
    title: 'Applied research with operational relevance.',
    summary: 'Research supports the broader architecture practice across Zero Trust, behavioral authentication, AI security, healthcare systems, and enterprise decision intelligence.',
    items: selectedResearch.map(({ title, venue, year, description }) => ({
      title,
      text: description,
      meta: `${venue} · ${year}`,
    })),
    links: [{ label: 'View all research', to: '/research' }],
  },
  writing: {
    eyebrow: 'Technical Writing',
    title: `${dzoneProfile.pageviews} DZone pageviews across ${dzoneProfile.articles} articles.`,
    summary: 'Practical perspectives on enterprise architecture, Java, cloud-native engineering, Zero Trust, identity security, and emerging AI systems.',
    stats: [`${dzoneProfile.pageviews} pageviews`, `${dzoneProfile.articles} DZone articles`, `Contributor since ${dzoneProfile.contributorSince}`],
    items: featuredWriting.map(({ title, description, date }) => ({ title, text: description, meta: `DZone · ${date}` })),
    links: [{ label: 'Explore all writing', to: '/writing' }],
  },
  speaking: {
    eyebrow: 'Speaking & Service',
    title: 'Technical communication and professional contribution.',
    summary: 'Public profile information includes conference speaking, IEEE activities, peer review, technical judging, and practitioner knowledge-sharing.',
    items: serviceCategories.slice(0, 4).map(({ title, description }) => ({ title, text: description })),
    links: [{ label: 'View speaking and service', to: '/speaking' }],
  },
  skills: {
    eyebrow: 'Expertise',
    title: 'Security depth with enterprise breadth.',
    summary: 'Six connected areas shaped by hands-on architecture and modernization work.',
    items: expertise.map(({ title, summary, technologies }) => ({
      title: title.replace('Cloud & Microservices Architecture', 'Cloud & Microservices').replace('Behavioral Biometrics & Applied AI', 'Behavioral Biometrics'),
      text: summary,
      meta: technologies.slice(0, 5).join(' · '),
    })),
    links: [{ label: 'See expertise in context', to: '/work' }],
  },
  recognition: {
    eyebrow: 'Recognition',
    title: 'Professional membership and service.',
    summary: 'Recognition is presented through verified memberships and documented professional contribution rather than promotional claims.',
    items: [
      ...memberships.map(({ name, tier }) => ({ title: name, text: tier })),
      { title: 'Peer Review', text: 'Applied AI, cybersecurity, and software systems.' },
      { title: 'Technical Judging', text: 'AI, cloud computing, cybersecurity, and innovation programs.' },
    ],
    links: [{ label: 'View professional service', to: '/speaking' }],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start a focused conversation.',
    summary: 'Available for technical speaking, research collaboration, and industry discussions around Zero Trust, identity security, Agentic AI, and enterprise architecture.',
    contacts: [
      { label: 'LinkedIn', href: profileLinks.linkedin },
      { label: 'Email', href: profileLinks.email },
      { label: 'Google Scholar', href: profileLinks.scholar },
      { label: 'IEEE', href: profileLinks.ieee },
      { label: 'ResearchGate', href: profileLinks.researchgate },
    ],
  },
}

const categoryTerms = {
  about: ['who', 'background', 'profile', 'damodhara', 'work on'],
  impact: ['impact', 'built', 'build', 'project', 'enterprise scale', 'government', 'healthcare', 'financial', 'automotive'],
  experience: ['experience', 'career', 'history', 'worked', 'domain'],
  research: ['research', 'publication', 'paper', 'study', 'scholar'],
  writing: ['writing', 'article', 'dzone', 'author', 'writes', 'write'],
  speaking: ['speaking', 'speaker', 'spoken', 'conference', 'presentation', 'service'],
  skills: ['skill', 'technology', 'technologies', 'stack', 'java', 'spring', 'cloud', 'zero trust', 'identity', 'iam', 'agentic', 'biometric'],
  recognition: ['recognition', 'membership', 'ieee', 'iete', 'review', 'judging'],
  contact: ['contact', 'email', 'linkedin', 'reach', 'connect', 'hire'],
}

export function matchProfileQuestion(question) {
  const normalized = question.trim().toLowerCase().replace(/^\//, '')
  if (!normalized) return null
  const exact = profileCategories.find(({ id, label }) => normalized === id || normalized === label.toLowerCase())
  if (exact) return exact.id

  let best = null
  let bestScore = 0
  for (const [category, terms] of Object.entries(categoryTerms)) {
    const score = terms.reduce((total, term) => total + (normalized.includes(term) ? term.split(' ').length : 0), 0)
    if (score > bestScore) {
      best = category
      bestScore = score
    }
  }
  return bestScore > 0 ? best : 'unknown'
}

export const unknownProfileResponse = {
  eyebrow: 'Public Profile',
  title: 'No verified answer is available for that question.',
  summary: "That information isn't included in Damodhara's public profile.",
}
