import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
export default {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: colors.neutral,
				secondary: colors.stone,
			},
		},
	},
	plugins: [],
} satisfies Config;
