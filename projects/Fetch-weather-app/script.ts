// ! This is the interface for the data fetched
interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  rain?: {
    "1h": number;
    "3h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const weatherForm = document.getElementById("weatherForm") as HTMLFormElement;
const card = document.getElementById("card") as HTMLDivElement;
const errorDisplay = document.querySelector(
  "#errorDisplay"
) as HTMLParagraphElement;

// const apiKeyField = document.querySelector(".apiKeyField") as ;

// const eye = document.querySelector(".eye");

// let apiKey = null;
// let displayft = false;

// card.textContent = "";
// const dialog = document.querySelector("dialog");

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("dialogOpen");
//   dialog.showModal();
//   apiKeyField.focus();
// });

// dialog.addEventListener("cancel", (event) => {
//   event.preventDefault();
// });

// eye.addEventListener("click", () => {
//   toggleApiKeyVisibility();
// });

// apiKeyForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   apiKey = apiKeyField.value;
//   closeDialog();
// });

let apiKey = "2232101b7a4c133da51de8620fc86462";

// TODO This part allows me to create all the cards elements.
// TODO Must be refactor !

const cityDisplay = document.createElement("div");

const marker = document.createElement("img");
marker.src = "../../projects/fetch-weather-app/icons/cardIcons/marker.png";
marker.classList.add("h-5");
// marker.id = "marker";

cityDisplay.classList.add("font-bold");
cityDisplay.classList.add("text-2xl");
// cityDisplay.id = "cityDisplay";

const tempIcon = document.createElement("img");
tempIcon.src = "./icons/cardIcons/thermometer.svg";
tempIcon.classList.add("h-3");
tempIcon.classList.add("w-4");
// tempIcon.id = "tempIcon";

const tempDisplay = document.createElement("p");
tempDisplay.classList.add("flex");
tempDisplay.classList.add("items-center");
tempDisplay.classList.add("justify-center");
tempDisplay.classList.add("flex-row");

// tempDisplay.id = "tempDisplay";

weatherForm.addEventListener("submit", async (event) => {
  card.textContent = "";
  event.preventDefault();

  const cityEntered = (
    document.getElementById("cityEntered") as HTMLInputElement
  ).value;

  if (cityEntered === "") {
    displayError("Please enter a city 🏙️ !");
    return;
  }

  try {
    const response: WeatherData = await fetchData(cityEntered);
    card.classList.add("flex");
    displayData(response);
    errorDisplay.style.display = "none";
    // displayft = true;
    // displayFooter(footer, displayft);
  } catch (error) {
    displayError(error);
  }
});

// function toggleApiKeyVisibility() {
//   apiKeyField.type = apiKeyField.type === "password" ? "text" : "password";
//   const eyeSrc =
//     apiKeyField.type === "password"
//        "icons/passwordIcons/eye.svg"
//       : "icons/passwordIcons/crossedEye.svg";
//   const eyeTitle =
//     apiKeyField.type === "password" ? "Show the API key" : "Hide the API key";

//   eye.src = eyeSrc;
//   eye.title = eyeTitle;
//   apiKeyField.classList.toggle("apiKeyFieldText");
//   apiKeyField.classList.toggle("apiKeyField");
// }

// function closeDialog() {
//   dialog.close();
//   dialog.style.display = "none";
//   document.body.classList.remove("dialogOpen");
// }

async function fetchData(city: string) {
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let response: Response = await fetch(ApiUrl);

  // if (response.statusText == "Unauthorized") {
  //   throw new Error("Couldn't fetch data ❌, your API key 🔑 may be invalid !");
  // }

  if (!response.ok) {
    throw new Error("Couldn't fetch data ❌, try again !");
  } else {
    return await response.json();
  }
}

function displayError(error: unknown): void {
  errorDisplay.textContent = String(error);
  errorDisplay.classList.add("flex");
  {
    // errorDisplay.style.flexWrap = "wrap";
    // errorDisplay.style.flexDirection = "column";
    // errorDisplay.style.alignItems = "center";
    // errorDisplay.style.gap = "1rem";
    // errorDisplay.style.justifyContent = "center";
    // errorDisplay.style.textAlign = "center";
    // errorDisplay.style.fontFamily = "MV Boli";
    // errorDisplay.style.fontSize = "1.25rem";
    // errorDisplay.style.color = "red";
  }

  if (error === "TypeError: Failed to fetch") {
    errorDisplay.textContent =
      "It seems that you're not connected to internet 🌐. Please check you connexion";
  }

  //   if (
  //     error === "Error: Couldn't fetch data ❌, your API key 🔑 may be invalid !"
  //   ) {
  //     let retryButton = document.createElement("input");
  //     retryButton.type = "submit";
  //     retryButton.value = "Retry !";
  //     retryButton.classList.add("submitButtons");
  //     retryButton.addEventListener("click", () => {
  //       dialog.style.display = "flex";
  //       dialog.showModal();
  //       apiKeyField.value = "";
  //       apiKeyField.focus();
  //       errorDisplay.textContent = "";
  //       document.body.classList.add("dialogOpen");
  //       document.querySelector("#cityEntered").value = "";
  //     });
  //     errorDisplay.appendChild(retryButton);
  //   }
  // }
}

async function displayData(data: WeatherData) {
  const {
    name: city,
    main: { temp, humidity, feels_like },
    weather: [{ description, id, icon }],
    sys: { country },
    timezone: timezone,
    wind: { deg, speed },
  } = data;

  cityDisplay.textContent = `\u0009 ${city}`;
  card.appendChild(cityDisplay);

  // Standard temperature

  tempDisplay.textContent = ` ${(temp - 273.15).toFixed()}°C`;
  tempDisplay.prepend(tempIcon);
  card.appendChild(tempDisplay);

  // Humidity
  let humidityIcon = document.createElement("img");
  humidityIcon.src = "./icons/cardIcons/humidity.svg";
  humidityIcon.id = "humidityIcon";

  let humidityDisplay = document.createElement("p");
  humidityDisplay.id = "humidityDisplay";
  humidityDisplay.textContent = ` Humidity : ${humidity} %`;
  humidityDisplay.prepend(humidityIcon);
  card.appendChild(humidityDisplay);

  // Feels Like
  let feelsIcon = document.createElement("img");
  feelsIcon.src = "./icons/cardIcons/thermometer.svg";
  feelsIcon.id = "feelsIcon";

  let feelsLikeDisplay = document.createElement("p");
  feelsLikeDisplay.id = "feelsLikeDisplay";
  feelsLikeDisplay.textContent = ` Feels like : ${(
    feels_like - 273.15
  ).toFixed()}°C`;
  feelsLikeDisplay.prepend(feelsIcon);
  card.appendChild(feelsLikeDisplay);

  //Wind and speed wind
  let windIcon = document.createElement("img");
  windIcon.src = "./icons/cardIcons/wind.svg";
  windIcon.id = "windIcon";

  let speedIcon = document.createElement("img");
  speedIcon.src = "./icons/cardIcons/windsock.svg";
  speedIcon.id = "speedIcon";

  let windDisplay = document.createElement("d");
  let windSpan = document.createElement("span");
  let speedSpan = document.createElement("span");

  windSpan.classList.add("windSpan");
  speedSpan.classList.add("windSpan");

  windSpan.textContent = `  ${deg} degrees \t||\u0009`;
  speedSpan.textContent = `${speed} meters/s`;
  windDisplay.id = "windDisplay";

  windDisplay.prepend(windIcon);
  windDisplay.append(windSpan);
  windDisplay.append(speedSpan);
  windDisplay.append(speedIcon);
  card.appendChild(windDisplay);

  // Description
  let descriptionDisplay = document.createElement("p");
  descriptionDisplay.style.fontWeight = "900";
  descriptionDisplay.id = "descriptionDisplay";
  descriptionDisplay.textContent = description;
  descriptionDisplay.style.maxHeight = "40px";
  descriptionDisplay.style.display = "flex";
  card.appendChild(descriptionDisplay);

  // The country :
  let countryCode = country;
  let countryDisplay = document.createElement("p");
  countryDisplay.id = "countryCodeDisplay";

  // Fetch the country for ISO3166-1.alpha2.json
  let actualCountry = await fetchCountry(countryCode);
  cityDisplay.textContent += `, ${actualCountry}`;
  cityDisplay.prepend(marker);
  //Get the date of the location

  let locationDateDisplay = document.createElement("p");
  locationDateDisplay.id = "locationDateDisplay";
  card.appendChild(locationDateDisplay);

  function setting() {
    let locationDate = getLocationDate(timezone);
    let day = locationDate.getDate();
    let month = locationDate.getMonth();
    let year = locationDate.getFullYear();
    let weekDay = locationDate.getDay();

    month = stringMonths(month);
    weekDay = stringWeekDay(weekDay);

    let locationHour = pad(locationDate.getHours());
    let locationMins = pad(locationDate.getMinutes());
    let locationsecs = pad(locationDate.getSeconds());
    let timeIcon = document.createElement("img");
    timeIcon.src = "./icons/cardIcons/date.gif";
    timeIcon.id = "timeIcon";

    locationDateDisplay.textContent = ` ${weekDay} ${day} ${month} ${year}, ${locationHour}:${locationMins}:${locationsecs}`;
    locationDateDisplay.prepend(timeIcon);
  }

  setInterval(setting, 1000);
  displayEmoji(icon, descriptionDisplay);
}

async function fetchCountry(countryCode) {
  let countriesCode = await fetch("ISO3166-1.alpha2.json");
  countriesCode = await countriesCode.json();
  const countryName = await countriesCode[countryCode];
  return await countryName;
}

function getLocationDate(timezone) {
  let locationDate;
  let actualDate = new Date().toString();
  let firstSlice;
  let minus;
  if (actualDate.indexOf("+") == -1) {
    firstSlice = actualDate.slice(actualDate.indexOf("-") + 1);
    minus = true;
  } else {
    firstSlice = actualDate.slice(actualDate.indexOf("+") + 1);
  }

  let gmt = firstSlice.slice(0, firstSlice.indexOf(" "));
  gmt = Number(gmt);
  gmt = gmt / 100;

  /* The previous part get the user current gmt+value or gmt-value, I get this 'value'
    So if somebody hasn't the same timezone than me, it still works.*/

  if (minus) {
    locationDate = new Date(Date.now() + timezone * 1000 + 3600000 * gmt);
  } else {
    locationDate = new Date(Date.now() + timezone * 1000 - 3600000 * gmt);
  }
  return locationDate;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function stringMonths(month) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
}

function stringWeekDay(day) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

function padDate(day) {
  return day <= 9 ? "0" + day : day;
}

function displayEmoji(icon, descriptionDisplay) {
  let weatherIcon = document.createElement("img");
  weatherIcon.style.height = "50px";
  weatherIcon.style.width = "50px";
  weatherIcon.src = `./icons/Openweathermap/${icon}.svg`;
  weatherIcon.id = "weatherIcon";
  descriptionDisplay.appendChild(weatherIcon);

  let string = String(icon);
  let body = document.body;
  let sunOrMoon = document.querySelector("#sunOrMoon");
  let submitButtons = document.querySelectorAll(".submitButtons");
  if (string.indexOf("n") != -1) {
    body.classList.remove("dayBodyClass");
    body.classList.add("nightBodyClass");

    descriptionDisplay.style.color = "whitesmoke";
    marker.src = "./icons/cardIcons/markerNight.png";
    marker.style.height = "20px";
    sunOrMoon.src = "./icons/titleIcons/clear-night.svg";
    submitButtons.forEach((submitButton) => {
      submitButton.classList.add("submitNight");
    });
  } else {
    body.classList.remove("nightBodyClass");
    body.classList.add("dayBodyClass");

    sunOrMoon.src = "./icons/titleIcons/clear-day.svg";

    submitButtons.forEach((submitButton) => {
      submitButton.classList.remove("submitNight");
    });
  }
}

// function displayFooter(footer, displayft) {
//   if (displayft) {
//     footer.style.display = "flex";
//   }
// }
