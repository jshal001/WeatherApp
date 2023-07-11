/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/react-tailwindcss-select/dist/index.esm.js',
	],
	theme: {
		extend: {
			fontSize: {
				'11xl': '12rem',
			},
			screens: {
				'3xl': '1600px',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
