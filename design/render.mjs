// Renders a design page (default design/broadsheet.html) to a 1024x1024 PNG with Playwright, checks that no
// text box overflows, writes a 300 px preview beside it, and checks the gate's limits.
// Usage: PW_DIR=<dir holding node_modules/playwright> CHROME=<chromium binary> node design/render.mjs [out.png] [page.html]
import { createRequire } from 'node:module';
import { statSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(resolve(process.env.PW_DIR ?? '.'), 'package.json'));
const { chromium } = require('playwright');

const out = resolve(process.argv[2] ?? join(here, '..', 'entry.png'));
const pageFile = resolve(process.argv[3] ?? join(here, 'broadsheet.html'));
// Software GL: on this machine Chromium's GPU path stalls every screenshot.
const browser = await chromium.launch({
  executablePath: process.env.CHROME || undefined,
  args: ['--disable-gpu', '--disable-dev-shm-usage', '--use-gl=swiftshader'],
});
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto('file://' + pageFile);
await page.evaluate(() => document.fonts.ready);

// Every element marked .fit must hold its text without clipping; the page itself must not scroll.
const spills = await page.evaluate(() => {
  const bad = [];
  for (const el of document.querySelectorAll('.fit')) {
    if (el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1) {
      bad.push(`${el.className}: ${el.textContent.trim().slice(0, 60)} (${el.scrollWidth}x${el.scrollHeight} in ${el.clientWidth}x${el.clientHeight})`);
    }
  }
  const doc = document.documentElement;
  if (doc.scrollHeight > 1024 || doc.scrollWidth > 1024) bad.push(`page is ${doc.scrollWidth}x${doc.scrollHeight}`);
  return bad;
});
if (spills.length) console.error('overflow:\n  ' + spills.join('\n  '));

await page.screenshot({ path: out, type: 'png', clip: { x: 0, y: 0, width: 1024, height: 1024 } });

// A 300 px copy, to judge the image as a feed thumbnail.
const preview = out.replace(/\.png$/, '') + '_300.png';
const small = await browser.newPage({ viewport: { width: 300, height: 300 } });
await small.setContent(`<body style="margin:0"><img width="300" height="300" src="data:image/png;base64,${readFileSync(out).toString('base64')}"></body>`);
await small.screenshot({ path: preview });
await browser.close();

const bytes = statSync(out).size;
const png = readFileSync(out);
const w = png.readUInt32BE(16), h = png.readUInt32BE(20);
console.log(`${out}: ${w}x${h}, ${bytes} bytes; preview ${preview}`);
if (w > 1024 || h > 1024 || bytes > 1048576 || spills.length) process.exit(1);
