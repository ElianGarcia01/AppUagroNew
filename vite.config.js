import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/AppUagroNew/',
  plugins: [react()],
  server: {
    port: 3000 // Cambia a un puerto disponible
  }
})


