let displayScreen = document.getElementById("displayScreen") as HTMLDivElement;
let egal: boolean = false;

function appendToDisplay(element: string) {
  if (egal) {
    clearDisplay();
    egal = false;
  }

  displayScreen.textContent += element;
}

function clearDisplay() {
  displayScreen.textContent = "";
}

function calculate() {
  let displayScreenContent: string = displayScreen.textContent;
  try {
    if (String(eval(displayScreen.textContent)).length > 8) {
      displayScreen.textContent = eval(displayScreen.textContent).toFixed(7);
      egal = true;
    } else {
      displayScreen.textContent = eval(displayScreen.textContent);
      egal = true;
    }
  } catch (error) {
    displayScreen.textContent = "ERROR";
    egal = true;
  }
}

function managePar() {
  const par = document.querySelectorAll(".parButton");
  par.forEach((elt) =>
    elt.addEventListener("click", () => {
      let value = elt.textContent;
      if (value === "(") {
        displayScreen.textContent += value;
      } else {
        displayScreen.textContent += value;
      }
    })
  );
}
managePar();
function eraser() {
  displayScreen.textContent = displayScreen.textContent.slice(0, -1);
}

//Defining a clock for the calculator
const clock = document.querySelector("#clock");
const hoursDiv = document.querySelector("#hours");
const minsDiv = document.querySelector("#mins");
const secondsDiv = document.querySelector("#seconds");
const dateDiv = document.querySelector("#date");

let timeDivs = [clock, dateDiv];

function clocker() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  function pad(unit) {
    return unit < 10 ? "0" + unit : unit;
  }

  hours = pad(hours);
  minutes = pad(minutes);
  seconds = pad(seconds);

  hoursDiv.innerHTML = `${hours}<span class="relative bottom-[3.5px]"> : &nbsp;</span>`;
  minsDiv.innerHTML = `${minutes}<span class="relative bottom-[3.5px]"> :</span>`;
  secondsDiv.innerHTML = `${seconds}`;
}

let switched = false;
let realTime = setInterval(clocker, 1000);

timeDivs.forEach((timeDiv) => {
  timeDiv.addEventListener("click", () => {
    if (!switched) {
      toogleTimeDivs();
      let date = new Date();
      dateDiv.textContent = `${date.toLocaleDateString()}`;
      clearInterval(realTime);
      switched = true;
    } else {
      toogleTimeDivs();
      realTime = setInterval(clocker, 1000);
      switched = false;
    }
  });
});
function toogleTimeDivs() {
  timeDivs.forEach((timeDiv) => {
    timeDiv.classList.toggle("hidden");
    timeDiv.classList.toggle("flex");
  });
}
