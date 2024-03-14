function passwordEye() {
  const eyeSlashed = document.querySelector("#eyeSlashed");
  eyeSlashed.addEventListener("click", () => {
    const password = document.querySelector("#password");
    if (password.type === "password") {
      password.type = "text";
      eyeSlashed.src = "../assets/eye/eye.png";
      eyeSlashed.title = "Hide the password";
    } else {
      password.type = "password";
      eyeSlashed.src = "../assets/eye/eye-crossed.png";
      eyeSlashed.title = "Display the password";
    }
  });
}
export default passwordEye;
