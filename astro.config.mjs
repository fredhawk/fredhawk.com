import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://fredhawk.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: 'nord',
			// Add custom languages
			// Note: Shiki has countless langs built-in, including .astro!
			// https://github.com/shikijs/shiki/blob/main/docs/languages.md
			langs: ['js', 'css', 'html', 'ts', 'astro', 'svelte', 'rust', 'bash'],
			// Enable word wrap to prevent horizontal scrolling
			wrap: true,
		},
	},
});
