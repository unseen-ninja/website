// @ts-check

import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://unseen.ninja',
	integrations: [icon(), mdx()],
});
