# Festive Bake Countdown

A countdown timer to the annual return of the Greggs Festive Bake (November 6th).

Originally from the official Greggs festive bake website, which had stopped working. A few of us ripped it, fixed it up, and added some of our own touches so we could run it locally in the office.

## Features

- Countdown to November 6th, automatically rolling over each year
- Falling snow animation
- Hidden Easter egg
- GitHub link in the bottom right corner

## Running locally

Open `index.html` directly in a browser. No build step or server required.

## Project structure

```
assets/
  css/
    bake.css        # Site styles
  js/
    bake.js         # Countdown logic
    fallingsnow_v6.js  # Snow animation
    typekit.js      # Font loader (Acumin Pro via Adobe Fonts)
  img/              # Digit images and background
  turnip.m4a        # Easter egg audio
index.html
```

## Dependencies

No build tools, package managers, or external CDNs. Everything runs from local files.
The site has no runtime dependencies — jQuery and Bootstrap have been removed.
