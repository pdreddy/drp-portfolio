#!/usr/bin/env node
// Renders scripts/og/og-image.html to public/og-image.png at 1200×630.
// Requires Playwright with a Chromium build (not a project dependency):
//   npx playwright@1 install chromium   # if no browser is available locally
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.goto(pathToFileURL(path.join(here, 'og-image.html')).href)
await page.screenshot({ path: path.resolve(here, '..', '..', 'public', 'og-image.png') })
await browser.close()
console.log('Wrote public/og-image.png')
