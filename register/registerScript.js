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
                if(data.message.includes("This email is already taken ❌")){
                    emailInput.focus();
                    emailInput.classList.add('border-rose-600')
                    emailInput.classList.remove('border-b-purple-600');
                    emailInput.classList.remove("hover:border-b-4");

                    display(emailError);
                    emailError.innerHTML = data.message
                }
                else if(data.message.includes("This username is already taken ❌")){
                    usernameInput.focus();
                    usernameInput.classList.add('border-rose-600')
                    usernameInput.classList.remove('border-b-purple-600');
                    usernameInput.classList.remove("hover:border-b-4");

                    display(usernameError);
                    usernameError.innerHTML = data.message
                }

                else{
                    // In this case, (all the fields are empty), so it will display an appropriate message
                    emailInput.focus();
                    emailInput.classList.add('border-rose-600')
                    emailInput.classList.remove('border-b-purple-600');
                    emailInput.classList.remove("hover:border-b-4");

                    usernameInput.classList.add('border-rose-600')
                    usernameInput.classList.remove('border-b-purple-600');
                    usernameInput.classList.remove("hover:border-b-4");
                    
                    passwordInput.classList.add('border-rose-600')
                    passwordInput.classList.remove('border-b-purple-600');
                    passwordInput.classList.remove("hover:border-b-4");

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
    element.classList.remove('visibleItem')
    element.classList.add('hidden')
}
