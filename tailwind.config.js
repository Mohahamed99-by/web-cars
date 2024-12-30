/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide': 'slide 2s linear infinite',
        'bounce-delayed': 'bounce 1s infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      colors: {
        'blue-400': '#1DA1F2',
        'blue-500': '#1DA1F2',
        'blue-600': '#1DA1F2',
        'blue-700': '#1DA1F2',
        'blue-800': '#1DA1F2',
        'blue-900': '#1DA1F2',
        'blue-100': '#1DA1F2',
        'blue-200': '#1DA1F2',
        'blue-300': '#1DA1F2',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
