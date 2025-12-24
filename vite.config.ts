import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Změna base na './' zajistí, že cesty k souborům budou relativní 
  // a web bude fungovat na Vercelu i jakékoliv jiné doméně.
  base: './',
  build: {
    // Vercel očekává výstup v dist (což je výchozí), ale pro jistotu to definujeme
    outDir: 'dist',
  }
})