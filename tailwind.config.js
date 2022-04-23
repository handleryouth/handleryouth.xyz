module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pinkiespurple: '#8a307f',
        lightblue: '#79a7d3',
        darkblue: '#6883bc',
      },
      screens: {
        smallDisplay: '350px',
      },
      keyframes: {
        'hue-rotate': {
          '0%': {
            filter: 'hue-rotate(360deg)',
          },
          '50%': {
            filter: 'hue-rotate(180deg)',
          },
          '100%': {
            filter: 'hue-rotate(0deg)',
          },
        },
      },
      animation: {
        'hue-rotate': 'hue-rotate 8s ease infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Inter',
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
}
