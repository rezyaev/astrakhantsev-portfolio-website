module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			borderWidth: {
				24: "24px",
			},
			width: {
				body: "calc(100% - 48px)",
			},
			height: {
				body: "calc(100% - 48px)",
			},
			colors: {
				"body-border-light": "#FFDF75",
				"body-border-dark": "#FFCF2E",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
