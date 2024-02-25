// ? This is the interface for the data fetched
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
const submitButton = document.querySelector(
  "#submitButton"
) as HTMLInputElement;
const card = document.getElementById("card") as HTMLDivElement;
const errorDisplay = document.querySelector(
  "#errorDisplay"
) as HTMLParagraphElement;

let apiKey = "2232101b7a4c133da51de8620fc86462";

// TODO This part allows me to create all the cards elements.
// TODO Must be refactored !

//?All Arrays for css classes

let cityDisplayCssClasses = ["font-bold", "text-2xl"];
let tempIconCssClasses = ["h-3", "w-4"];
let flexCssClasses = ["flex", "items-center", "justify-center", "flex-row"];
let humidityIconCssClasses = ["size-8", "relative"];
let feelsIconCssClasses = ["h-7", "w-12"];
let windSpeedIconCssClasses = ["size-7", "relative"];
let windSpeedSpanCssClasses = ["relative", "bottom-1"];
let descriptionDisplayCssClasses = [
  "flex",
  "max-h-10",
  "font-bold",
  "text-white",
];

// *CityDisplay
const cityDisplay = document.createElement("div");

const marker = document.createElement("img");
marker.src = "../../projects/fetch-weather-app/icons/cardIcons/marker.png";
marker.classList.add("h-5");

cityDisplay.classList.add(...cityDisplayCssClasses);
// *tempIcon
const tempIcon = document.createElement("img");
tempIcon.src = "./icons/cardIcons/thermometer.svg";
tempIcon.classList.add(...tempIconCssClasses);

// *Standard temperature
const tempDisplay = document.createElement("p");
tempDisplay.classList.add(...flexCssClasses);

// *Humidity
const humidityIcon = document.createElement("img");
humidityIcon.src = "./icons/cardIcons/humidity.svg";
humidityIcon.classList.add(...humidityIconCssClasses);
// *Humidity display
const humidityDisplay = document.createElement("p");
humidityDisplay.classList.add(...flexCssClasses);

// *Feels Like
const feelsIcon = document.createElement("img");
feelsIcon.src = "./icons/cardIcons/thermometer.svg";
feelsIcon.classList.add(...feelsIconCssClasses);

const feelsLikeDisplay = document.createElement("p");
feelsLikeDisplay.classList.add(...flexCssClasses);

//*Wind and speed icons
const windIcon = document.createElement("img");
windIcon.src = "./icons/cardIcons/wind.svg";
windIcon.classList.add(...windSpeedIconCssClasses);

const speedIcon = document.createElement("img");
speedIcon.src = "./icons/cardIcons/windsock.svg";
speedIcon.classList.add(...windSpeedIconCssClasses);

const windDisplay = document.createElement("div");
const windSpan = document.createElement("span");
const speedSpan = document.createElement("span");

windSpan.classList.add(...windSpeedSpanCssClasses);
speedSpan.classList.add(...windSpeedSpanCssClasses);

// *Description display
const descriptionDisplay = document.createElement("p");
descriptionDisplay.classList.add(...descriptionDisplayCssClasses);

// *country display
const countryDisplay = document.createElement("p");

// *location date display
const locationDateDisplay = document.createElement("p");

// *Time icon
const timeIcon = document.createElement("img");
timeIcon.src = "./icons/cardIcons/date.gif";

// *Weather icon
const weatherIcon = document.createElement("img");
weatherForm.classList.add("size-12");

// *Sun or Moon Image
const sunOrMoon = document.querySelector("#sunOrMoon") as HTMLImageElement;

// !The main form submission event 🚀
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
  } catch (error) {
    displayError(error);
  }
});

