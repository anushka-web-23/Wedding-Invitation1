# Srashti & Tanmay — Royal Wedding Invitation

A premium, animated Indian wedding invitation website for **Srashti Agrawal & Tanmay Goyal**, wedding date **30 November 2026**.

Built with React, Vite, and Tailwind CSS. No backend required — fully static, ready for free hosting on GitHub Pages.

---

## How to Update Wedding Details

All content is controlled from a single file:

**`src/wedding.config.ts`**

Edit these fields:

| Field | What it controls |
|---|---|
| `brideName`, `groomName`, `initials` | Names throughout the site |
| `weddingDate`, `weddingTime`, `weddingTimezone` | Countdown timer target and display |
| `storyParagraphs`, `storyImage1`, `storyImage2` | Our Story section text and photos |
| `events` array | Four event cards (Haldi, Mehendi, Sangeet, Wedding) — date, time, venue, address, description, image |
| `galleryImages` | Gallery photos (replace Pexels URLs with your own) |
| `venueName`, `venueAddress`, `venueMapsLink` | Venue section |
| `whatsappNumber`, `whatsappMessage` | RSVP WhatsApp button (use international format without +, e.g. `919876543210`) |
| `musicSrc` | Path to a licensed audio file in `/public` (e.g. `/music.mp3`). Leave empty to disable. |
| `shareTitle`, `shareDescription`, `shareImage` | Social media sharing metadata |

**Important:** Only the wedding ceremony date (30 Nov 2026) is set. Other event dates, venue, WhatsApp number, and music are left as placeholders. Update them in the config file when confirmed.

---

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

---

## Deploy to GitHub Pages (Free)

1. Create a GitHub repository and push your code to it.

2. Set the base path in `vite.config.ts`. If your repo is named `my-wedding`, set:
   ```
   VITE_BASE_PATH=/my-wedding/
   ```
   You can do this by creating a `.env` file:
   ```
   VITE_BASE_PATH=/my-wedding/
   ```

3. Add a GitHub Actions workflow (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
       steps:
         - uses: actions/deploy-pages@v4
   ```

4. In your GitHub repo: **Settings → Pages → Source → GitHub Actions**.

5. Push to `main`. Your site goes live at `https://<username>.github.io/<repo>/`.

---

## Features

- Royal envelope opening animation with wax seal
- Cinematic hero with palace background and parallax
- Live countdown to the wedding date (timezone-aware)
- Our Story section with editable text and photo frames
- Four wedding celebration cards with editable details
- Photo gallery with lightbox (keyboard-navigable)
- Venue section with Google Maps link support
- WhatsApp RSVP button
- Optional background music (disabled until configured)
- Floating rose petals and golden particles
- Scroll-reveal animations throughout
- Reduced-motion accessibility support
- Fully responsive (mobile, tablet, desktop)
- Gold-ornamental design system with Mughal patterns
