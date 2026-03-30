import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Dentis-mockup/' // SCHIMBĂ "dentis-clinic" CU NUMELE REPO-ULUI TĂU GITHUB
})