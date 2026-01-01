import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Kita tembak langsung ke dalam folder src dan semua isinya
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;