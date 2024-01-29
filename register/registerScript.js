document.addEventListener('DOMContentLoaded', function() {
    console.log("Form submission intercepted");

    const registerForm = document.getElementById('registerForm');

    const emailInput = document.getElementById('email'); 
    const usernameInput = document.getElementById('username'); 
    const passwordInput = document.getElementById('password'); 

    const emailError = document.querySelector('#emailError');
    const usernameError = document.getElementById('usernameError');
    const defaultError = document.querySelector('#defaultError');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        hidden(emailError);
        hidden(usernameError);

        const formData = new FormData(registerForm);
        fetch('register_process.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                let elts = [emailInput, usernameInput, passwordInput];
                elts.forEach((elt) =>{
                    removeErrorFieldStyle(elt);
                })
                if(data.message.includes("This email is already taken ❌")){
                    emailInput.focus();
                    errorFieldStyle(emailInput);
                    display(emailError);
                    emailError.innerHTML = data.message
                }
                else if(data.message.includes("This username is already taken ❌")){
                    usernameInput.focus();
                    errorFieldStyle(usernameInput);
                    display(usernameError);
                    usernameError.innerHTML = data.message
                }

                else{
                    // In this case, (all the fields are empty), so it will display an appropriate message
                    emailInput.focus();
                    errorFieldStyle(emailInput);
                    errorFieldStyle(usernameInput);
                    errorFieldStyle(passwordInput);
                    display(defaultError);
                    defaultError.innerHTML = data.message
                }
                
            } else{
                window.location.href = data.redirect;
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
function display(element){
    element.classList.remove('hidden')
    element.classList.add('visibleItem')
}

function hidden(element){
    element.textContent = '';
    element.classList.remove('visibleItem')
    element.classList.add('hidden')
}

function errorFieldStyle(element){
    element.classList.add('border-red-600');
    element.classList.add("shadow-lg") // 0
    element.classList.add("shadow-rose-800") // 1
    element.classList.remove("hover:shadow-black") // 2
    element.classList.add("hover:shadow-rose-800") // 3
    element.classList.remove('border-b-purple-600');
    element.classList.remove("hover:border-b-4");
}

function removeErrorFieldStyle(element){
    element.classList.remove('border-red-600');
    element.classList.remove("shadow-lg") // 0
    element.classList.remove("shadow-rose-800") // 1
    element.classList.add("hover:shadow-black") // 2
    element.classList.remove("hover:shadow-rose-800") // 3
    element.classList.add('border-b-purple-600');
    element.classList.add("hover:border-b-4");
}