document.addEventListener("DOMContentLoaded", () => {
  const resetPasswordForm = document.querySelector(
    "#resetPasswordForm",
  ) as HTMLFormElement;
  const passwordError = document.querySelector(
    "#passwordError",
  ) as HTMLLabelElement;

  const passwordInput = document.querySelector("#password") as HTMLInputElement;

  const confirmPasswordInput = document.querySelector(
    "#confirmPassword",
  ) as HTMLInputElement;

  const defaultErrorRP = document.querySelector(
    "#defaultError",
  ) as HTMLLabelElement;

  resetPasswordForm.addEventListener("submit", (event) => {
    console.log("Form submission intercepted");

    event.preventDefault();

    toggleElementRP(passwordError);
    passwordError.textContent = "";
    const formData: FormData = new FormData(resetPasswordForm);
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
          } else {
            passwordInput.focus();
            errorFieldStyleRP(passwordInput);
            toggleElementRP(defaultErrorRP);
            defaultErrorRP.textContent = data.message;
          }
        } else {
          window.location.href = data.redirect;
        }
      })
      .catch((error) => console.error(error));
  });
});

function toggleElementRP(element: HTMLLabelElement): void {
  element.classList.remove("hidden");
  element.classList.add("visibleItem");
}

function removeErrorFieldStyleRP(element: HTMLInputElement): void {
  element.classList.remove(...cssProps1RP);
  element.classList.add(...cssProps2RP);
}
function errorFieldStyleRP(element: HTMLInputElement): void {
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
