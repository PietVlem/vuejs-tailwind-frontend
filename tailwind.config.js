/* const defaultTheme = require('tailwindcss/defaultTheme'); */

module.exports = {
  theme: {
    // Extend the default Tailwind config here
    extend: {
      colors: {
        brown: {
          '100': '#7F7E7D',
          '500': '#2F2C27',
        },
        red: '#E30A21',
        orange:{
          '100': '#FCF9F6',
          '300': '#FDF3EB',
          '400': '#FFE6D0',
          '500': '#EE730A',
        } 
      }
    },
    // Replace the default Tailwind config here
    screens: {
      'sm-only': {'max': '767px'},
      'sm': '576px',
      'md': '768px',
      'nm': '1000px',
      'lg': '1150px',
      'nav': '1340px',
      'xl': '1650px'
    }
  },
  corePlugins: {},
  plugins: [],
};
