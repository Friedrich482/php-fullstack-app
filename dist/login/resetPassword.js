"use strict";
const resetPasswordForm = document.querySelector("#resetPasswordForm");
const passwordError = document.querySelector("#passwordError");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const defaultErrorRP = document.querySelector("#defaultError");
document.addEventListener("DOMContentLoaded", () => {
    resetPasswordForm.addEventListener("submit", (event) => {
        console.log("Form submission intercepted");
        event.preventDefault();
        toggleElementRP(passwordError);
        passwordError.textContent = "";
        const formData = new FormData(resetPasswordForm);
        fetch("resetPassword_process.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
            if (data.error) {
                let inputs = [passwordInput, confirmPasswordInput];
                inputs.forEach((element) => {
                    removeErrorFieldStyleRP(element);
                });
                if (data.message.includes("Passwords don't match !")) {
                    passwordInput.focus();
                    toggleElementRP(passwordError);
                    passwordError.textContent = data.message;
                    errorFieldStyleRP(passwordInput);
                    errorFieldStyleRP(confirmPasswordInput);
                }
                else {
                    passwordInput.focus();
                    errorFieldStyleRP(passwordInput);
                    toggleElementRP(defaultErrorRP);
                    defaultErrorRP.textContent = data.message;
                }
            }
            else {
                window.location.href = data.redirect;
            }
        })
            .catch((error) => console.error(error));
    });
});
function toggleElementRP(element) {
    element.classList.remove("hidden");
    element.classList.add("visibleItem");
}
function removeErrorFieldStyleRP(element) {
    element.classList.remove(...cssProps1RP);
    element.classList.add(...cssProps2RP);
}
function errorFieldStyleRP(element) {
    element.classList.add(...cssProps1RP);
    element.classList.remove(...cssProps2RP);
}
let cssProps1RP = [
    "border-red-600",
    "shadow-lg",
    "shadow-rose-800",
    "hover:shadow-rose-800",
];
let cssProps2RP = [
    "hover:shadow-black",
    "border-b-purple-600",
    "hover:border-b-4",
];
const eyes = document.querySelectorAll(".eye-crossed");
eyes.forEach((eye) => {
    eye.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            confirmPasswordInput.type = "text";
            eyes.forEach((eye) => {
                eye.src = "../assets/eye/eye.svg";
                eye.title = "Hide the password";
            });
        }
        else {
            passwordInput.type = "password";
            confirmPasswordInput.type = "password";
            eyes.forEach((eye) => {
                eye.src = "../assets/eye/eye-crossed.svg";
                eye.title = "Display the password";
            });
        }
    });
});
