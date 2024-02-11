import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Esta opción configura cómo Vite interpreta ciertos tipos de archivo.
  // Asegúrate de que los archivos JSX se compilen a JavaScript estándar
  // antes de ser servidos.
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    // Asegura que los archivos JSX se compilen a JavaScript estándar
    jsx: 'react'
  }
})
