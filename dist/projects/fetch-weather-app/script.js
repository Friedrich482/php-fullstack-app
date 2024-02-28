"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DivsElements = [
    "card",
    "cityDisplay",
    "tempDisplay",
    "humidityDisplay",
    "feelsLikeDisplay",
    "windDisplay",
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
const spanElements = ["windSpan", "speedSpan"];
const divsObject = {};
const paragraphsObject = {};
const imageObject = {};
const spanObject = {};
function createHTMLElements(htmlElementsArray, htmlElementObject) {
    htmlElementsArray.forEach((htmlElement) => {
        htmlElementObject[htmlElement] = document.querySelector(`#${htmlElement}`);
    });
}
createHTMLElements(DivsElements, divsObject);
createHTMLElements(paragraphElements, paragraphsObject);
createHTMLElements(imageElements, imageObject);
createHTMLElements(spanElements, spanObject);
const { card, cityDisplay, tempDisplay, humidityDisplay, feelsLikeDisplay, windDisplay, descriptionDisplay, locationDateDisplay } = divsObject;
const { errorDisplay, cityText, temperatureText, humidityText, temperatureFlText, descriptionText, countryText, } = paragraphsObject;
const { marker, tempIcon, humidityIcon, feelsIcon, windIcon, speedIcon, weatherIcon, sunOrMoon } = imageObject;
const { windSpan, speedSpan } = spanObject;
// *The only form
const weatherForm = document.getElementById("weatherForm");
// *This input is alone here
const submitButton = document.querySelector("#submitButton");
// const card = document.querySelector("#card") as HTMLDivElement;
// const errorDisplay = document.querySelector(
//   "#errorDisplay"
// ) as HTMLParagraphElement;
const apiKey = "2232101b7a4c133da51de8620fc86462";
let interval;
const footer = document.querySelector("footer");
const imageFooter = footer.querySelector("img");
imageFooter.src = "../../assets/icons/rocket.gif";
footer.classList.add("hidden");
// TODO This part allows me to create all the cards elements.
// TODO Must be refactored !
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
function displayElement(element) {
    element.classList.remove("hidden");
    element.classList.add("flex");
}
function hiddenElement(element) {
    element.classList.remove("flex");
    element.classList.add("hidden");
}
// const cityDisplay = document.querySelector("#cityDisplay") as HTMLDivElement;
// const cityText = document.querySelector("#cityText") as HTMLParagraphElement;
// const marker = document.querySelector("#marker") as HTMLImageElement;
// const tempIcon = document.querySelector("#tempIcon") as HTMLImageElement;
// const tempDisplay = document.querySelector("#tempDisplay") as HTMLDivElement;
// const temperatureText = document.querySelector(
//   "#temperatureText"
// ) as HTMLParagraphElement;
// const humidityIcon = document.querySelector(
//   "#humidityIcon"
// ) as HTMLImageElement;
// const humidityDisplay = document.querySelector(
//   "humidityDisplay"
// ) as HTMLDivElement;
// const humidityText = document.querySelector(
//   "#humidityText"
// ) as HTMLParagraphElement;
// const feelsIcon = document.querySelector("#feelsIcon") as HTMLImageElement;
// const feelsLikeDisplay = document.querySelector(
//   "#feelsLikeDisplay"
// ) as HTMLDivElement;
// const temperatureFlText = document.querySelector(
//   "#temperatureFlText"
// ) as HTMLParagraphElement;
// const windIcon = document.querySelector("#windIcon") as HTMLImageElement;
// const speedIcon = document.querySelector("#speedIcon") as HTMLImageElement;
// const windDisplay = document.querySelector("#windDisplay") as HTMLDivElement;
// const windSpan = document.querySelector("#windSpan") as HTMLSpanElement;
// const speedSpan = document.querySelector("#speedSpan") as HTMLSpanElement;
// const descriptionDisplay = document.querySelector(
//   "#descriptionDisplay"
// ) as HTMLDivElement;
// const descriptionText = document.querySelector(
//   "#descriptionText"
// ) as HTMLParagraphElement;
// const countryText = document.querySelector(
//   "#countryText"
// ) as HTMLParagraphElement;
// const locationDateDisplay = document.querySelector(
//   "#locationDateDisplay"
// ) as HTMLDivElement;
const timeIcon = document.createElement("img");
timeIcon.src = "./icons/cardIcons/date.gif";
timeIcon.classList.add(...timeIconCssClasses, "mr-1");
// const weatherIcon = document.querySelector("#weatherIcon") as HTMLImageElement;
// const sunOrMoon = document.querySelector("#sunOrMoon") as HTMLImageElement;
// !The main form submission event 🚀
weatherForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    clearInterval(interval);
    locationDateDisplay.classList.add("invisible");
    let cityEntered = document.querySelector("#cityEntered")
        .value;
    event.preventDefault();
    if (cityEntered === "") {
        displayError("Please enter a city 🏙️ !");
        return;
    }
    try {
        hiddenElement(errorDisplay);
        const response = yield fetchData(cityEntered);
        displayElement(card);
        displayData(response);
        footer.classList.remove("hidden");
    }
    catch (error) {
        displayError(error);
    }
}));
function fetchData(city) {
    return __awaiter(this, void 0, void 0, function* () {
        let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        let response = yield fetch(ApiUrl);
        if (!response.ok) {
            throw new Error("Couldn't fetch data ❌, try again !");
        }
        else {
            return yield response.json();
        }
    });
}
function displayError(error) {
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
function displayData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name: city, main: { temp, humidity, feels_like }, weather: [{ description, icon }], sys: { country }, timezone: timezone, wind: { deg, speed }, } = data;
        cityText.innerHTML = `&nbsp;${city}`;
        temperatureText.textContent = ` ${(temp - 273.15).toFixed()}°C`;
        humidityText.textContent = ` Humidity : ${humidity} %`;
        temperatureFlText.textContent = ` Feels like : ${(feels_like - 273.15).toFixed()}°C`;
        windSpan.innerHTML = `${deg} degrees ||&nbsp`;
        speedSpan.textContent = `${speed} meters/s`;
        descriptionText.textContent = description;
        let countryCode = country;
        //? Fetch the country from ISO3166-1.alpha2.json
        let actualCountry = yield fetchCountry(countryCode);
        cityText.textContent += `,${actualCountry}`;
        function setDate() {
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
    <span>${year}</span>,
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
    });
}
function fetchCountry(countryCode) {
    return __awaiter(this, void 0, void 0, function* () {
        let countriesCodeResponse = yield fetch("ISO3166-1.alpha2.json");
        let countriesCode = yield countriesCodeResponse.json();
        const countryName = countriesCode[countryCode];
        return countryName;
    });
}
function getLocationDate(timezone) {
    let locationDate;
    let actualDate = new Date().toString();
    let firstSlice;
    let minus = true;
    if (actualDate.indexOf("+") == -1) {
        firstSlice = actualDate.slice(actualDate.indexOf("-") + 1);
    }
    else {
        firstSlice = actualDate.slice(actualDate.indexOf("+") + 1);
        minus = false;
    }
    let gmt = Number(firstSlice.slice(0, firstSlice.indexOf(" ")));
    gmt = gmt / 100;
    // !The previous part get the user current gmt+`value` or gmt-`value`, I get this 'value'
    // !So if somebody hasn't the same timezone than me, it still works.
    if (minus) {
        locationDate = new Date(Date.now() + timezone * 1000 + 3600000 * gmt);
    }
    else {
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
function displayEmoji(icon, descriptionDisplay) {
    weatherIcon.src = `./icons/Openweathermap/${icon}.svg`;
    descriptionDisplay.appendChild(weatherIcon);
    if (icon.indexOf("n") != -1) {
        document.body.classList.add("weatherNightImg");
        document.body.classList.remove("weatherDayImg");
        marker.src = "./icons/cardIcons/markerNight.png";
        sunOrMoon.src = "./icons/titleIcons/clear-night.svg";
    }
    else {
        document.body.classList.add("weatherDayImg");
        document.body.classList.remove("weatherNightImg");
        marker.src = "./icons/cardIcons/marker.png";
        sunOrMoon.src = "./icons/titleIcons/clear-day.svg";
    }
}
