/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				amaranth: {
					DEFAULT: '#E53645',
					50: '#FAD9DB',
					100: '#F8C7CB',
					200: '#F3A2A9',
					300: '#EE7E88',
					400: '#EA5A66',
					500: '#E53645',
					600: '#C91A29',
					700: '#97141F',
					800: '#660D15',
					900: '#34070B',
					950: '#1B0306'
				}
			}
		}
	},
	plugins: []
};
