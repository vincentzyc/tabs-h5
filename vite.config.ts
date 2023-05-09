/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import legacy from '@vitejs/plugin-legacy'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
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
    }),
    sentryVitePlugin({
      org: "sentry",
      project: "tabsh5",
      authToken: '60d6e12135c14df8af9e97853fd1e53817129334af0241fc8ac140deed08be6c',
      release: 'tabsh5@1.0.0',
      deploy: {
        env: 'production'
      },
      setCommits: {
        auto: true
      },
      sourcemaps: {
        assets: "./dist/assets/**",
      },
      url:"http://101.33.201.93:9000/"
    }),
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