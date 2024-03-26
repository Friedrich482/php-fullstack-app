<h1 style="text-align:center; font-size: 3rem"> Php Fullstack App</h1>

_A full stack php application that manages user
authentication, registration, login and even password forgotten._

Technologies/tools/languages used :

<div align=center style="display:flex; gap:2px; align-items:center; justify-content:center;
padding:0.25px;
flex-wrap:wrap;" >

<img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
alt="php-logo">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
alt="postgresql-badge">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
alt="php-logo">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
alt="php-logo">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
alt="php-logo">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
alt="php-logo">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"
alt="php-logo">

</div>

# Table of contents

- [Table of contents](#table-of-contents)
  - [Overview](#overview)
  - [Login Page](#login-page)
    - [Login Page : Features](#login-page--features)
  - [Register Page](#register-page)
    - [Register Page : Features](#register-page--features)
  - [Home Page](#home-page)
    - [Home Page : Features](#home-page--features)
  - [Profile Tab](#profile-tab)
  - [Log out Tab](#log-out-tab)
  - [Space Calculator 🚀](#space-calculator-)
  - [Comprehensive Weather app ⚡🌞🌪](#comprehensive-weather-app-)
  - [Full snake Game 🐍](#full-snake-game-)
  - [Tic tac Toe ⭕❌](#tic-tac-toe-)
  - [Shifumi game ✌🖐👊](#shifumi-game-)
  - [Images slider 🖼](#images-slider-)
  - [Dynamic Stopwatch ⏱](#dynamic-stopwatch-)
  - [New York Simple Clock ⌚](#new-york-simple-clock-)
  - [Classic To do List 📋](#classic-to-do-list-)
  - [Forgotten Password Management](#forgotten-password-management)
  - [Installation : Run locally](#installation--run-locally)
    - [Environment variables](#environment-variables)
  - [Project Roadmap](#project-roadmap)

## Overview

This project is initially an exercise to practice Php, Ajax, Tailwindcss,
Typescript and sass in a real life application like.
It has 3 major pages:

1. [Login page 🔑](#login-page)
2. [Register page 👤](#register-page)
3. [Home page 🏠](#home-page)

As database, for the registration, login, and other utilities, I used PostgreSQL.
On the home page, I added my main projects I built when I was learning
JavaScript :

- Space Calculator 🚀
- Comprehensive Weather app ⚡🌞🌪
- Full snake Game 🐍
- Tic tac Toe ⭕❌
- Shifumi game ✌🖐👊
- Images slider 🖼
- Dynamic Stopwatch ⏱
- New York Simple Clock ⌚
- Classic To do List 📋

Because I used tailwindcss CLI, I put SASS in the project
for a more pragmatically way to write CSS (especially mixins)

## Login Page

A fully responsive login page with a purple design.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Capture d’écran 2024-03-24 à 22.34.13-1.png" height="400" alt="small-screen-login-page-image">
<img src="./assets/img/Annotation 2024-03-24 223249-1.png" height=400 alt="large-screen-login-page-image">
</div>

<div style="display:flex; align-items:center;justify-content:center; margin-top:2rem;">
<img src="./assets/img/Annotation 2024-03-24 230300.png" height=200 alt="lighthouse-score" style="border:2px solid green">

</div>

### Login Page : Features

1. This page have two many fields :
   - Username
   - password (has hide/show password)
2. A forgot (link to the forgotten password section) password link that lead
   to another page to reset the password
3. A link to send the user to the register page if he is not registered yet

## Register Page

As the login page, it is also responsive and will adapt depending of your screen.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Capture d’écran 2024-03-24 à 23.33.46.png" height="400" alt="small-screen-register-page-image">
<img src="./assets/img/Annotation 2024-03-24 233308.png" height=400 alt="large-screen-register-page-image">
</div>

<div style="display:flex; align-items:center;justify-content:center; margin-top:2rem;">
<img src="./assets/img/Annotation 2024-03-24 233453.png" height=200 alt="lighthouse-score" style="border:2px solid green">

</div>

### Register Page : Features

1. Here, three fields:

   - Email address
   - Username
   - Password (at least 8 characters) and also hide/show 👁 option

2. A link to the login page if the user has already signed in

## Home Page

Responsive (naturally). The purple design is kept.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Annotation 2024-03-24 234012.png" height="400" alt="small-screen-register-page-image">
<img src="./assets/img/Annotation 2024-03-24 233941.png" height=400 alt="large-screen-register-page-image">
</div>

<div style="display:flex; align-items:center;justify-content:center; margin-top:2rem;">
<img src="./assets/img/Annotation 2024-03-24 234112.png" height=200 alt="lighthouse-score" style="border:2px solid green">

</div>

### Home Page : Features

1. A navbar that will change depending of the screen you have.It has 5 tabs :

   - Home 🏠
   - Profile 👤
   - Tools ⚙
   - About
   - Log out

On big screens (width >= 640px), it will be a normal navbar horizontal.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

  <img src="./assets/img/Annotation 2024-03-24 234638.png" height=75 alt="horizontal-navbar-image">

</div>

On small screens, it is a menu burger that displays a vertical navbar.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Annotation 2024-03-24 234848.png" height=400 alt="vertical-navbar-image">

</div>

2. The main title has an animation of cursor typing. It loops infinitely

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Annotation 2024-03-24 235024.png" height=50 alt="lighthouse-score">

</div>

3. A bouncing button that leads to the project grid
4. Project grids : all my JS projects are displayed as a grid of card.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:1rem">

<img src="./assets/img/Annotation 2024-03-24 235558.png" height="400" alt="small-screen-grid-tools-image">
<img src="./assets/img/Annotation 2024-03-24 235507.png" height=400 alt="large-screen-grid-tools-image">
</div>

5. A logout button. It opens a dialog that ask the user to confirm the logout
6. A "back to top" button able to scale depending of the user's screen width.

## Profile Tab

This tab is quite special, it will open a dialog that make a brief recap of the
user current stats. Here are the stats shown :

- Username
- Number of visits : this counter will increment each time you visit the main page
- Best Score at snake game
- Best Score at Rock-Paper-Scissors game (shifumi)
- And also the date

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Annotation 2024-03-25 000331.png" height=400 alt="profile-dialog-image">

</div>

## Log out Tab

It behaves exactly like the logout button at the bottom of the page

## Space Calculator 🚀

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:1rem">

<img src="./assets/img/Annotation 2024-03-25 001200.png" height="400" alt="space-calculator-image">
<img src="./assets/img/Annotation 2024-03-25 001224.png" height=400 alt="space-calculator-image">
</div>

A calculator with a good-looking design that performs basic operations : addition,
substraction, multiplication, division

As a personal touch, I added a clock on the top of the calculator (the clock).

If you click on it, it will change and display the date in DD/MM/YYYY format.
Click an another time to go back to default state.

## Comprehensive Weather app ⚡🌞🌪

A readaptation of my weather app project on github(link). Enter the
name of the city and GO ! A simple design with animated icons to add some style.
List of all parameters rendered when you query a city :

1. **Location** (city, town, ...) & **Country**
2. **Temperature** in Celsius degrees
3. **Feels Like** also in Celsius degrees
4. **Humidity**
5. **Wind Direction**
6. **Speed Direction**
7. **Description** (clear sky, rainy, foggy, ...)
8. **The date and time** at the place queried

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Annotation 2024-03-25 001612.png" height=400 width=400 alt="weather-app-image-night">
<img src="./assets/img/Annotation 2024-03-25 001552.png" height=400 width=400 alt="weather-app-image-day">

</div>

## Full snake Game 🐍

A complete snake game with many features. You can choose one between three
levels of difficulty : easy, normal and hard

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Annotation 2024-03-25 002000.png" height=400 alt="snake-start-dialog-image">
<img src="./assets/img/Annotation 2024-03-25 002150.png" height=400 width=400 alt="snake-game-in-game-image">

</div>

Here, audios are integrated. Different sounds will play
(start, movement, eating, lose).
If you lose, an another dialog will open

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 002204.png" height=400 alt="restart-snake-game-dialog-image">

</div>

And ask you if you want to replay.
Your best score will be registered, store in the database and shown, as I mentioned
before, in your profile dialog. It is not responsive, so you need a screen at
least 600 px large.

## Tic tac Toe ⭕❌

Tic tac toe game, but with swipe SFX. Play and admire the bright city behind you.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 002521.png" height=400 alt="tic-tac-toe-game-image">

</div>

This game need two players. When one of them wins, a dialog will popup
and ask for retry or quit the game.

## Shifumi game ✌🖐👊

Rock Paper Scissors game against the Computer. Purple design is back.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 002647.png" height=400 alt="tic-tac-toe-game-image">

</div>

The rules are simple : to win, your score must be higher than computer's score.
You can stop a any moment by pressing the "Quit game" button. A dialog
(another one) will popup and ask you to confirm.

Similarly to the snake game, your best score will be registered in the database
and shown on the home page in the user's profile

## Images slider 🖼

Welcome in my short collection of city images.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center">

<img src="./assets/img/Annotation 2024-03-25 002819.png" height=400 alt="large-screen-images-slider-image">
<img src="./assets/img/Annotation 2024-03-25 002857.png" height=400 alt="small-screen-images-slider-image">

</div>

You can stop the scrolling effect by clicking on the admire button.
To navigate through the slider, you can use the arrow buttons or directly the
LEFT and RIGHT arrow key. This project is fully responsive.

## Dynamic Stopwatch ⏱

A stopwatch with three (3) main options:

- Start
- Pause
- Reset

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 003707.png" height=400 alt="stopwatch-image">
<img src="./assets/img/Annotation 2024-03-25 003633.png" height=400 alt="stopwatch-hover-image">

</div>

Lighting effect when you hover the clock image.

## New York Simple Clock ⌚

A simple clock that display :

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 003941.png" height=300 alt="NYC-clock-image">

</div>

- current time code HH:MM:SS and you can add the milliseconds
- A greeting depending of the moment of the day
- The date on, the format DayOfWeek Month Day Year
- an option to show or hide milliseconds

## Classic To do List 📋

The classic

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 004158.png" height=300 alt="To-do-list-image">

</div>

## Forgotten Password Management

On the login page you have the option <span style="color: red">Forgot password</span>

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 004541.png" height=400 alt="forgotten-password-image">

</div>
Click on it and you will be redirected to a page that asks you your email address.
Provide it and submit.
You will receive an email Friedrich Corner that gives you a code to reset the password.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 004601.png" height=400 alt="code-submit-image">

</div>

After entered the right code, you will be redirected to the last page
that needs the new password. Confirm it and submit.

<div style="display:flex; gap:4rem; align-items:center; justify-content:center; margin-bottom:2rem;">

<img src="./assets/img/Annotation 2024-03-25 004640.png" height=400 alt="reset-password-image">

</div>

You will be back on the login page.
Congratulations, your password has been reset.

## Installation : Run locally

You can run the project locally. Start by cloning the
repository with the command :

```code
  git clone https://github.com/Friedrich482/php-fullstack-app.git
```

After install the npm dependencies via :

```code
  npm install
```

Also **install php** on your local machine.

You will need a local server. Because it is PHP, I recommend you applications
like [MAMP](https://www.mamp.info/en/windows/) or [XAMPP](https://www.apachefriends.org/fr/index.html).
They will install a local **Apache Server** to serve the project.
Personally I prefer MAMP.

After that, you also need PHP dependencies installed via Composer.
Install them with the command :

```code
  php composer.phar update
```

### Environment variables

If you are running the project locally, you will need to create two .env files
based on the .env.example files in the ```login``` and the ```include``` folders.

- login folder :

  ``` code
      mailUsername = "example@gmail.com" # The email address goes here
      mailPassword = "xxxx xxxx xxxx xxxx" # Your code for smtp server
      mailAddress = "example@gmail.com" # The email address also goes here
      mailName = "example Example" # Your email username
  ```

I need to add some precisions here. In fact, I used the [PHPMailer](https://github.com/PHPMailer/PHPMailer)
package in order to send mail for the reset password option. To run in local,
  you'll need tour own **SMTP Server**. Create one using Gmail. And fill the
   template with the data specified.

- include folder :

 ``` code
      dbServer = "localhost"
      dbUser = "postgres" # This is the username by default with a postgres database
      dbPass = "password" # The password for your database goes here
      dbName = "users_data" # The database name, I named it users_data
 ```

And also there is a ```apiKey.example.json``` file in the ```projects/fetch-weather-app```

```json
{"API_KEY" : "YOUR_OPENWEATHER_MAP_API_KEY"}
```

I used a key from [openweathermap.org](https://openweathermap.org/). So to run 
locally, you'll need your own key. Go there and subscribe (it is free) to get 
yours. After come back and just rename the ```apiKey.example.json``` into ```apiKey.json``` and paste your API key inside.

## Project Roadmap

- [x] Add a forgot password 🔑
- [x] I need two pages here :
  - [x] The first one to ask the email to the user
  - [x] The second one will be a page to say him that a mail has been sent to him and to check his mails.
        He will now fill
  - [x] two fields and pass only if the two passwords matches.
- [x] Inside the forgot password, I will ask your email address
- [x] Then send a random number with 6 digits (so between 100000 and 999999)
- [x] The user will enter that number and will pass only if the number matches. After that the number will be put to zero in the DB.
- [x] ~~For the registration, I will do the same thing.~~
- [x] a nice animation to the welcome message 👋 when logging or registering. It needs to be multicolor and chars will display one after the other
- [x] a navbar (if possible) on the home page
- [ ] ~~the tools will be classified by category : game 🎮, weather app ☀, calculator 🖩, to do-list, and so on~~
- [x] All the games and utilities as ~~flex~~ grid 💪 elements (and their behavior should be responsive) (Here improvements are coming )
- [x] a different page for each tool
- [ ] ~~the background image may change depending of the moment of the day : sunrise 🌅, day ☀, sunset 🌇, night 🌙~~ (_canceled_)
- [ ] ~~The counter of visits will be attached to an other element (possibly the navbar, and so it will no more be so messy positionned)~~
- [ ] ~~I should think to make the footer 🦶 mobile (animation 🎞)~~
- [ ] ~~display the time in the navbar, eventually~~
- [x] The time will now appear in the Profile tab.
- [x] the to-do-list must use the LocalStorage
- [x] For the log out, a dialog 💬 should pop up ( maybe a blur effect will be interesting, in background )
- [x] The navbar should contain profile with infos about user, tools ( in many sections ) and logout
- [x] The infos like counter of visits will be in Profile
- [x] The "go back to top" button may be set as fixed element, so it will display at the bottom of the page as soon as we quit the top
- [x] If we click on the DOM elements that have the notification **ping**, it disappears and for the _Profile_ sections, a dialog 💬 will open and display infos about the users
- [x] If the user has already checked the one of the ping elements(especially the logout elements for the small and large screens navbars), if he reduce or increase the size of his screen and so, for example the display for small or large sreens occurs, the ping **WILL NO LONGER BE PRESENT**
- [x] Added the simple calculator file
- [x] Add Typescript instead of vanilla JavaScript for the calculator
- [x] Add Typescript instead of vanilla JavaScript for the home page
- [x] Correct all the errors for the home.ts page
- [x] Now the next mission is to add ts for the login page
- [x] And correct all the (**potential**) errors
- [x] And after that the register page
- [x] And there too, fix every single squiggled line
- [x] Now it is the turn of the weather app. This is probably the biggest 💪 refactor of all
- [x] Firstly, let's use _tailwindcss_ in the project
- [x] And after **typescript**
- [x] By the way refactor the structure of the page for a better experience
- [x] Turn of the snake game
- [x] Much easier because it has less code
- [x] The same : tailwindcss first
- [x] And after typescript
- [ ] ~~Disable the buttons on the the when the player is focused on the game. What I want to say is that if the game starts, the movement buttons can't interact with other parts of the page~~
- [x] Open a **dialog** when the player arrives to ask him level of difficulty. They will be ranked in :
  - easy
  - normal
  - hard 💪
- [x] For each level of difficulty, the speed of the snake will increase. Add that into the setInterval method by changing the snakespeed
- [x] While the player restarts the game and the countdown is displayed, the restart button (**Enter key** or **Restart Button** itself) must be disabled to avoid time intervals overlapping
- [x] My other idea is to play a song when:

  - [x] You lose
  - [x] You eat a food
  - [x] You change direction
  - [x] Game over
  - [] ~~You beat your own high score (_PHP needed_)~~

- [x] Now the Tic Tac Toe Game...
- [x] As always tailwind CSS first
- [x] And after TypeScript
- [x] Maybe here too, I will add sounds 🎵
- [x] The 5th project is the shifumi game. Also not too much code...
- [x] Tailwind CSS
- [x] TypeScript
- [x] After the **images slider** project
- [x] Tailwind CSS
- [x] TypeScript
- [x] The stopwatch is the following project
- [x] Like always:
  - [x] Tailwind CSS
  - [x] Typescript
- [x] New york clock : all the habitual stuff
- [x] To do list : the same thing here
- [x] improve LightHouse score on each single page of the app:

  - [x] replace the rocket gif image by another one
  - [x] replace all images by their .avif of .webP version

- [ ] The app will be deployed by default on vercel
- [x] Todo : add the lighthouse score for the main pages

This list will be updated depending on my progression through it.
