import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cars/',
  server: {
    host: true, // Listen on all local IPs
    port: 8080, // Changed port to 8080
    open: true, // Open browser on start
    strictPort: false, // Allow fallback to another port if 8080 is in use
  },
  preview: {
    port: 8080, // Changed port to 8080
    strictPort: false, // Allow fallback to another port if 8080 is in use
    host: true,
  }
})
