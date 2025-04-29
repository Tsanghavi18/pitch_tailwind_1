/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        violetStart: '#5318eb',
        violetEnd: '#ab6ef9',
        'custom-gradient': 'linear-gradient(90deg, #5318eb, #ab6ef9)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #5318eb, #ab6ef9)',
      },
      fontFamily: {
        eina: ['Eina', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',
        'bounce-y': 'bounce-y 2s ease-in-out infinite',
      },
      

      
      
      
    },
  },
  plugins: [],
}

