import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://loris-dinardo.github.io/blog-astro',
	base: '/blog-astro/',
	output: 'static',
	integrations: [mdx(), sitemap()],
});
