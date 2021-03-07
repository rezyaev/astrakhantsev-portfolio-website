const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			borderWidth: {
				24: "24px",
			},
			width: {
				1.5: "0.375rem",
				128: "32rem",
			},
			height: {
				1.5: "0.375rem",
			},
			top: {
				2.5: "0.625rem",
			},
			colors: {
				"body-border-light": "#FFDF75",
				"body-border-dark": "#FFCF2E",
				trueGray: colors.trueGray,
			},
			fontFamily: {
				sans: ["IBM Plex Sans", "Helvetica", "Arial", "sans-serif"],
			},
			listStyleType: {
				dash: "'— '",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
