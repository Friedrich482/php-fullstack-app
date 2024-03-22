document.addEventListener("DOMContentLoaded", () => {
  const codeForm = document.querySelector("#codeForm") as HTMLFormElement;
  const codeError = document.querySelector("#codeError") as HTMLLabelElement;
  const codeInput = document.querySelector("#code") as HTMLInputElement;
  const defaultErrorCS = document.querySelector(
    "#defaultError",
  ) as HTMLLabelElement;
  codeForm.addEventListener("submit", (event) => {
    console.log("Form submission intercepted");
    event.preventDefault();
    toggleElementCS(codeError);
    codeError.textContent = "";
    const formData: FormData = new FormData(codeForm);
    fetch("codeSubmit_process.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          removeErrorFieldStyleCS(codeInput);
          if (data.message.includes("The code is incorrect <br> (ಥ _ ಥ)")) {
            codeInput.focus();
            toggleElementCS(codeError);
            codeError.innerHTML = data.message;
            errorFieldStyleCS(codeInput);
          }
        }
      });
  });
});

function toggleElementCS(element: HTMLLabelElement): void {
  element.classList.remove("hidden");
  element.classList.add("visibleItem");
}

function removeErrorFieldStyleCS(element: HTMLInputElement): void {
  element.classList.remove(...cssProps1PF);
  element.classList.add(...cssProps2PF);
}
function errorFieldStyleCS(element: HTMLInputElement): void {
  element.classList.add(...cssProps1PF);
  element.classList.remove(...cssProps2PF);
}
let cssProps1CS = [
  "border-red-600",
  "shadow-lg",
  "shadow-rose-800",
  "hover:shadow-rose-800",
];
let cssProps2CS = [
  "hover:shadow-black",
  "border-b-purple-600",
  "hover:border-b-4",
];
