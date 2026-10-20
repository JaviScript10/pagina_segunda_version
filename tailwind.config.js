/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Tokens del brief, definidos en globals.css (:root)
        niebla: 'rgb(var(--color-niebla) / <alpha-value>)',
        papel: 'rgb(var(--color-papel) / <alpha-value>)',
        tinta: 'rgb(var(--color-tinta) / <alpha-value>)',
        calamina: 'rgb(var(--color-calamina) / <alpha-value>)',
        cerro: 'rgb(var(--color-cerro) / <alpha-value>)',
        ascensor: 'rgb(var(--color-ascensor) / <alpha-value>)',
        'verde-cerro': 'rgb(var(--color-verde-cerro) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-atkinson)', 'system-ui', 'sans-serif'],
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
      },
    },
  },
  plugins: [],
};
