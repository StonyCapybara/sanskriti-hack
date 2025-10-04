import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    colors: {
      purples: '#53295b',
      pinki: '#DDB3AF',
    },
    fontFamily: {},
    extend: {
        fontFamily: {
            oxanium: ["Oxanium", 'sans-serif']
        }
    },
  },
};

export default config;