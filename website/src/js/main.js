const buttonRedirectLogin = document.getElementById('buttonRedirectLogin');
const buttonRedirectSignUp = document.getElementById('buttonRedirectSignUp');
const buttonBack = document.getElementById('back');
const buttonSend = document.getElementById('send');
const inputMailSignUp = document.getElementById('mailSignUp');
const inputNameSignUp = document.getElementById('nameSignUp');
const inputFistNameSignUp = document.getElementById('firstNameSignUp');
const inputPasswordSignUp = document.getElementById('passwordSignUp');


if (buttonBack !== null) {
    buttonBack.addEventListener('click', () => {
        window.location.href = '../racine.html';
    });
}

if (buttonRedirectLogin !== null || buttonRedirectSignUp !== null) {
    buttonRedirectLogin.addEventListener('click', () => {
    window.location.href = 'pages/connexion.html';
    });
}

if (buttonRedirectSignUp !== null || buttonRedirectLogin !== null) {
    buttonRedirectSignUp.addEventListener('click', () => {
    window.location.href = 'pages/inscription.html';
    });
}

if (buttonSend !== null) {
    buttonSend.addEventListener('click', validateFormSignUp);
}

if (inputPasswordSignUp !== null) {
    if (inputPasswordSignUp.value !== '' && inputMailSignUp.value !== '' && inputNameSignUp.value !== '' && inputFistNameSignUp.value !== '') {
        validateFormSignUp();
    } 
}

function validateFormSignUp() {
    const mail = inputMailSignUp.value,
        name = inputNameSignUp.value,
        firstName = inputFistNameSignUp.value,
        password = inputPasswordSignUp.value,
        mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        nameRegex = /^[a-zA-Z]+$/;

    if (mailRegex.test(mail) && nameRegex.test(name) && nameRegex.test(firstName) && password.length >= 8) {
        buttonSend.style.backgroundColor = '#2ECC71';
        return true;
    }
    if (mailRegex.test(mail) === false) {
        inputMailSignUp.style.borderColor = 'red';
    }
    if (nameRegex.test(name) === false) {
        inputNameSignUp.style.borderColor = 'red';
    }
    if (nameRegex.test(firstName) === false) {
        inputFistNameSignUp.style.borderColor = 'red';
    }
    if (password.length < 8) {
        inputPasswordSignUp.style.borderColor = 'red';
    }
}
