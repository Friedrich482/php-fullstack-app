// Logout buttons (one at the bottom of the page and 
// the two others in the navbars 
// (vertical and horizontal))

const body = document.body;

const logoutButton = document.querySelector('#logout');
const logoutSmallScreens = document.querySelector("#logoutSmallScreens");
const logoutLargeScreens = document.querySelector("#logoutLargeScreens");

const confirmDeconnexionDialog = document.querySelector('#confirmDeconnexionDialog');
const denyButton = document.querySelector('#denyButton');

let logoutItems = [logoutLargeScreens, logoutSmallScreens, logoutButton]; 

logoutItems.forEach((item) =>{
   
   item.addEventListener('click', () =>{

      confirmDeconnexionDialog.showModal();
      toggleconfirmDeconnexionDialog();
   
   })
})


denyButton.addEventListener('click', () =>{

   confirmDeconnexionDialog.close();
   toggleconfirmDeconnexionDialog();

})

confirmDeconnexionDialog.addEventListener('cancel', () =>{

   confirmDeconnexionDialog.close();
   toggleconfirmDeconnexionDialog();

})

function toggleconfirmDeconnexionDialog(){

   confirmDeconnexionDialog.classList.toggle("hidden");
   confirmDeconnexionDialog.classList.toggle("flex");
   body.classList.toggle("blur-sm")

}
// Click on the navbars elements triggers the redirection to the liks inside them

// Large screens (large navbar)
const LargeHome = document.querySelector("#LargeHome");
const largeTools = document.querySelector("#largeTools");
const largeAbout = document.querySelector("#largeAbout");

// Small screens (small navbar)
const smallHome = document.querySelector("#smallHome");
const smallTools = document.querySelector("#smallTools");
const smallAbout = document.querySelector("#smallAbout");

let navbarSections = [LargeHome, largeTools, largeAbout, smallHome, smallTools, smallAbout];

navbarSections.forEach((section) =>{
   section.addEventListener("click", () =>{
      const link = section.querySelector("a");
      const redirectUrl = link.getAttribute("href");
      window.location.href = redirectUrl
   })
})

// Animation for the title 

const animatedText = document.getElementById('animatedText');
const cursor = document.querySelector('.cursor');
const textContent = animatedText.innerText;
const textLength = textContent.length;
let charIndex = 0;
let reverse = false;

function animateText() {
   animatedText.innerHTML = `<img src="../assets/icons/wave1.gif" alt="greeting" class="h-9 w-9 rounded-full sm:h-12 sm:w-12 relative bottom-1 sm:bottom-0 inline-block">` +
   `<div class="inline-block">${textContent.slice(0, charIndex + 1)}<span class="relative inline-block bg-gradient-to-tr cursor animate-ping from-purple-500 via-teal-500 to-pink-500  sm:w-5 sm:h-5"></span></div>`;
  
;
   charIndex = reverse ? charIndex - 1 : charIndex + 1;

   if (charIndex > textLength) {
      reverse = true;
   } 

   else if (charIndex < 0) {
      reverse = false;
   }

   const delay = charIndex === 0 || charIndex === textLength ? 1000 : 200;
   setTimeout(animateText, delay);
}

animateText();

// animation for the tag main text

const mainText = document.getElementById('mainText');
const animatedTextContent = mainText.innerHTML;
let mainTextCharIndex = 0;
let reverseMain = false;

function animatemainText() {
   const currentChar = animatedTextContent.charAt(mainTextCharIndex);
   const isLineBreak = currentChar === '<' && animatedTextContent.charAt(mainTextCharIndex + 1) === 'b';

   mainText.innerHTML = `${animatedTextContent.slice(0, mainTextCharIndex + 1)}<span class="relative inline-block  bg-gray-200 cursor1 animate-ping sm:w-5 sm:h-5" id="mainCursor"></span>`;
   mainTextCharIndex = reverseMain ? mainTextCharIndex - 1 : mainTextCharIndex + 1;

   if(mainTextCharIndex > animatedTextContent.length){
      const mainCursor = document.querySelector("#mainCursor");
      mainCursor.classList.add("hidden");
      return;
   }

   const delay = isLineBreak ? 1 : (mainTextCharIndex === 0 || mainTextCharIndex === animatedTextContent.length ? 1000 : 1);
   setTimeout(animatemainText, delay);
}

animatemainText();

// js for the menu burger button

const menuBurgerButton = document.querySelector("#menuBurgerButton");
const menuburgerImg = document.querySelector("#menuBurgerImg");
let menuburgerImgAlt = menuburgerImg.alt
const verticalNavbar = document.querySelector("#verticalNavbar");

menuBurgerButton.addEventListener("click", () =>{

   if(menuburgerImgAlt === "menu-burger icon"){
      menuburgerImg.src = "../assets/icons/navbarIcons/cross.png";
      menuburgerImgAlt = "cross icon";
      addVerticalNavbar()
   }
   
   else{
      menuburgerImg.src = "../assets/icons/navbarIcons/menu-burger.png";
      menuburgerImgAlt = "menu-burger icon";
      removeVerticalNavbar()
   }  
   
})

function addVerticalNavbar(){
   verticalNavbar.classList.toggle("opacity-0");
   verticalNavbar.classList.toggle("transit-final");

}

function removeVerticalNavbar(){
   verticalNavbar.classList.toggle("transit-final");
   setTimeout(() =>{
      verticalNavbar.classList.toggle("opacity-0");
   }, 250);
}



