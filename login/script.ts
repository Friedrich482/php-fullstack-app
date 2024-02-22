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
            errorFieldStyle(usernameInput);
            toggleElement(usernameError);
            usernameError.textContent = data.message;
          } else if (data.message.includes("Incorrect password! ❌")) {
            passwordInput.focus();
            errorFieldStyle(passwordInput);
            toggleElement(passwordError);
            passwordError.textContent = data.message;
          } else {
            // In this case, (all the fields are empty), so it will display an appropriate message
            usernameInput.focus();
            errorFieldStyle(usernameInput);
            errorFieldStyle(passwordInput);
            toggleElement(defaultError);
            defaultError.textContent = data.message;
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

function errorFieldStyle(element: HTMLInputElement): void {
  element.classList.add("border-red-600");
  element.classList.add("shadow-lg");
  element.classList.add("shadow-rose-800");
  element.classList.remove("hover:shadow-black");
  element.classList.add("hover:shadow-rose-800");
  element.classList.remove("border-b-purple-600");
  element.classList.remove("hover:border-b-4");
}

function removeErrorFieldStyle(element: HTMLInputElement): void {
  element.classList.remove("border-red-600");
  element.classList.remove("shadow-lg");
  element.classList.remove("shadow-rose-800");
  element.classList.add("hover:shadow-black");
  element.classList.remove("hover:shadow-rose-800");
  element.classList.add("border-b-purple-600");
  element.classList.add("hover:border-b-4");
}
