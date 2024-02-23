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
    toggleLabel(usernameError);

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

function addErrorFieldStyle(element: HTMLInputElement): void {
  element.classList.add("border-red-600");
  element.classList.add("shadow-lg");
  element.classList.add("shadow-rose-800");
  element.classList.remove("hover:shadow-black");
  element.classList.add("hover:shadow-rose-800");
  element.classList.remove("border-b-purple-600");
  element.classList.remove("hover:border-b-4");
}

function deleteErrorFieldStyle(element: HTMLInputElement): void {
  element.classList.remove("border-red-600");
  element.classList.remove("shadow-lg");
  element.classList.remove("shadow-rose-800");
  element.classList.add("hover:shadow-black");
  element.classList.remove("hover:shadow-rose-800");
  element.classList.add("border-b-purple-600");
  element.classList.add("hover:border-b-4");
}
