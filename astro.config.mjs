import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import remarkPrefixBase from './scripts/remark-prefix-base.mjs';

export default defineConfig({
  site: 'https://jaquelinepauliuni-gif.github.io',
  base: '/CineMap-Trier/',

  trailingSlash: 'always',
  build: { format: 'directory' },

  markdown: {
    remarkPlugins: [
      remarkGfm,
      [remarkPrefixBase, { base: '/CineMap-Trier/' }],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

