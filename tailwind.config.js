/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		fontFamily: {
			display: ["PermanentMarker"],
		},
		extend: {
			colors: {
				green: {
					100: "#a0c8c1",
					200: "#00e1bb",
					300: "#0a8b75",
					400: "#085346",
					600: "#03483d",
					800: "#013129",
				},
			},
		},
	},
	plugins: [],
}