async function fetchData(city: string) {
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let response: Response = await fetch(ApiUrl);

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

  tempDisplay.textContent = ` ${(temp - 273.15).toFixed()}°C`;
  tempDisplay.prepend(tempIcon);
  card.appendChild(tempDisplay);

  humidityDisplay.textContent = ` Humidity : ${humidity} %`;
  humidityDisplay.prepend(humidityIcon);
  card.appendChild(humidityDisplay);

  feelsLikeDisplay.textContent = ` Feels like : ${(
    feels_like - 273.15
  ).toFixed()}°C`;
  feelsLikeDisplay.prepend(feelsIcon);
  card.appendChild(feelsLikeDisplay);

  windSpan.textContent = `  ${deg} degrees \t||\u0009`;
  speedSpan.textContent = `${speed} meters/s`;

  windDisplay.prepend(windIcon);
  windDisplay.append(windSpan);
  windDisplay.append(speedSpan);
  windDisplay.append(speedIcon);
  card.appendChild(windDisplay);

  descriptionDisplay.textContent = description;
  card.appendChild(descriptionDisplay);

  let countryCode = country;

  // Fetch the country from ISO3166-1.alpha2.json

  let actualCountry = await fetchCountry(countryCode);

  cityDisplay.textContent += `, ${actualCountry}`;
  cityDisplay.prepend(marker);

  card.appendChild(locationDateDisplay);

  card.classList.toggle("hidden");
  card.classList.toggle("flex");

  function setting(): void {
    let locationDate = getLocationDate(timezone);
    let day = locationDate.getDate();
    let year = locationDate.getFullYear();
  
    let month = stringMonths(locationDate.getMonth());
    let weekDay = stringWeekDay(locationDate.getDay());
  
    let locationHour = pad(locationDate.getHours());
    let locationMins = pad(locationDate.getMinutes());
    let locationsecs = pad(locationDate.getSeconds());
  
    locationDateDisplay.textContent = ` ${weekDay} ${day} ${month} ${year}, ${locationHour}:${locationMins}:${locationsecs}`;
    locationDateDisplay.prepend(timeIcon);
  }
  
  setInterval(setting, 1000);
  displayEmoji(icon, descriptionDisplay);
}


type CountryCodes = {
  [countryCode: string]: string;
};

async function fetchCountry(countryCode: string): Promise<string> {
  let countriesCodeResponse = await fetch("ISO3166-1.alpha2.json");
  let countriesCode: CountryCodes = await countriesCodeResponse.json();
  const countryName = countriesCode[countryCode];
  return countryName;
}

function getLocationDate(timezone: number) {
  let locationDate: Date;
  let actualDate = new Date().toString();
  let firstSlice: string;
  let minus = true;
  if (actualDate.indexOf("+") == -1) {
    firstSlice = actualDate.slice(actualDate.indexOf("-") + 1);
  } else {
    firstSlice = actualDate.slice(actualDate.indexOf("+") + 1);
    minus = false;
  }
  let gmt = Number(firstSlice.slice(0, firstSlice.indexOf(" ")));
  gmt = gmt / 100;
  // !The previous part get the user current gmt+`value` or gmt-`value`, I get this 'value'
  // !So if somebody hasn't the same timezone than me, it still works.

  if (minus) {
    locationDate = new Date(Date.now() + timezone * 1000 + 3600000 * gmt);
  } else {
    locationDate = new Date(Date.now() + timezone * 1000 - 3600000 * gmt);
  }
  return locationDate;
}

function pad(unit: number) {
  return unit < 10 ? "0" + unit : unit;
}

function stringMonths(month: number): string {
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

function stringWeekDay(day: number): string {
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

function displayEmoji(icon: string, descriptionDisplay: HTMLParagraphElement) {
  weatherIcon.src = `./icons/Openweathermap/${icon}.svg`;
  descriptionDisplay.appendChild(weatherIcon);
  function toggleBodyClass(): void {
    document.body.classList.toggle("nightBodyClass");
    document.body.classList.toggle("dayBodyClass");
  }
  if (icon.indexOf("n") != -1) {
    toggleBodyClass();
    marker.src = "./icons/cardIcons/markerNight.png";

    sunOrMoon.src = "./icons/titleIcons/clear-night.svg";

    submitButton.classList.add("submitNight");
  } else {
    toggleBodyClass();
    sunOrMoon.src = "./icons/titleIcons/clear-day.svg";

    submitButton.classList.remove("submitNight");
  }
}