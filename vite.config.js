import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Set base to your repository name when deploying to GitHub Pages under a project site.
// Example: if your repo is 'trugeen-ai-lab', keep base: '/trugeen-ai-lab/'.
// If you deploy to a user/org site (username.github.io), set base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/trugeen-ai-lab/',
})
