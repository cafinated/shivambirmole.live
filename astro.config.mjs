import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output, ready for Cloudflare (see README.md).
// Set SITE_URL to the real domain when you have it, e.g. SITE_URL=https://shivambirmole.com npm run build
// Canonical links, the sitemap, robots.txt and social previews all read it.
const site = process.env.SITE_URL ?? 'https://shivambirmole.live';

export default defineConfig({
  site,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
