document.addEventListener("DOMContentLoaded", function () {
  const passwordForgotForm = document.querySelector(
    "#passwordForgotForm",
  ) as HTMLFormElement;
  const emailError = document.querySelector("#emailError") as HTMLLabelElement;
  const emailInput = document.querySelector("#email") as HTMLInputElement;
  const defaultErrorPF = document.querySelector(
    "#defaultError",
  ) as HTMLLabelElement;
  passwordForgotForm.addEventListener("submit", (event) => {
    console.log("Form submission intercepted");

    event.preventDefault();

    toggleElementPF(emailError);
    emailError.textContent = "";
    const formData: FormData = new FormData(passwordForgotForm);
    fetch("forgottenPassword_process.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          removeErrorFieldStylePF(emailInput);
          if (data.message.includes("Email not found!<br> (ಥ _ ಥ)")) {
            emailInput.focus();
            toggleElementPF(emailError);
            emailError.innerHTML = data.message;
            errorFieldStylePF(emailInput);
          } else {
            // ? In this case,  (all the fields are empty), so it will display an appropriate message
            emailInput.focus();
            errorFieldStylePF(emailInput);
            toggleElementPF(defaultErrorPF);
            defaultErrorPF.innerHTML = data.message;
          }
        } else {
          window.location.href = data.redirect;
        }
      })
      .catch((error) => console.error("Error: ", error));
  });
});
function toggleElementPF(element: HTMLLabelElement): void {
  element.classList.remove("hidden");
  element.classList.add("visibleItem");
}

function removeErrorFieldStylePF(element: HTMLInputElement): void {
  element.classList.remove(...cssProps1PF);
  element.classList.add(...cssProps2PF);
}
function errorFieldStylePF(element: HTMLInputElement): void {
  element.classList.add(...cssProps1PF);
  element.classList.remove(...cssProps2PF);
}
let cssProps1PF = [
  "border-red-600",
  "shadow-lg",
  "shadow-rose-800",
  "hover:shadow-rose-800",
];
let cssProps2PF = [
  "hover:shadow-black",
  "border-b-purple-600",
  "hover:border-b-4",
];
