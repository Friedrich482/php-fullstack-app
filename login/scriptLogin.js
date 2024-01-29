document.addEventListener('DOMContentLoaded', function() {
    console.log('Form submission intercepted');
    
    const loginForm = document.getElementById('loginForm');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const usernameInput = document.getElementById('username'); 
    const passwordInput = document.getElementById('password');
    const eye = document.querySelector('#eyeSlashed')

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        hidden(usernameError);
        hidden(passwordError);

        const formData = new FormData(loginForm);
        fetch('login_process.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                if(data.message.includes("User not found!<br> (ಥ _ ಥ)")){
                    usernameInput.focus();
                    usernameInput.classList.add('border-rose-600')
                    usernameInput.classList.remove('border-b-purple-600');
                    usernameInput.classList.remove("hover:border-b-4");

                    display(usernameError);
                    usernameError.innerHTML = data.message
                }
                else if(data.message.includes("Incorrect password! ❌")){
                    usernameInput.classList.remove('border-rose-600')
                    usernameInput.classList.add('border-b-purple-600')
                    usernameInput.classList.add("hover:border-b-4");

                    passwordInput.focus();
                    passwordInput.classList.add('border-rose-600')
                    passwordInput.classList.remove('border-b-purple-600')
                    passwordInput.classList.remove("hover:border-b-4");

                    display(passwordError);
                    passwordError.textContent = data.message
                }
            } else {

                window.location.href = data.redirect;
            }
        })
        .catch(error => console.error('Error:', error));
    });

    passwordInput.addEventListener('mouseover', () =>{
        // console.log("done");
        // eye.classList.add('right-5');
    })
});

function display(element){
    element.classList.remove('hidden')
    element.classList.add('visibleItem')
    
}

function hidden(element){
    element.classList.remove('visibleItem')
    element.classList.add('hidden')
}

