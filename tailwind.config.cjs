/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				shark: {
					DEFAULT: '#1A1D1F',
					50: '#AFB7BC',
					100: '#A4ADB3',
					200: '#8E99A0',
					300: '#78858D',
					400: '#647078',
					500: '#525B62',
					600: '#3F474B',
					700: '#2D3235',
					800: '#1A1D1F',
					900: '#000000'
				},
				fountain: {
					DEFAULT: '#61BFC3',
					50: '#E6F5F6',
					100: '#D7EFF0',
					200: '#BAE3E5',
					300: '#9CD7D9',
					400: '#7FCBCE',
					500: '#61BFC3',
					600: '#41A7AB',
					700: '#317F82',
					800: '#22575A',
					900: '#133031'
				},
				western: {
					DEFAULT: '#E6E2DB',
					50: '#FFFFFF',
					100: '#F7F5F3',
					200: '#E6E2DB',
					300: '#CFC7BA',
					400: '#B8AD99',
					500: '#A19278',
					600: '#85765C',
					700: '#635845',
					800: '#423B2E',
					900: '#211E17'
				},
				ordina: {
					DEFAULT: '#FF8133',
					50: '#FFF2EB',
					100: '#FFE6D6',
					200: '#FFCDAD',
					300: '#FFB385',
					400: '#FF9A5C',
					500: '#FF8133',
					600: '#FA6000',
					700: '#C24A00',
					800: '#8A3500',
					900: '#521F00'
				},
				north: {
					DEFAULT: '#1c325b',
					50: '#b1cac5',
					100: '#99d7cd',
					200: '#2b6797',
					300: '#1c325b'
				},
				north2: {
					DEFAULT: '#2b6797'
				},
				north3: {
					DEFAULT: '#b1cac5'
				},
				soprasteria: {
					DEFAULT: '#89289022',
					orange: '#FFB15D',
					red: '#CF022B',
					purpur: ' #892890 ',
					darkPurpur: '#4C1F82'
				},
				backgroundImage: {
					'gradient-primary': 'linear-gradient(to right,#4C1F82,#892890,#CF022B ,#FFB15D)'
				}
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
