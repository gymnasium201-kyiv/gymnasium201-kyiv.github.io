// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://1test-gymnasium201-kyiv.github.io',
  integrations: [tailwind()]
})