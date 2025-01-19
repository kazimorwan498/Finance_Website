const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,jsx}",
	],
	theme: {
		container: { center: true },
		extend: {
			colors: {
				primary: "#772ab3",
				secondary: "#adb2b1",
				foreground: "#ffffff",
			},
			fontFamily: { mplus1: '"M PLUS 1", sans-serif' },
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};
