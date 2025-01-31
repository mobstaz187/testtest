import { defineConfig } from 'vite'

// Get the repository name from package.json
const repositoryName = 'testtest' // Replace this with your actual repository name

export default defineConfig({
  base: `/${repositoryName}/`,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|mp3|mp4/i.test(ext)) {
            return `assets/media/[name][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  publicDir: 'public'
})