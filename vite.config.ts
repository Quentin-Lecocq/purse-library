import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PurseLibrary',
      fileName: (format) => `purse-library.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
    cssCodeSplit: false,
    cssMinify: true,
    target: 'esnext',
  },
  plugins: [cssInjectedByJsPlugin()],
  base: './',
  server: {
    open: '/example/index.html',
  },
  preview: {
    port: 4173,
    open: true,
  },
});
