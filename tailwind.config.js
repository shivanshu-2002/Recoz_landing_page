/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
		keyframes: {
		  'trans-left': {
			'0%': {
			  marginLeft: '120vw',
			},
			'100%': {
			  marginLeft: '10vw',
			},
		  },
		  'trans-right': {
			'0%': {
			  marginLeft: '-120vw',
			},
			'100%': {
			  marginLeft: '10vw',
			},
		  }
		},
		animation: {
		  'trans-left': 'trans-left 0.5s ease',
		  'trans-right': 'trans-right 0.5s ease',
		},
		fontFamily:{
		   'SFPRODISPLAYREGULAR':['SFPRODISPLAYREGULAR','sans-serif']
		}
	  },
	},
	plugins: [],
  }
  
  