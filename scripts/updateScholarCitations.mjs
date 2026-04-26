#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const dataFilePath = path.join(repoRoot, 'src', 'data.js')

const AUTHOR_ID = process.env.GOOGLE_SCHOLAR_AUTHOR_ID || 'gbBDbl4AAAAJ'
const API_KEY = process.env.SERPAPI_API_KEY
const DRY_RUN = process.argv.includes('--dry-run')

function normalizeTitle(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function scoreTitleMatch(publicationTitle, scholarTitle) {
  const a = normalizeTitle(publicationTitle)
  const b = normalizeTitle(scholarTitle)
  if (!a || !b) return 0
  if (a === b) return 1000
  if (a.includes(b) || b.includes(a)) return 900

  const aTokens = new Set(a.split(' '))
  const bTokens = new Set(b.split(' '))
  let overlap = 0
  for (const token of aTokens) {
    if (bTokens.has(token)) overlap += 1
  }
  return overlap
}

function findBestScholarMatch(publicationTitle, scholarArticles) {
  let best = null
  let bestScore = 0

  for (const article of scholarArticles) {
    const score = scoreTitleMatch(publicationTitle, article.title || '')
    if (score > bestScore) {
      best = article
      bestScore = score
    }
  }

  return bestScore >= 6 ? best : null
}

async function fetchScholarArticles() {
  if (!API_KEY) {
    throw new Error('Missing SERPAPI_API_KEY. Set this environment variable before running this script.')
  }

  const url = new URL('https://serpapi.com/search.json')
  url.searchParams.set('engine', 'google_scholar_author')
  url.searchParams.set('author_id', AUTHOR_ID)
  url.searchParams.set('hl', 'en')
  url.searchParams.set('api_key', API_KEY)

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`SerpAPI request failed: ${response.status} ${response.statusText}`)
  }

  const payload = await response.json()
  return payload.articles || []
}

async function main() {
  const dataModule = await import(pathToFileURL(dataFilePath))
  const publications = dataModule.publications || []
  const scholarArticles = await fetchScholarArticles()

  let source = await fs.readFile(dataFilePath, 'utf8')
  let updatedCount = 0
  const unmatched = []

  for (const pub of publications) {
    const match = findBestScholarMatch(pub.title, scholarArticles)
    if (!match) {
      unmatched.push(pub.title)
      continue
    }

    const citations = Number(match.cited_by?.value || 0)
    const blockPattern = new RegExp(`(num:\\s*'${pub.num}'[\\s\\S]*?citations:\\s*)(\\d+)`)

    if (!blockPattern.test(source)) {
      unmatched.push(`${pub.title} (record not found in src/data.js)`)
      continue
    }

    source = source.replace(blockPattern, `$1${citations}`)
    updatedCount += 1
  }

  if (!DRY_RUN) {
    await fs.writeFile(dataFilePath, source, 'utf8')
  }

  console.log(`${DRY_RUN ? '[dry-run] ' : ''}Updated citations for ${updatedCount}/${publications.length} publications.`)
  if (unmatched.length) {
    console.log('\nNo confident Scholar match for:')
    unmatched.forEach((title) => console.log(`- ${title}`))
  }
}

function pathToFileURL(filePath) {
  const absolutePath = path.resolve(filePath).replace(/\\/g, '/')
  return new URL(`file://${absolutePath}`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
