import type { Config } from 'tailwindcss';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#00B4D8", /*Color segundario en cian para contrastar elementos*/
        darkBg: "#131424"
      },
      backgroundImage: {
        'gradient-cover': "linear-gradient(90.21deg, rgba(30, 58, 138, 0.5) 0%, rgba(37, 99, 235, 0.3) 100%)"
      }
    },
  },
  plugins: [],
} satisfies Config;