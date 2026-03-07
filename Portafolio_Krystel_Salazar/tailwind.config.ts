import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0b1020",
        darkPanel: "#131a2f",
        accent: "#8b5cf6",
        accentSoft: "#22d3ee",
      },
      boxShadow: {
        glow: "0 0 80px rgba(139, 92, 246, 0.22)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(139,92,246,0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.12), transparent 25%)",
      },
    },
  },
  plugins: [],
};

export default config;