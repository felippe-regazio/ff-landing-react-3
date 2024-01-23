import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ff-landing-react-3',

  build: {
    outDir: './docs'
  }  
})
