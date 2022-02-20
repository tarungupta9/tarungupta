module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./containers/**/*.{js,ts,jsx,tsx}",
		"./widgets/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				"primary-2": "var(--color-primary-2)",
				secondary: "var(--color-secondary)",
				tertiary: "var(--color-tertiary)",
				background: "var(--color-background)",
				"background-dark": "var(--color-background-dark)",
				outline: "var(--color-border)",
				hover: "var(--color-hover)",
				// "background-light": "var(--color-background-dark)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
