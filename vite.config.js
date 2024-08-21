import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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
