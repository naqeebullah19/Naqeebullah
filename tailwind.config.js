/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8FF',
        surface: '#FFFFFF',
        'surface-low': '#F2F3FF',
        'surface-mid': '#E9EDFF',
        'surface-high': '#DEE2F4',
        primary: '#005DA7',
        'primary-dark': '#004883',
        'primary-light': '#2976C7',
        'on-primary': '#FFFFFF',
        secondary: '#4E635A',
        'secondary-container': '#CEE5DA',
        tertiary: '#6F5837',
        'tertiary-container': '#FEDDB3',
        'on-surface': '#161B28',
        'on-surface-variant': '#414751',
        outline: '#717783',
        'outline-variant': '#C1C7D3',
        border: '#DEE2F4',
        sage: '#CEE5DA',
        tan: '#FEDDB3',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1120px',
      },
      borderRadius: {
        card: '16px',
        'card-lg': '24px',
      },
      boxShadow: {
        card: '0px 4px 20px rgba(0,0,0,0.04)',
        'card-hover': '0px 8px 30px rgba(0,0,0,0.08)',
        subtle: '0px 2px 8px rgba(0,0,0,0.05)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
