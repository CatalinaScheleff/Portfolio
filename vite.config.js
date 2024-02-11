import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    // Asegura que los archivos JSX se sirvan con el tipo MIME correcto
    mimeTypes: {
      jsx: 'text/javascript'
    }
  }
})
