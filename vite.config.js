import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/sass/app.scss', 'resources/ts/app.ts'],
      refresh: true,
    }),
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/ts'),
      '~': path.resolve(__dirname, 'resources/sass'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
})
