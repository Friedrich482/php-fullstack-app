const displayScreen = document.getElementById(
  "displayScreen"
) as HTMLDivElement;
let egal = false;

managePar();

function appendToDisplay(element: string): void {
  if (egal) {
    clearDisplay();
    egal = false;
  }

  displayScreen.textContent += element;
}

function clearDisplay(): void {
  displayScreen.textContent = "";
}

function removeTrailingZeros(numberString: string, precision: number): string {
  let regex = new RegExp(`\\.?0{${precision},}$`);
  return numberString.replace(regex, "");
}

function calculate(): void {
  if (displayScreen.textContent === "") return;

  try {
    if (String(eval(displayScreen.textContent || "")).length > 8) {
      displayScreen.textContent = removeTrailingZeros(
        eval(displayScreen.textContent || "").toFixed(7),
        4
      );
    } else displayScreen.textContent = eval(displayScreen.textContent || "");
  } catch (error) {
    displayScreen.textContent = "ERROR";
  }
  egal = true;
}

function managePar(): void {
  const parButtons = document.querySelectorAll(".parButton");
  for (const button of parButtons) {
    button.addEventListener("click", () => {
      const value = button.textContent || "";
      displayScreen.textContent += value;
    });
  }
}

function eraser(): void {
  displayScreen.textContent = (displayScreen.textContent as string).slice(
    0,
    -1
  );
}

//Defining a clock for the calculator
const clock = document.querySelector<HTMLDivElement>("#clock");
const hoursDiv = document.querySelector<HTMLDivElement>("#hours");
const minsDiv = document.querySelector<HTMLDivElement>("#mins");
const secondsDiv = document.querySelector<HTMLDivElement>("#seconds");
const calcDateDiv = document.querySelector("#date") as HTMLDivElement;

let timeDivs = [clock, calcDateDiv];

function clocker() {
  let date = new Date();
  let hours: string = pad(date.getHours());
  let minutes: string = pad(date.getMinutes());
  let seconds: string = pad(date.getSeconds());

  function pad(unit: number): string {
    return unit < 10 ? "0" + unit : unit.toString();
  }

  if (hoursDiv)
    hoursDiv.innerHTML = `${hours} <span class="relative bottom-[3.5px]"> : &nbsp;</span>`;

  if (minsDiv)
    minsDiv.innerHTML = `${minutes} <span class="relative bottom-[3.5px]"> :</span>`;
  if (secondsDiv) secondsDiv.textContent = `${seconds}`;
}

let switched = false;
let realTime = setInterval(clocker, 1000);

function toggleTime() {
  if (!switched) {
    const date = new Date();
    if (calcDateDiv) calcDateDiv.textContent = `${date.toLocaleDateString()}`;
    clearInterval(realTime);
  }
  switched = !switched;
  toogleTimeDivs();
}

timeDivs.forEach((timeDiv) => {
  timeDiv?.addEventListener("click", toggleTime);
});

function toogleTimeDivs() {
  timeDivs.forEach((timeDiv) => {
    timeDiv?.classList.toggle("hidden");
    timeDiv?.classList.toggle("flex");
  });
}

window.addEventListener("keydown", (event) => {
  const key = event.key;
  if (Number(key) || key === "0") {
    appendToDisplay(key);
  }

  const otherKeys = ["(", ")", ".", "+", "-", "*", "/"];
  for (const otherKey of otherKeys) {
    if (key === otherKey) appendToDisplay(otherKey);
  }

  switch (key) {
    case "=":
      calculate();
      break;

    case "Enter":
      calculate();
      break;

    case "Backspace":
      eraser();
      break;

    case " ":
      clearDisplay();
      break;

    default:
      break; 
  }
});