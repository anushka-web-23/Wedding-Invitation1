import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// For GitHub Pages: set base to '/<repo-name>/' when deploying to a project
// page (https://<user>.github.io/<repo>/). If using a custom domain or
// user/organization page (https://<user>.github.io/), set base to '/'.
//
// The value is read from the VITE_BASE_PATH env var if set, otherwise '/'.
const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
