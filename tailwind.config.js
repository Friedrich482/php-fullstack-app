/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,php}','./login/*{html,js,php}', './home/*{html,js,php}', './include/*{html,php,js}', "./register/*{html,js,php}"],
  theme: {
    extend: {
      screens: {
        'sm-custom': '310px', 
        'mysql-custom' : '358px',
        // 'utils-custom' : 
      },
    },
  },
  plugins: [],
}

