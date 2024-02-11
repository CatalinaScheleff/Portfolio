import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    middleware: [
      (req, res, next) => {
        if (req.url.endsWith('.jsx')) {
          res.setHeader('Content-Type', 'text/javascript');
        }
        next();
      }
    ]
  }
});
