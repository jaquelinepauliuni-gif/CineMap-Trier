// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jaquelinepauliuni-gif.github.io', // dein GitHub URL
  base: '/CineMap-Trier/', // Name deines Repos
  vite: {
    plugins: [tailwindcss()]
  }
});
