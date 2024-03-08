"use strict";
const slides = document.querySelectorAll(".slide");
const admireButton = document.querySelector("#admireButton");
const pins = document.querySelectorAll(".pinsItem");
let slideIndex = 0;
let intervalId;
let pinIndex = 0;
document.addEventListener("DOMContentLoaded", startSlides);
function startSlides() {
    if (slides.length > 0) {
        displayImage(slides[0]);
        intervalId = setInterval(nextSlide, 5000);
        addViolet(pins[0]);
    }
}
function showSlide() {
    if (slideIndex >= slides.length) {
        slideIndex = 0;
        pinIndex = 0;
    }
    else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
        pinIndex = pins.length - 1;
    }
    slides.forEach((slide) => {
        hiddenImage(slide);
    });
    pins.forEach((pin) => {
        removeViolet(pin);
    });
    displayImage(slides[slideIndex]);
    addViolet(pins[pinIndex]);
}
function prevSlide() {
    slideIndex -= 1;
    pinIndex -= 1;
    showSlide();
}
function nextSlide() {
    pinIndex += 1;
    slideIndex += 1;
    showSlide();
}
// ? Can't use toggle instead of remove or add otherwise unexpected behavior ...
function displayImage(image) {
    image.classList.remove("hidden");
    image.classList.add("flex");
}
function hiddenImage(image) {
    image.classList.add("hidden");
    image.classList.remove("flex");
}
admireButton.addEventListener("click", () => {
    clearInterval(intervalId);
});
function addViolet(element) {
    element.classList.add("bg-violet-600");
    element.classList.remove("bg-white");
}
function removeViolet(element) {
    element.classList.remove("bg-violet-600");
    element.classList.add("bg-white");
}
