import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jaquelinepauliuni-gif.github.io',
  base: '/CineMap-Trier/',
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'replace-root-links',
        transformIndexHtml(html) {
          return html.replace(/(href|src)="\//g, `$1="${'/CineMap-Trier/'}`);
        },
      },
    ],
  },
});