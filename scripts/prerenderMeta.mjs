#!/usr/bin/env node
// Post-build: writes dist/<route>/index.html for each route in src/siteMeta.js with that
// route's title, description, canonical, and Open Graph / Twitter tags, so crawlers that
// don't run JavaScript (LinkedIn, Slack, X, etc.) see the right preview for every page.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(repoRoot, 'dist')
const { OG_IMAGE, canonicalFor, routeMeta } = await import(pathToFileURL(path.join(repoRoot, 'src', 'siteMeta.js')))

const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function setTag(html, pattern, replacement, name) {
  if (!pattern.test(html)) throw new Error(`prerenderMeta: missing ${name} in dist/index.html`)
  return html.replace(pattern, replacement)
}

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')

for (const [route, { title, description }] of Object.entries(routeMeta)) {
  const t = escapeHtml(title)
  const d = escapeHtml(description)
  const url = canonicalFor(route)
  let html = template
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${t}</title>`, 'title')
  html = setTag(html, /(<meta name="description" content=")[^"]*(")/, `$1${d}$2`, 'description')
  html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, 'canonical')
  html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, 'og:url')
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`, 'og:title')
  html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`, 'og:description')
  html = setTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`, 'twitter:title')
  html = setTag(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`, 'twitter:description')
  html = setTag(html, /(<meta property="og:image" content=")[^"]*(")/, `$1${OG_IMAGE.url}$2`, 'og:image')

  const outFile = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.slice(1), 'index.html')
  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await fs.writeFile(outFile, html, 'utf8')
  console.log(`prerenderMeta: ${route} → ${path.relative(repoRoot, outFile)}`)
}
