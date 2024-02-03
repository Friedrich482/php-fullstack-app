// let visits = document.getElementById('visits');
// let visitsDisplayerButton = document.getElementById('visitsDisplayerButton');

// visitsDisplayerButton.addEventListener('click', () =>{
//    if(visits.style.display == 'none'){
//     visits.style.display = 'block';
//     visits.style.fontSize = '22px';
//     visits.style.border = '6px solid lightblue';
//     visits.style.borderRadius = '20px';

//     visitsDisplayerButton.innerHTML = '<i class="fi fi-rr-angle-up"></i>'
    
//     visitsDisplayerButton.style.color = 'red';
//     visitsDisplayerButton.style.minWidth = '90px';
//     visitsDisplayerButton.style.border = '6px solid lightblue';
//     visitsDisplayerButton.style.fontFamily = 'cursive';
//     visitsDisplayerButton.style.borderRadius = '20px';
//     visitsDisplayerButton.style.fontWeight = 'bold';
//     visitsDisplayerButton.style.fontSize = '22px';
//     visits.style.backgroundColor = 'black';
//     visitsDisplayerButton.style.backgroundColor = 'black';
//     visitsDisplayerButton.style.textAlign = 'center';
//    }
   
//    else{
//     visits.style.display = 'none';
//     visitsDisplayerButton.innerHTML = '<i class="fi fi-rr-angle-down">'
//    }
// })


// Logout button
const body = document.body
let logoutButton = document.querySelector('#logout');
let confirmDeconnexionDialog = document.querySelector('#confirmDeconnexionDialog');
let denyButton = document.querySelector('#denyButton');

logoutButton.addEventListener('click', () =>{
   displayDialog()
})

denyButton.addEventListener('click', () =>{
   hiddenDialog()
})

confirmDeconnexionDialog.addEventListener('cancel', () =>{
   hiddenDialog()
})

function displayDialog(){
   confirmDeconnexionDialog.showModal();
   confirmDeconnexionDialog.classList.remove("hidden");
   confirmDeconnexionDialog.classList.add("flex");
   body.classList.add("blur-sm")
}
function hiddenDialog(){
   confirmDeconnexionDialog.close();
   confirmDeconnexionDialog.classList.add("hidden");
   confirmDeconnexionDialog.classList.remove("flex");
   body.classList.remove("blur-sm")

}
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

const mainText = document.getElementById('mainText');
const animatedTextContent = mainText.innerHTML;
console.log(animatedTextContent)
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

// 
const calculatorWrapper = document.querySelector("#calculator-wrapper");
const calculator = document.querySelector("#calculator");
let oldContent = calculator.textContent
calculatorWrapper.addEventListener('mouseover', () =>{
   setTimeout(changeText, 500);
})

calculatorWrapper.addEventListener('mouseout', () =>{
   setTimeout(setOriginText, 500);
})

function changeText(){
   calculator.textContent = "New content";
}

function setOriginText(){
   calculator.textContent = oldContent;
}