
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let password = document.getElementById('password1');
let confirmPassword = document.getElementById('confirmPassword');

let submit = document.getElementById('submit');

// Prevent default form submission
submit.addEventListener('click', (event) => {
    event.preventDefault();
    registrationInfo();
});

function registrationInfo() {
    if (userName.value && userEmail.value && password.value && confirmPassword.value) {
        if (password.value !== confirmPassword.value) {
            Swal.fire({
                title: "Failure❌",
                text: "Password do not match!",
                icon: 'error',
                backdrop: false,
                customClass: {
                    popup: 'blurred-background'
                }
            })
            return;
        }

        localStorage.setItem('name', userName.value);
        localStorage.setItem('email', userEmail.value);
        localStorage.setItem('password', password.value);
        Swal.fire({
            title: "Success!",
            text: "Registration Successful!",
            icon: 'success',
            backdrop: false,
            customClass: {
                popup: 'blurred-background'
            }
        }).then(() => {

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 500)            
        })
    } else {
        Swal.fire({
            title: "Warning!",
            text: "Fill fields!",
            icon: 'warning',
            backdrop: false,
            customClass: {
                popup: 'blurred-background'
            }
        })
    }
}

