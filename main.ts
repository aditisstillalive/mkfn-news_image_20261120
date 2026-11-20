// Entry for make.fun's news-image-20261120: one image summing up the world news of Friday 20 November 2026.
// The image (entry.png) is drawn as SVG in design/news.html and rendered by design/render.mjs with Playwright.
// This program, Node 22 standard library only, checks the image against the gate's limits and copies it to
// /output/entry.png (MAKEFUN_OUTPUT_DIR stands in for /output when run locally).

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const image = readFileSync(new URL('./entry.png', import.meta.url));
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

if (!image.subarray(0, 8).equals(PNG_SIGNATURE)) throw new Error('entry.png is not a PNG');
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);
if (image.length > 1048576) throw new Error(`entry.png is ${image.length} bytes, over 1 MiB`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), image);
