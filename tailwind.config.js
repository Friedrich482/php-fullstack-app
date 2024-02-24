/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,php}', './projects/space_calculator/*{html,ts,php}', './projects/fetch-weather-app/*{html,ts,php}', './login/*{html,ts,php}', './home/*{html,ts,php}', './include/*{html,php,ts}', "./register/*{html,ts,php}"],
  theme: {
    extend: {
      screens: {
        'sm-custom': '310px', 
        'mysql-custom' : '358px',
      },
    },
  },
  plugins: [],
}

