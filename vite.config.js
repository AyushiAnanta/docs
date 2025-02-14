import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/docs/', // Ensure this matches your GitHub repository name
  plugins: [react()],
})
