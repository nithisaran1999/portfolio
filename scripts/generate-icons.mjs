// ---------------------------------------------------------------------------
// Generates the site icon set (favicon + PWA app icons) into /public.
// Run with: bun run icons  (or: bun scripts/generate-icons.mjs)
// ---------------------------------------------------------------------------
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = resolve(root, 'public');

// Single source of truth for the brand mark.
// Gradient matches the site's `text-gradient` (indigo -> cyan).
const MARK = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6366f1"/>
      <stop offset="1" stop-color="#0891b2"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#brand)"/>
  <path d="M18 16h6l11 21V16h6v32h-6L24 27v21h-6z" fill="#fff"/>
</svg>
`;

// Full-bleed variant (no rounded corners / transparency) for maskable icons
// and the Apple touch icon, which iOS masks itself.
const MARK_MASKABLE = MARK.replace(' rx="14"', '');

async function renderPng(svg, size) {
  const density = Math.max(72, Math.round((size / 64) * 72));
  return sharp(Buffer.from(svg), { density }).resize(size, size).png().toBuffer();
}

async function main() {
  await mkdir(pub, { recursive: true });

  // SVG favicon (used directly by the browser and as the header logo).
  await writeFile(resolve(pub, 'favicon.svg'), MARK.trim() + '\n');

  const pngs = [
    { svg: MARK, file: 'favicon-16x16.png', size: 16 },
    { svg: MARK, file: 'favicon-32x32.png', size: 32 },
    { svg: MARK_MASKABLE, file: 'apple-touch-icon.png', size: 180 },
    { svg: MARK, file: 'icon-192.png', size: 192 },
    { svg: MARK, file: 'icon-512.png', size: 512 },
    { svg: MARK_MASKABLE, file: 'icon-maskable-192.png', size: 192 },
    { svg: MARK_MASKABLE, file: 'icon-maskable-512.png', size: 512 },
  ];

  for (const { svg, file, size } of pngs) {
    const buf = await renderPng(svg, size);
    await writeFile(resolve(pub, file), buf);
    console.log(`✓ ${file} (${size}x${size})`);
  }

  const manifest = {
    name: 'Nithisaran',
    short_name: 'Nithisaran',
    description: 'Nithisaran — AI-Driven Software Developer',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0b0f1a',
    theme_color: '#0b0f1a',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };

  await writeFile(
    resolve(pub, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2) + '\n',
  );
  console.log('✓ site.webmanifest');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
