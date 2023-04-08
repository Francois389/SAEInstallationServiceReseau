const buttonRedirectLogin = document.getElementById('buttonRedirectLogin');
const buttonRedirectSignUp = document.getElementById('buttonRedirectSignUp');
const buttonBack = document.getElementById('back');
const buttonSend = document.getElementById('send');
const inputMailSignUp = document.getElementById('mailSignUp');
const inputNameSignUp = document.getElementById('nameSignUp');
const inputFirstnameSignUp = document.getElementById('firstnameSignUp');
const inputPasswordSignUp = document.getElementById('passwordSignUp');


if (buttonSend !== null) {
    buttonSend.disabled=true;
}

if (buttonBack !== null) {
    buttonBack.addEventListener('click', () => {
        window.location.href = '../racine.php';
    });
}

if (buttonRedirectLogin !== null || buttonRedirectSignUp !== null) {
    buttonRedirectLogin.addEventListener('click', () => {
    window.location.href = 'pages/connexion.php';
    });
}

if (buttonRedirectSignUp !== null || buttonRedirectLogin !== null) {
    buttonRedirectSignUp.addEventListener('click', () => {
    window.location.href = 'pages/inscription.php';
    });
}

if (inputFirstnameSignUp !== null) {
    inputPasswordSignUp.addEventListener('blur', validateFormSignUp);
}

if (inputMailLogin !== null) {
    inputMailLogin.addEventListener('blur', validateFormLogin);
}

function validateFormSignUp() {
    const mail = inputMailSignUp.value,
          firstName = inputFirstnameSignUp.value,
          name = inputNameSignUp.value,
          password = inputPasswordSignUp.value,
          mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          nameRegex = /^[a-zA-Z]+$/;

    if (mailRegex.test(mail) && nameRegex.test(name) && nameRegex.test(firstName) && password.length >= 8) {
        buttonSend.style.backgroundColor = '#4158D0';
        buttonSend.disabled=false;
    }
    // TODO Faire une fonction pour indiquer que le champs comporte une erreur
    if (!mailRegex.test(mail)) {
        console.log('mailRegex.test(mail) : ',inputMailSignUp.value, mailRegex.test(mail));
        inputMailSignUp.style.borderColor = 'red';
        inputMailSignUp.style.borderWidth = '3px';
        buttonSend.style.backgroundColor = 'grey';
        buttonSend.disabled=true;
        // TODO afficher un message d'erreur
    }
    if (!nameRegex.test(name)) {
        console.log('nameRegex.test(name) : ',inputNameSignUp.value, nameRegex.test(name));
        inputNameSignUp.style.borderColor = 'red';
        inputNameSignUp.style.borderWidth = '3px';
        buttonSend.style.backgroundColor = 'grey';
        buttonSend.disabled=true;
        // TODO afficher un message d'erreur
    }
    if (!nameRegex.test(firstName)) {
        console.log('nameRegex.test(name) : ',inputFirstnameSignUp.value, nameRegex.test(name));
        inputFirstnameSignUp.style.borderColor = 'red';
        inputFirstnameSignUp.style.borderWidth = '3px';
        buttonSend.style.backgroundColor = 'grey';
        buttonSend.disabled=true;
        // TODO afficher un message d'erreur
    }
    if (password.length < 8) {
        console.log('password.length < 8 : ', password.length < 8);
        inputPasswordSignUp.style.borderColor = 'red';
        inputPasswordSignUp.style.borderWidth = '3px';
        buttonSend.style.backgroundColor = 'grey';
        buttonSend.disabled=true;
        // TODO afficher un message d'erreur
    }
}


