// Renders design/news.html to entry.png (1024x1024) with Playwright, then checks the size limits.
// Usage: PW_DIR=<dir holding node_modules/playwright> CHROME=<chromium binary> node design/render.mjs [out.png]
import { createRequire } from 'node:module';
import { statSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(resolve(process.env.PW_DIR ?? '.'), 'package.json'));
const { chromium } = require('playwright');

const out = resolve(process.argv[2] ?? join(here, '..', 'entry.png'));
const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(here, 'news.html'));
await page.evaluate(() => document.fonts.ready);

// Fail on any label that spills out of its tile, so nothing is clipped or overlaps a border.
const spills = await page.evaluate(() => {
  const bad = [];
  for (const tile of document.querySelectorAll('.tile')) {
    const f = tile.querySelector('.frame').getBoundingClientRect();
    for (const t of tile.querySelectorAll('text')) {
      const r = t.getBoundingClientRect();
      if (r.right > f.right - 8 || r.left < f.left || r.bottom > f.bottom - 4) bad.push(t.textContent);
    }
  }
  const svg = document.querySelector('svg').getBoundingClientRect();
  for (const t of document.querySelectorAll('svg > text')) {
    if (t.getBoundingClientRect().right > svg.right - 30) bad.push(t.textContent);
  }
  return bad;
});
if (spills.length) { console.error('text spills out of its tile:\n  ' + spills.join('\n  ')); }
await page.locator('svg').first().screenshot({ path: out, type: 'png' });
await browser.close();

const bytes = statSync(out).size;
const png = readFileSync(out);
const w = png.readUInt32BE(16), h = png.readUInt32BE(20);
console.log(`${out}: ${w}x${h}, ${bytes} bytes`);
if (w > 1024 || h > 1024 || bytes > 1048576) { console.error('over the limits'); process.exit(1); }
