document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm") as HTMLFormElement;

  const usernameError = document.getElementById(
    "usernameError"
  ) as HTMLLabelElement;

  const passwordError = document.getElementById(
    "passwordError"
  ) as HTMLLabelElement;

  const defaultError = document.querySelector(
    "#defaultError"
  ) as HTMLLabelElement;

  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  loginForm.addEventListener("submit", (event): void => {
    console.log("Form submission intercepted");

    event.preventDefault();
    toggleElement(usernameError);
    usernameError.textContent = "";

    toggleElement(passwordError);
    passwordError.textContent = "";

    const formData: FormData = new FormData(loginForm);
    fetch("login_process.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          let elts = [usernameInput, passwordInput];
          elts.forEach((elt): void => {
            removeErrorFieldStyle(elt);
          });

          if (data.message.includes("User not found!<br> (ಥ _ ಥ)")) {
            usernameInput.focus();
            toggleElement(usernameError);
            usernameError.innerHTML = data.message;
            errorFieldStyle(usernameInput);

            console.log("motherfucker !");
          } else if (data.message.includes("Incorrect password! ❌")) {
            passwordInput.focus();
            toggleElement(passwordError);
            passwordError.innerHTML = data.message;
            errorFieldStyle(passwordInput);
          } else {
            // In this case, (all the fields are empty), so it will display an appropriate message
            usernameInput.focus();
            errorFieldStyle(usernameInput);
            errorFieldStyle(passwordInput);
            toggleElement(defaultError);
            defaultError.innerHTML = data.message;
          }
        } else {
          window.location.href = data.redirect;
        }
      })
      .catch((error) => console.error("Error:", error));
  });
});

function toggleElement(element: HTMLLabelElement): void {
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

function errorFieldStyle(element: HTMLInputElement): void {
  element.classList.add(...cssProps1);
  element.classList.remove(...cssProps2);
}

function removeErrorFieldStyle(element: HTMLInputElement): void {
  element.classList.remove(...cssProps1);
  element.classList.add(...cssProps2);
}
