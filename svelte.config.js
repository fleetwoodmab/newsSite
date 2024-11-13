import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [ 
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
        adapter: adapter(),
      },
	preprocess: vitePreprocess(),

	extensions: ['.svelte', '.md'],
};

export default config;
