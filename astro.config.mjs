import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: {
            type: 'text',
            value: ' 🔗',
          },
        },
      ],
    ],
  },
  image: {
    domains: ['http://127.0.0.1:1337'],
  },
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
