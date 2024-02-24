document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById(
    "registerForm"
  ) as HTMLFormElement;

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  const emailError = document.querySelector("#emailError") as HTMLLabelElement;
  const usernameError = document.getElementById(
    "usernameError"
  ) as HTMLLabelElement;
  const defaultError = document.querySelector(
    "#defaultError"
  ) as HTMLLabelElement;

  registerForm.addEventListener("submit", (event) => {
    console.log("Form submission intercepted");
    event.preventDefault();

    toggleLabel(emailError);
    emailError.textContent = "";

    toggleLabel(usernameError);
    usernameError.textContent = "";
    
    const formData: FormData = new FormData(registerForm);

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
            emailError.innerHTML = data.message;
          } else if (
            data.message.includes("This username is already taken ❌")
          ) {
            usernameInput.focus();
            addErrorFieldStyle(usernameInput);
            toggleLabel(usernameError);
            usernameError.innerHTML = data.message;
          } else {
            // In this case, (all the fields are empty), so it will display an appropriate message
            emailInput.focus();
            addErrorFieldStyle(emailInput);
            addErrorFieldStyle(usernameInput);
            addErrorFieldStyle(passwordInput);
            toggleLabel(defaultError);
            defaultError.innerHTML = data.message;
          }
        } else {
          window.location.href = data.redirect;
        }
      })
      .catch((error) => console.error("Error:", error));
  });
});

function toggleLabel(element: HTMLLabelElement): void {
  element.classList.remove("hidden");
  element.classList.add("visibleItem");
}
let registerCssProps1 = [
  "border-red-600",
  "shadow-lg",
  "shadow-rose-800",
  "hover:shadow-rose-800",
];
let registerCssProps2 = [
  "hover:shadow-black",
  "border-b-purple-600",
  "hover:border-b-4",
];

function addErrorFieldStyle(element: HTMLInputElement): void {
  element.classList.add(...registerCssProps1);
  element.classList.remove(...registerCssProps2);
  
}

function deleteErrorFieldStyle(element: HTMLInputElement): void {
  element.classList.remove(...registerCssProps1);
  element.classList.add(...registerCssProps2);
}
