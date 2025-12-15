import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F3EE",
        pearl: "#E6E7E8",
        charcoal: "#2B2B2B",
        muted: "#6B6E73",
        accent: "#1F4E5F",
      },
    },
  },
  plugins: [],
} satisfies Config;
