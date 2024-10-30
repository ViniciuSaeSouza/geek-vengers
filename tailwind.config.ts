import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        playWrite: ["Playwrite GB S", "cursive"],
        garamond: ['"EB Garamond"', 'serif'],
        kodchasan: ['Kodchasan', 'sans-serif'],
        luckiest: ['"Luckiest Guy"', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        radioCanada: ['"Radio Canada Big"', 'sans-serif'],
        anton: ['"Anton SC"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        redMain: "#E71E24",
        redCard: "#8A171B",
        redWanda: "#6F1114",
        blueCard: "#10284E",
        blackCard: "#0E0E0E"
      },
    },
  },
  plugins: [],
};

export default config;
