# TruGeen AI Lab Website

Multi-page React site (Vite + Tailwind + React Router) with a GitHub Pages workflow.

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL.

## Build

```bash
npm run build
```

Static files will be in `dist/`.

## Deploy to GitHub Pages (recommended: GitHub Actions)

1. Create a **new GitHub repository** (e.g., `trugeen-ai-lab`).  
2. In `vite.config.js`, set `base` to `'/trugeen-ai-lab/'` (or your repo name). If your repo is a user/org site (e.g., `username.github.io`), set `base` to `'/'`.
3. Commit and push all files to the `main` branch.
4. In your repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) will build and publish to Pages automatically.
6. Your site will be available at `https://<username>.github.io/<repo>/`.

### Notes
- This template uses `HashRouter` so deep links work on GitHub Pages without additional configuration.
- Edit content in `src/data.js` (names, emails, research areas, news, publications, links, etc.).
- Replace placeholder images with real headshots/graphics.
