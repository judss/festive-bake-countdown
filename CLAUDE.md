# Festive Bake Countdown — Claude Context

## What this project is

A single-page countdown site to the annual Greggs Festive Bake launch (November 6th). No framework, no build step, no package manager. Plain HTML, CSS, and vanilla JS.

## Architecture

- `index.html` — the entire page. No templating.
- `assets/css/bake.css` — all styles. Uses CSS custom properties, flexbox, `clamp()` for responsive sizing, and `env(safe-area-inset-*)` for mobile safe zones.
- `assets/js/bake.js` — countdown logic. Vanilla JS, no dependencies. Calculates time to next November 6th and swaps digit images every second.
- `assets/js/fallingsnow_v6.js` — snow animation. Vanilla JS, uses `requestAnimationFrame`.
- `assets/fonts/` — self-hosted Barlow Condensed (weights 100 and 600, latin subset only).
- `assets/img/` — digit images (`FB_0.webp` through `FB_9.webp`, `FB_-.webp`) and background (`FB_BG.webp`). All WebP with PNG originals retained as fallbacks.
- `assets/turnip.m4a` — Easter egg audio played automatically when the countdown reaches zero.

## Key decisions

- **No jQuery, no Bootstrap** — both were removed. All DOM manipulation is vanilla JS.
- **WebP images** — converted from PNG for faster load. JS detects WebP support and falls back to PNG.
- **Self-hosted Barlow Condensed** — replaced Typekit (Adobe Fonts) to eliminate font flash and external dependency. Uses `font-display: optional`.
- **3-digit days** — the countdown displays 3 digit slots for days (not 2) to handle counts over 99. A hidden `countdown-spacer` div balances the layout.
- **Target date** — `new Date(year, 10, 6)` in `bake.js` (month is 0-indexed; 10 = November). Rolls over to next year automatically once the date passes.

## Things to be careful about

- Month indexing: JavaScript `Date` months are 0-indexed. November = `10`, not `11`.
- Font preloads in `index.html` require `crossorigin` attribute even though fonts are self-hosted.
- The `assets/img/FB_Fav.png` favicon is intentionally kept as PNG (favicon WebP support is inconsistent).
- `overflow: hidden` on `body` is intentional — keeps the snow animation from causing scrollbars.
