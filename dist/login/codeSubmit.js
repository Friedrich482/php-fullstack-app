"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const codeForm = document.querySelector("#codeForm");
    const codeError = document.querySelector("#codeError");
    const codeInput = document.querySelector("#code");
    const defaultErrorCS = document.querySelector("#defaultError");
    codeForm.addEventListener("submit", (event) => {
        console.log("Form submission intercepted");
        event.preventDefault();
        toggleElementCS(codeError);
        codeError.textContent = "";
        const formData = new FormData(codeForm);
        fetch("codeSubmit_process.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
            if (data.error) {
                removeErrorFieldStyleCS(codeInput);
                if (data.message.includes("The code is incorrect <br> (ಥ _ ಥ)")) {
                    codeInput.focus();
                    toggleElementCS(codeError);
                    codeError.innerHTML = data.message;
                    errorFieldStyleCS(codeInput);
                }
                else {
                    codeInput.focus();
                    errorFieldStyleCS(codeInput);
                    toggleElementCS(defaultErrorCS);
                    defaultErrorCS.innerHTML = data.message;
                }
            }
            else {
                window.location.href = data.redirect;
            }
        })
            .catch((error) => console.error("Error : ", error));
    });
});
function toggleElementCS(element) {
    element.classList.remove("hidden");
    element.classList.add("visibleItem");
}
function removeErrorFieldStyleCS(element) {
    element.classList.remove(...cssProps1CS);
    element.classList.add(...cssProps2CS);
}
function errorFieldStyleCS(element) {
    element.classList.add(...cssProps1CS);
    element.classList.remove(...cssProps2CS);
}
let cssProps1CS = [
    "border-red-600",
    "shadow-lg",
    "shadow-rose-800",
    "hover:shadow-rose-800",
];
let cssProps2CS = [
    "hover:shadow-black",
    "border-b-purple-600",
    "hover:border-b-4",
];
