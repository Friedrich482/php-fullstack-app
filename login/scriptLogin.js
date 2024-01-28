document.addEventListener('DOMContentLoaded', function() {
    console.log('Form submission intercepted');
    const loginForm = document.getElementById('loginForm');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const usernameInput = document.getElementById('username'); 
    const passwordInput = document.getElementById('password');
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
                if(data.message.includes("User not found! (ಥ _ ಥ)")){
                    usernameInput.focus();
                    display(usernameError);
                    usernameError.textContent = data.message
                }
                else if(data.message.includes("Incorrect password! ❌")){
                    passwordInput.focus();
                    display(passwordError);
                    passwordError.textContent = data.message
                }
            } else {
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