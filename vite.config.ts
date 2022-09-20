/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5100
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    target: "es2015",
  },
})