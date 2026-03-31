import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['xportfolio-60ep.onrender.com'],
    host: true,
    port: 10000,
  },
  preview: {
    allowedHosts: ['xportfolio-60ep.onrender.com'],
    host: true,
    port: 10000,
  },
})
