/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*{html,ts,php}",
    "./projects/space_calculator/*{html,ts,php}",
    "./projects/fetch-weather-app/*{html,ts,php}",
    "./projects/snake_game/*{html,ts,php}",
    "./projects/tic_tac_toe/*{html,ts,php}",
    "./projects/shifumi/*{html,ts,php}",
    "./projects/images_slider/*{html,ts,php}",
    "./projects/stopwatch/*{html,ts,php}",
    "./projects/new_york_clock/*{html,ts,php}",
    "./projects/to_do_list/*{html,ts,php}",
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
        "slider-custom": "540px",
      },
    },
  },
  plugins: [],
};
