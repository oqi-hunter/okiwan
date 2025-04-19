import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serinjp: ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
