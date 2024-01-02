import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://marco-codetkas.github.io/',
  base: '/marco-codetkas.github.io',
});