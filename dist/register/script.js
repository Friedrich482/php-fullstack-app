"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const emailError = document.querySelector("#emailError");
    const usernameError = document.getElementById("usernameError");
    const defaultError = document.querySelector("#defaultError");
    registerForm.addEventListener("submit", (event) => {
        console.log("Form submission intercepted");
        event.preventDefault();
        toggleLabel(emailError);
        emailError.textContent = "";
        toggleLabel(usernameError);
        usernameError.textContent = "";
        const formData = new FormData(registerForm);
        fetch("register_process.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
            if (data.error) {
                let elts = [emailInput, usernameInput, passwordInput];
                elts.forEach((elt) => {
                    deleteErrorFieldStyle(elt);
                });
                if (data.message.includes("This email is already taken ❌")) {
                    emailInput.focus();
                    addErrorFieldStyle(emailInput);
                    toggleLabel(emailError);
                    emailError.textContent = data.message;
                }
                else if (data.message.includes("This username is already taken ❌")) {
                    usernameInput.focus();
                    addErrorFieldStyle(usernameInput);
                    toggleLabel(usernameError);
                    usernameError.textContent = data.message;
                }
                else {
                    // In this case, (all the fields are empty), so it will display an appropriate message
                    emailInput.focus();
                    addErrorFieldStyle(emailInput);
                    addErrorFieldStyle(usernameInput);
                    addErrorFieldStyle(passwordInput);
                    toggleLabel(defaultError);
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
function toggleLabel(element) {
    element.classList.remove("hidden");
    element.classList.add("visibleItem");
}
function addErrorFieldStyle(element) {
    element.classList.add("border-red-600");
    element.classList.add("shadow-lg");
    element.classList.add("shadow-rose-800");
    element.classList.remove("hover:shadow-black");
    element.classList.add("hover:shadow-rose-800");
    element.classList.remove("border-b-purple-600");
    element.classList.remove("hover:border-b-4");
}
function deleteErrorFieldStyle(element) {
    element.classList.remove("border-red-600");
    element.classList.remove("shadow-lg");
    element.classList.remove("shadow-rose-800");
    element.classList.add("hover:shadow-black");
    element.classList.remove("hover:shadow-rose-800");
    element.classList.add("border-b-purple-600");
    element.classList.add("hover:border-b-4");
}
