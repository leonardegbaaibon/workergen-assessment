import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'outset': '0px 0px 8px rgba(0, 0, 0, 0.2)',
      },
      invRad: {
        4.5: '1.125rem',
      },
    },
  },
  plugins: [
    require('@butterfail/tailwindcss-inverted-radius'),
  ],
} satisfies Config;
