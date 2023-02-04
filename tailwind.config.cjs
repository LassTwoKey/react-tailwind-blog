/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				'rubik': ['Rubik'],
				'rajdhani': ['Rajdhani']
			},
			colors: {
				dark: '#0B0917',
				darker: '#020312',
				gray: '#616161',
				grayer: '#0A0C18',
				darkGray: '#2b2a2a',
				backdrop: 'rgba(0,0,0,0.5)'
			},
			backgroundImage: {
				'banner': 'url("/img/banner-image.jpg")',
				'item': 'linear-gradient(360deg, rgb(10 10 19 / 98%), rgb(17 22 31 / 80%))'
			},
			boxShadow: {
				'item': '0px 0 2px rgb(2 3 18)'
			}
		}
	},
	plugins: []
}

