import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  optimizeDeps: {
    include: ['@headlessui/react']
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [
    react({
      babel: {}
    })
  ],
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup/setup-test-env.ts'],
    globals: true,
    restoreMocks: true,
    coverage: {
      include: ['app/**/*.{ts,tsx}'],
      all: true,
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true
    },
    environmentMatchGlobs: [['**/*.test.tsx', 'jsdom']]
  }
});
