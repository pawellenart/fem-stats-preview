module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'white-main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'white-stat-headings': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif'],
        'lexend-deca': ['Lexend Deca', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
