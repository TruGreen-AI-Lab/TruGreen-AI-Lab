# TruGreen AI Lab Website

Multi-page React site (Vite + Tailwind + React Router) with a GitHub Pages workflow.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a **new GitHub repository**: `trugreen-ai-lab`.
2. `vite.config.js` already has `base: '/trugreen-ai-lab/'` set for this repo name.
3. Commit and push all files to the `main` branch.
4. In your repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Push to `main` — the included workflow will build & publish automatically.
6. Your site will be available at `https://<username>.github.io/trugreen-ai-lab/`.

### Notes
- Uses **HashRouter** so deep links work on GitHub Pages.
- Edit content in `src/data.js` (names, emails, research areas, news, publications, links, etc.).
- Replace placeholder images with real headshots/graphics.
