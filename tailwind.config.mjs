/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    backgroundColor: {
      "main--gradient": "linear-gradient(90deg, #0D7490, #121212)",
      "dark--card": "rgb(18, 18, 18)",
      "essential-subdued": "#727272",
      "essential-bright-accent": "#1ed760",
      "essential-negative": "#e91429",
      "essential-warning": "#ffa42b",
      "essential-positive": "#1ed760",
      "essential-announcement": "#0d72ea",
    },
    height: {
		"page": "100dvh"
	}
  },
  darkMode: "class",
  plugins: [],
};
