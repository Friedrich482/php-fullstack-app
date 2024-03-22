"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const resetPasswordForm = document.querySelector("#resetPasswordForm");
  const passwordError = document.querySelector("#passwordError");
  const passwordInput = document.querySelector("#passwordInput");
  const confirmPasswordInput = document.querySelector("#confirmPassword");
  const defaultErrorRP = document.querySelector("#defaultError");
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
          const inputs = [passwordInput, confirmPasswordInput];
          inputs.forEach((element) => {
            removeErrorFieldStyleCS(element);
          });
          if (data.message.includes("Passwords don't match !")) {
            passwordInput.focus();
            toggleElementCS(passwordError);
            passwordInput.innerHTML = data.message;
            errorFieldStyleCS(passwordInput);
            errorFieldStyleCS(confirmPasswordInput);
          } else {
            passwordInput.focus();
            errorFieldStyleCS(passwordInput);
            toggleElementCS(defaultErrorRP);
            defaultErrorRP.innerHTML = data.message;
          }
        } else {
          window.location.href = data.redirect;
        }
      })
      .catch((error) => console.error("Error : ", error));
  });
});
function toggleElementRP(element) {
  element.classList.remove("hidden");
  element.classList.add("visibleItem");
}
function removeErrorFieldStyleRP(element) {
  element.classList.remove(...cssProps1CS);
  element.classList.add(...cssProps2CS);
}
function errorFieldStyleRP(element) {
  element.classList.add(...cssProps1CS);
  element.classList.remove(...cssProps2CS);
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
