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
				secondary: "var(--color-secondary)",
				tertiary: "var(--color-tertiary)",
				outline: "var(--color-border)",
				hover: "var(--color-hover)",
				// "background-light": "var(--color-background-dark)",
				/**
				 * stone-900, stone-800, stone-700
				 */
			},
			padding: {
				"1/2": "50%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
