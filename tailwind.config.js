module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
};
