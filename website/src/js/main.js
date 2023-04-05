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
};

if (buttonRedirectLogin !== null || buttonRedirectSignUp !== null) {
    buttonRedirectLogin.addEventListener('click', () => {
    window.location.href = 'pages/connexion.html';
    });
};

if (buttonRedirectSignUp !== null || buttonRedirectLogin !== null) {
    buttonRedirectSignUp.addEventListener('click', () => {
    window.location.href = 'pages/inscription.html';
    });
};

if (buttonSend !== null) {
    buttonSend.addEventListener('click', validateFormSignUp);
};

if (inputPasswordSignUp !== null) {
    if (inputPasswordSignUp.value !== '' && inputMailSignUp.value !== '' && inputNameSignUp.value !== '' && inputFistNameSignUp.value !== '') {
        validateFormSignUp();
    } 
};

/* test de la validitée du formulaire d'incription afin de laisser passer ou non l'utilisateur en autorisant le clic sur le bouton d'envoi du formulaire */
function validateFormSignUp() {
    var mail = inputMailSignUp.value;
    var name = inputNameSignUp.value;
    var firstName = inputFistNameSignUp.value;
    var password = inoutPasswordSignUp.value;
    var mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var nameRegex = /^[a-zA-Z]+$/;

    if (mailRegex.test(mail) && nameRegex.test(name) && nameRegex.test(firstName) && password.length >= 8) {
        buttonSend.style.backgroundColor = '#2ECC71';
        return true;
    };
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
};
