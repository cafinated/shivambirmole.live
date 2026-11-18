# Shivam Birmole — portfolio

A static site built with Astro. No backend, no database, no tracking.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things are

- `src/content/work/*.md`: one file per project page. Edit the text here.
- `src/data/site.ts`: name, email, GitHub, LinkedIn.
- `src/pages/`: home, work index, about, beyond work, contact.
- `src/components/scenes/` and `src/components/toys/`: the interactive scenes.
- `src/assets/images/`: photographs. Add new ones here.
- `DESIGN.md`: the design decisions. `CONTENT.md`: facts still to confirm.

## Deploy

The site is hosted on GitHub Pages at https://shivambirmole.live.

To publish changes, run `npm run deploy`. It builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves. The custom domain is set by `public/CNAME`.

DNS at name.com:

- `A` records for `shivambirmole.live`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `CNAME` for `www`: cafinated.github.io

## Before going live

- Confirm the LinkedIn URL in `src/data/site.ts`.
- Go through the list in `CONTENT.md`.
