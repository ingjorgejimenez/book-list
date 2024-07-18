/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '998px',
      lg: '1280px',
      xl: '1440px',
      xxl: '1920px',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        dark: 'var(--dark)',
        body: 'var(--body)',
      },
      zIndex: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.3)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
