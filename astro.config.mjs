import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://jaquelinepauliuni-gif.github.io',
  base: '/CineMap-Trier',

  // optional, aber ok:
  trailingSlash: 'always',

  markdown: {
    remarkPlugins: [remarkGfm],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
