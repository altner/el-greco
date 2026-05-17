/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        olive: {
          900: 'oklch(0.30 0.035 130)',
          700: 'oklch(0.42 0.045 130)',
          500: 'oklch(0.55 0.045 130)',
        },
        paper: 'oklch(0.965 0.012 85)',
        ink: {
          DEFAULT: 'oklch(0.22 0.012 60)',
          soft: 'oklch(0.42 0.010 60)',
          mute: 'oklch(0.58 0.010 60)',
        },
        rule: 'oklch(0.84 0.012 80)',
        terra: 'oklch(0.55 0.10 50)',
        veg: 'oklch(0.50 0.08 145)',
      },
    },
  },
  plugins: [],
};
