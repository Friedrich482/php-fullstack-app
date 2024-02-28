// ? This is the interface for the data fetched
import API_KEY from "./apiKey.js"
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

// ! Here the goal is to reference all the dom Elements without using abusively the document.querySelector() method
// ?I start by creating an array for each type of nodes ...
const DivsElements = [
  "card",
  "cityDisplay",
  "tempDisplay",
  "humidityDisplay",
  "feelsLikeDisplay",
  "windDisplay",
  "windDeg",
  "windSpeed",
  "descriptionDisplay",
  "locationDateDisplay",
];

const paragraphElements = [
  "errorDisplay",
  "cityText",
  "temperatureText",
  "humidityText",
  "temperatureFlText",
  "descriptionText",
  "countryText",
];

const imageElements = [
  "marker",
  "tempIcon",
  "humidityIcon",
  "feelsIcon",
  "windIcon",
  "speedIcon",
  "weatherIcon",
  "sunOrMoon",
];
// ? At this level, I create objects made by key: value pairs, one for each type of node...
const divsObject: { [key: string]: HTMLDivElement } = {};
const paragraphsObject: { [key: string]: HTMLParagraphElement } = {};
const imageObject: { [key: string]: HTMLImageElement } = {};
const spanObject: { [key: string]: HTMLSpanElement } = {};

//! This function allow me, for each value of each object, to make the value egal to the node

function createHTMLElements(htmlElementsArray: string[], htmlElementObject: { [key: string]: HTMLElement }): void {
  htmlElementsArray.forEach((htmlElement) => {
    htmlElementObject[htmlElement] = document.querySelector(
      `#${htmlElement}`
    ) as HTMLDivElement;
  });
}
createHTMLElements(DivsElements, divsObject);
createHTMLElements(paragraphElements, paragraphsObject);
createHTMLElements(imageElements, imageObject);

// ? And lastly I use the object destructuring to access each node more easily (I dont want to write object.element to access the element)  
const {card,
cityDisplay,
tempDisplay,
humidityDisplay,
feelsLikeDisplay,
windDisplay,
windDeg,
windSpeed,
descriptionDisplay,
locationDateDisplay} = divsObject

const {
  errorDisplay,
  cityText,
  temperatureText,
  humidityText,
  temperatureFlText,
  descriptionText,
  countryText,
} = paragraphsObject

const {marker,
tempIcon,
humidityIcon,
feelsIcon,
windIcon,
speedIcon,
weatherIcon,
sunOrMoon} = imageObject

// *The only form so no need to use the same technique than above...
const weatherForm = document.getElementById("weatherForm") as HTMLFormElement;

// *This input is alone here 
const submitButton = document.querySelector(
  "#submitButton"
) as HTMLInputElement;

const footer = document.querySelector("footer") as HTMLElement;
const imageFooter = footer.querySelector("img") as HTMLImageElement;
imageFooter.src = "../../assets/icons/rocket.gif";
footer.classList.add("hidden");

const apiKey: string = API_KEY;
let interval: number; // For the setInterval function later in the code

//?All Arrays for css classes
const flexCssClasses = ["flex", "items-center", "justify-center", "flex-row"];
const timeIconCssClasses = ["size-6", "rounded-lg"];
const errorDisplayCssClasses = [
  ...flexCssClasses,
  "flex-wrap",
  "flex-col",
  "gap-1",
  "text-center",
  "text-red-600",
];

// *These two functions are specially created to hidden or display elements (not toggle because it may lead to inappropriate behaviour)

function displayElement(element: HTMLElement): void {
  element.classList.remove("hidden");
  element.classList.add("flex");
}

function hiddenElement(element: HTMLElement): void {
  element.classList.remove("flex");
  element.classList.add("hidden");
}
const timeIcon = document.createElement("img");
timeIcon.src = "./icons/cardIcons/date.gif";
timeIcon.classList.add(...timeIconCssClasses, "ml-3");

//! The main form submission event 🚀

weatherForm.addEventListener("submit", async (event) => {
  clearInterval(interval);
  locationDateDisplay.classList.add("invisible");
  let cityEntered = (document.querySelector("#cityEntered") as HTMLInputElement)
    .value;

  event.preventDefault();

  if (cityEntered === "") {
    displayError("Please enter a city 🏙️ !");
    return;
  }

  try {
    hiddenElement(errorDisplay);
    const response: WeatherData = await fetchData(cityEntered);
    displayElement(card);
    displayData(response);
    footer.classList.remove("hidden");
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
  hiddenElement(card);
  errorDisplay.classList.remove("hidden");
  errorDisplay.classList.add(...errorDisplayCssClasses);
  if (error == "TypeError: NetworkError when attempting to fetch resource.") {
    errorDisplay.textContent =
      "It seems that you're not connected to internet 🌐. Please check you connexion";
    return;
  }

  errorDisplay.textContent = String(error);
}

async function displayData(data: WeatherData) {
  const {
    name: city,
    main: { temp, humidity, feels_like },
    weather: [{ description, icon }],
    sys: { country },
    timezone: timezone,
    wind: { deg, speed },
  } = data;
  cityText.innerHTML = `&nbsp;${city}`;

  temperatureText.textContent = `Temperature : ${(temp - 273.15).toFixed()}°C`;

  humidityText.textContent = ` Humidity : ${humidity} %`;

  temperatureFlText.textContent = ` Feels like : ${(
    feels_like - 273.15
  ).toFixed()}°C`;

  windDeg.textContent = `Wind Direction : ${deg} degrees`;
  windSpeed.textContent = `Wind Speed : ${speed} meters/s`;

  descriptionText.textContent = description;

  let countryCode = country;

  //? Fetch the country from ISO3166-1.alpha2.json

  let actualCountry = await fetchCountry(countryCode);

  cityText.innerHTML += `,&nbsp;${actualCountry}`;

  function setDate(): void {
    locationDateDisplay.innerHTML = "";
    let locationDate = getLocationDate(timezone);
    let day = locationDate.getDate();
    let year = locationDate.getFullYear();

    let month = stringMonths(locationDate.getMonth());
    let weekDay = stringWeekDay(locationDate.getDay());

    let locationHour = pad(locationDate.getHours());
    let locationMins = pad(locationDate.getMinutes());
    let locationsecs = pad(locationDate.getSeconds());

    locationDateDisplay.innerHTML = `<span>${weekDay}</span>
    <span>${day}</span>
    <span>${month}</span>
    <span>${year},</span>
    <div class="flex items-center justify-center">
      <span class="size-6 text-center">${locationHour}</span>:
      <span class="size-6 text-center">${locationMins}</span>:
      <span class="size-6 text-center">${locationsecs}</span
    </div>`;
    locationDateDisplay.classList.remove("invisible");
    locationDateDisplay.prepend(timeIcon);
  }

  interval = setInterval(setDate, 1000);
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

  if (icon.indexOf("n") != -1) {
    document.body.classList.add("weatherNightImg");
    document.body.classList.remove("weatherDayImg");

    marker.src = "./icons/cardIcons/markerNight.png";

    sunOrMoon.src = "./icons/titleIcons/clear-night.svg";
  } else {
    document.body.classList.add("weatherDayImg");
    document.body.classList.remove("weatherNightImg");

    marker.src = "./icons/cardIcons/marker.png";

    sunOrMoon.src = "./icons/titleIcons/clear-day.svg";
  }
}
