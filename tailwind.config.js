/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'torch-red': {
					DEFAULT: '#FF2222',
					50: '#FFDADA',
					100: '#FFC5C5',
					200: '#FF9C9C',
					300: '#FF7474',
					400: '#FF4B4B',
					500: '#FF2222',
					600: '#E90000',
					700: '#B10000',
					800: '#790000',
					900: '#410000',
					950: '#250000'
				}
			}
		}
	},
	plugins: []
};
