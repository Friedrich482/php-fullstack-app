/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*{html,ts,php}",
    "./projects/space_calculator/*{html,ts,php}",
    "./projects/fetch-weather-app/*{html,ts,php}",
    "./projects/snake_game/*{html,ts,php}",
    "./projects/tic_tac_toe/*{html,ts,php}",
    "./projects/shifumi/*{html,ts,php}",
    "./login/*{html,ts,php}",
    "./home/*{html,ts,php}",
    "./include/*{html,php,ts}",
    "./register/*{html,ts,php}",
  ],
  theme: {
    extend: {
      screens: {
        "sm-custom": "310px",
        "mysql-custom": "358px",
      },
    },
  },
  plugins: [],
};
