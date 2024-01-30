let visits = document.getElementById('visits');
let visitsDisplayerButton = document.getElementById('visitsDisplayerButton');

visitsDisplayerButton.addEventListener('click', () =>{
   if(visits.style.display == 'none'){
    visits.style.display = 'block';
    visits.style.fontSize = '22px';
    visits.style.border = '6px solid lightblue';
    visits.style.borderRadius = '20px';

    visitsDisplayerButton.innerHTML = '<i class="fi fi-rr-angle-up"></i>'
    
    visitsDisplayerButton.style.color = 'red';
    visitsDisplayerButton.style.minWidth = '90px';
    visitsDisplayerButton.style.border = '6px solid lightblue';
    visitsDisplayerButton.style.fontFamily = 'cursive';
    visitsDisplayerButton.style.borderRadius = '20px';
    visitsDisplayerButton.style.fontWeight = 'bold';
    visitsDisplayerButton.style.fontSize = '22px';
    visits.style.backgroundColor = 'black';
    visitsDisplayerButton.style.backgroundColor = 'black';
    visitsDisplayerButton.style.textAlign = 'center';
   }
   
   else{
    visits.style.display = 'none';
    visitsDisplayerButton.innerHTML = '<i class="fi fi-rr-angle-down">'
   }
})
// Logout button
let logoutButton = document.querySelector('#logout');
let confirmDeconnexionDialog = document.querySelector('#confirmDeconnexionDialog');
let denyButton = document.querySelector('#denyButton');

logoutButton.addEventListener('click', () =>{
   displayDialog()
})

denyButton.addEventListener('click', () =>{
   hiddenDialog()
})

function displayDialog(){
   confirmDeconnexionDialog.classList.remove("hidden");
   confirmDeconnexionDialog.classList.add("flex");
}
function hiddenDialog(){
   confirmDeconnexionDialog.classList.add("hidden");
   confirmDeconnexionDialog.classList.remove("flex");
}
// Animation for the title 

const animatedText = document.getElementById('animatedText');
const cursor = document.querySelector('.cursor');
const textContent = animatedText.innerText;
const textLength = textContent.length;
let charIndex = 0;
let reverse = false;

function animateText() {
  animatedText.innerHTML = textContent.slice(0, charIndex + 1) + '<span class="cursor animate-ping"></span>';
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
