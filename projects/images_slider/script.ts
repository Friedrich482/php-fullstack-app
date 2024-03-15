const slides = document.querySelectorAll(
  ".slide",
) as NodeListOf<HTMLDivElement>;

const admireButton = document.querySelector(
  "#admireButton",
) as HTMLButtonElement;
const pins = document.querySelectorAll(
  ".pinsItem",
) as NodeListOf<HTMLDivElement>;
const leftButtonWrapper = document.querySelector(
  "#leftButtonWrapper",
) as HTMLDivElement;
const rightButtonWrapper = document.querySelector(
  "#rightButtonWrapper",
) as HTMLDivElement;

let slideIndex = 0;
let intervalId: number;
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
  } else if (slideIndex < 0) {
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

function displayImage(image: HTMLDivElement) {
  image.classList.remove("hidden");
  image.classList.add("flex");
}
function hiddenImage(image: HTMLDivElement) {
  image.classList.add("hidden");
  image.classList.remove("flex");
}
admireButton.addEventListener("click", () => {
  clearInterval(intervalId);
});

function addViolet(element: HTMLDivElement) {
  element.classList.add("bg-violet-600");
  element.classList.remove("bg-white");
}
function removeViolet(element: HTMLDivElement) {
  element.classList.remove("bg-violet-600");
  element.classList.add("bg-white");
}

const footerSlider = document.querySelector("footer") as HTMLElement;
footerSlider.classList.add("text-white", "MV-boli");
const imageFooterSlider = footer.querySelector("img") as HTMLImageElement;
imageFooterSlider.src = "../../assets/icons/rocket.svg";
footerSlider.classList.add("relative", "bottom-4");

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") nextSlide();
  else if (event.key === "ArrowLeft") prevSlide();
});

leftButtonWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
  prevSlide();
});
rightButtonWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
  nextSlide();
});
