import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		cors: false,
		proxy: {
			'/available-tickets': 'https://naequina.com'
		}
	}
});
