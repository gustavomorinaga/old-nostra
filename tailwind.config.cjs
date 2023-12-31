/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				heading: ['Sora Variable', 'sans-serif'],
				sans: ['Inter Variable', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				serif: ['Roboto Slab Variable', 'sans-serif']
			},
			aspectRatio: {
				'semi-video': '85 / 64',
				'semi-square': '14 / 15'
			}
		}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				light: {
					primary: '#1d242d',
					secondary: '#dfb44f',
					accent: '#ffffff',
					neutral: '#2b3440',
					'base-100': '#ffffff',
					info: '#3abff8',
					success: '#36d399',
					warning: '#f97316',
					error: '#cc0d01',

					'--btn-text-case': 'normal'
				}
			}
		]
	}
};

module.exports = config;
