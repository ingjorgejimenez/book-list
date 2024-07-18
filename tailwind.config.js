/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '998px',
      lg: '1280px',
      xl: '1440px',
      xxl: '1920px',
    },
    colors: {
      primary: 'var(--primary)',
    },
    extend: {
      zIndex: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [],
}
