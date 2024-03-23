"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const defaultError = document.querySelector("#defaultError");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    loginForm.addEventListener("submit", (event) => {
        console.log("Form submission intercepted");
        event.preventDefault();
        toggleElement(usernameError);
        usernameError.textContent = "";
        toggleElement(passwordError);
        passwordError.textContent = "";
        const formData = new FormData(loginForm);
        fetch("login_process.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
            if (data.error) {
                let elts = [usernameInput, passwordInput];
                elts.forEach((elt) => {
                    removeErrorFieldStyle(elt);
                });
                if (data.message.includes("User not found!<br> (ಥ _ ಥ)")) {
                    usernameInput.focus();
                    toggleElement(usernameError);
                    usernameError.innerHTML = data.message;
                    errorFieldStyle(usernameInput);
                }
                else if (data.message.includes("Incorrect password! ❌")) {
                    passwordInput.focus();
                    toggleElement(passwordError);
                    passwordError.innerHTML = data.message;
                    errorFieldStyle(passwordInput);
                }
                else {
                    // In this case, (all the fields are empty), so it will display an appropriate message
                    usernameInput.focus();
                    errorFieldStyle(usernameInput);
                    errorFieldStyle(passwordInput);
                    toggleElement(defaultError);
                    defaultError.innerHTML = data.message;
                }
            }
            else {
                window.location.href = data.redirect;
            }
        })
            .catch((error) => console.error("Error:", error));
    });
});
function toggleElement(element) {
    element.classList.remove("hidden");
    element.classList.add("visibleItem");
}
let cssProps1 = [
    "border-red-600",
    "shadow-lg",
    "shadow-rose-800",
    "hover:shadow-rose-800",
];
let cssProps2 = [
    "hover:shadow-black",
    "border-b-purple-600",
    "hover:border-b-4",
];
function errorFieldStyle(element) {
    element.classList.add(...cssProps1);
    element.classList.remove(...cssProps2);
}
function removeErrorFieldStyle(element) {
    element.classList.remove(...cssProps1);
    element.classList.add(...cssProps2);
}
const eyeSlashed = document.querySelector("#eyeSlashed");
eyeSlashed.addEventListener("click", () => {
    const password = document.querySelector("#password");
    if (password.type === "password") {
        password.type = "text";
        eyeSlashed.src = "../assets/eye/eye.svg";
        eyeSlashed.title = "Hide the password";
    }
    else {
        password.type = "password";
        eyeSlashed.src = "../assets/eye/eye-crossed.svg";
        eyeSlashed.title = "Display the password";
    }
});
