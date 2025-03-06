import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'tests/setup/**',
      ],
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
      perFile: true,
      reportsDirectory: './coverage',
      clean: true
    },
  },
})