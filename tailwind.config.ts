import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#081A33',
        ocean: '#1572E8',
        teal: '#1AC8B7',
        gold: '#F2C94C',
        surface: '#111E3A',
        panel: '#152847'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(19, 55, 104, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
