const container = document.querySelector("#container") as HTMLDivElement;
const displayTimeNY = document.querySelector("#displayTime") as HTMLDivElement;
const para1 = document.querySelector("#para1") as HTMLParagraphElement;
const para2 = document.querySelector("#para2") as HTMLParagraphElement;
const checkBox = document.querySelector("#inputMs") as HTMLInputElement;

function gettingTheDate() {
  let date = new Date();
  let hours: string | number = pad(date.getHours().toString());
  let minutes = pad(date.getMinutes().toString());
  let seconds = pad(date.getSeconds().toString());
  let milliseconds = padms(date.getMilliseconds().toString());
  let greeting;
  let amOrPm: string;

  if (Number(hours) <= 12) {
    greeting = "Good Morning !";
  } else if (Number(hours) > 12 && Number(hours) < 18) {
    greeting = "Good Afternoon !";
  } else if (Number(hours) >= 18 && Number(hours) < 22) {
    greeting = "Good Evening !";
  } else {
    greeting = "Good Night !";
  }

  function pad(unit: string) {
    return unit.length < 2 ? "0" + unit : unit;
  }
  function padms(unit: string) {
    if (unit.length < 2) {
      return "00" + unit;
    } else if (unit.length === 2) {
      return "0" + unit;
    } else {
      return unit;
    }
  }
  if (Number(hours) < 12) {
    amOrPm = "AM";
    hours = Number(hours) % 12 || 12;
  } else {
    amOrPm = "PM";
    hours = Number(hours) % 12 || 12;
  }
  hours = pad(hours.toString());
  if (checkBox.checked) {
    displayTimeNY.textContent = `${hours}:${minutes}:${seconds}:${milliseconds} ${amOrPm}`;
  } else {
    displayTimeNY.textContent = `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }
  para2.textContent = `${greeting}`;
  para1.innerHTML = `It is the : <br>${date.toDateString()}`;
}
setInterval(gettingTheDate, 1);

const footerNY = document.querySelector("footer") as HTMLElement;
footerNY.classList.add("text-white", "MV-boli", "backdrop-blur-lg");
const imageFooterNY = footer.querySelector("img") as HTMLImageElement;
imageFooterNY.src = "../../assets/icons/rocket.gif";
