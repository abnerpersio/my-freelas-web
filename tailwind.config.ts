import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ['primary-600']: '#03045e',
      primary: '#0077b6',
      ['primary-300']: '#00b4d8',
      ['primary-200']: '#90e0ef',
      gray: '#8492a6',
      light: '#f8f8f8',
      dark: '#1f1f1f',
    },
  },
  plugins: [],
  extend: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
} satisfies Config;
