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
   `<div class="inline-block">${textContent.slice(0, charIndex + 1)}<span class="relative inline-block bg-gradient-to-tr cursor animate-ping from-purple-500 via-teal-500 to-pink-500 sm:top-5 sm:w-5 sm:h-5"></span></div>`;
  
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
