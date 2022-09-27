/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import legacy from '@vitejs/plugin-legacy'
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
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue'],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['vant']
    },
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
})