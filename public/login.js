let logEmail = document.getElementById('userEmail');
let logPassword = document.getElementById('password1');

let logSubmit = document.getElementById('loginSubmit');

logSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    loginInfo();
});

function loginInfo() {
    if(localStorage.getItem('email') === logEmail.value && localStorage.getItem('password') === logPassword.value) {
        Swal.fire({
            title: "Success!",
            text: "Login Successful! Redirecting...",
            icon: 'success',
            backdrop: false,
            customClass: {
                popup: 'blurred-background'
            }
        }).then(() => {

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500)            
        })
    } else {
        Swal.fire({
            title: "Failure❌",
            text: "Incorrect Email or Passord",
            icon: 'warning',
            backdrop: false,
            customClass: {
                popup: 'blurred-background'
            }
        })
    }
}