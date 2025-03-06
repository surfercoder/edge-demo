import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['server/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage/server'
    }
  }
})