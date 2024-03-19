# php_form_registration

My first application in php to register users. The goal is to integrate all my javascript mini projects inside a big crud application.

Technologies/tools/languages used :

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## To do

- [ ] Add a forgot password 🔑
- [ ] I need two pages here :
  - [x] The first one to ask the email to the user
  - [ ] The second one will be a page to say him that a mail has been sent to him and to check his mails. He will now fill two fiels and pass only if the two passwords matches.
- [x] Inside the forgot password, I will ask your email address
- [ ] Then send a random number with 6 digits (so between 100000 and 999999)
- [ ] The user will enter that number and will pass only if the number matches. After that the number will be put to zero in the DB.
- [ ] ~~For the registration, I will do the same thing.~~
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
- [x] If the user has alredy checked the one of the ping elements(especially the logout elements for the small and large screens navbars), if he reduce or increase the size of his screen and so, for example the display for small or large sreens occurs, the ping **WILL NO LONGER BE PRESENT**
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
- [x] For each level of diffculty, the speed of the snake will increase. Add that into the setInterval method by changing the snakespeed
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
- [x] Typecript
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

- [ ] The app will be deployed by default on vercel but if it is not possible, I will deploy it on the Docker Hub using Docker

This list will be updated depending on my progression through it.
