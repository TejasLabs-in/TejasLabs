import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/TejasLabs/', 
    
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // 2. MODIFIED: Ensure HMR works locally but stays compatible with AI Studio's environment
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    // 3. OPTIONAL: Ensure the build output is clean for GitHub
    build: {
      outDir: 'dist',
    }
  };
});
