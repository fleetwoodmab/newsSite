import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const dev = process.argv.includes('dev');

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
        appDir: 'app', // Required as the default is _app
        adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/newsSite" : "",
		},
    },
	preprocess: vitePreprocess(),

	extensions: ['.svelte', '.md'],
};

export default config;
