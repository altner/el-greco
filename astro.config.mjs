import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://altner.github.io',
  base: '/el-greco',
  integrations: [tailwind()],
});
