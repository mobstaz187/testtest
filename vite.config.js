import { defineConfig } from 'vite'

export default defineConfig({
  base: '/roll-uiiai/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  publicDir: 'public'
})