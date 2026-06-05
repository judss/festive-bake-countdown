# Festive Bake Countdown

A countdown timer to the annual return of the Greggs Festive Bake (November 6th).

Originally from the official Greggs festive bake website, which had stopped working. A few of us ripped it, fixed it up, and added some of our own touches so we could run it locally in the office. It's now hosted online.

## Features

- Countdown to November 6th, automatically rolling over each year
- Falling snow animation
- GitHub link in the bottom right corner
- Fully responsive, including mobile safe zone support

## Running locally

Open `index.html` directly in a browser. No build step or server required.

## Project structure

```
assets/
  css/
    bake.css              # All site styles
  fonts/
    barlow-condensed-100.woff2  # Heading font (thin)
    barlow-condensed-600.woff2  # Heading font (semibold)
  js/
    bake.js               # Countdown logic
    fallingsnow_v6.js     # Snow animation
  img/
    FB_0.webp – FB_9.webp # Digit images
    FB_-.webp             # Dash image (placeholder digits)
    FB_BG.webp            # Background image
    FB_Fav.png            # Favicon
  turnip.m4a              # Easter egg audio
index.html
```

## Dependencies

None. No build tools, package managers, frameworks, or external CDNs.
All fonts, images, and scripts are self-hosted.
