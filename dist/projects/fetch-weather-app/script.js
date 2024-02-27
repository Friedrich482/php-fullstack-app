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
const weatherForm = document.getElementById("weatherForm");
const submitButton = document.querySelector("#submitButton");
const card = document.getElementById("card");
const errorDisplay = document.querySelector("#errorDisplay");
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
const cityDisplay = document.querySelector("#cityDisplay");
const cityText = document.querySelector("#cityText");
const marker = document.querySelector("#marker");
const tempIcon = document.querySelector("#tempIcon");
const tempDisplay = document.querySelector("#tempDisplay");
const temperatureText = document.querySelector("#temperatureText");
const humidityIcon = document.querySelector("#humidityIcon");
const humidityDisplay = document.querySelector("humidityDisplay");
const humidityText = document.querySelector("#humidityText");
const feelsIcon = document.querySelector("#feelsIcon");
const feelsLikeDisplay = document.querySelector("#feelsLikeDisplay");
const temperatureFlText = document.querySelector("#temperatureFlText");
const windIcon = document.querySelector("#windIcon");
const speedIcon = document.querySelector("#speedIcon");
const windDisplay = document.querySelector("#windDisplay");
const windSpan = document.querySelector("#windSpan");
const speedSpan = document.querySelector("#speedSpan");
const descriptionDisplay = document.querySelector("#descriptionDisplay");
const descriptionText = document.querySelector("#descriptionText");
const countryDisplay = document.querySelector("#countryText");
const locationDateDisplay = document.querySelector("#locationDateDisplay");
const timeIcon = document.createElement("img");
timeIcon.src = "./icons/cardIcons/date.gif";
timeIcon.classList.add(...timeIconCssClasses, "mr-1");
const weatherIcon = document.querySelector("#weatherIcon");
const sunOrMoon = document.querySelector("#sunOrMoon");
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
