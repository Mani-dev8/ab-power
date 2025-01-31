import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d4e0f1",
          200: "#a8c0e3",
          300: "#7da1d5",
          400: "#5181c7",
          500: "#2662b9",
          600: "#1e4e94",
          700: "#173b6f",
          800: "#0f274a",
          900: "#081425",
        },
      },
    },
  },
  plugins: [],
};
export default config;
