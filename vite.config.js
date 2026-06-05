import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  base: '/resume-2025-main/', 
  plugins: [react()],
  optimizeDeps: {
    include: ['react-vertical-timeline-component']
  },
  build: {
    outDir: 'docs', 
  }
})