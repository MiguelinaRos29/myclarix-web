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
        pearl: "#EDEBE6",
        charcoal: "#2B2B2B",
        muted: "#6B6E73",

        // ✅ Acento con más vida
        accent: "#1F4E5F",
        accentDark: "#163C4A",
        accentSoft: "rgba(31, 78, 95, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;

