import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Troque SITE_URL pelo endereço .pages.dev efetivamente provisionado antes de publicar.
const site = process.env.SITE_URL || 'https://mobo-tech.pages.dev';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
});
