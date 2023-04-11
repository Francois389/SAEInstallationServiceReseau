const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const nameRegex = /^[a-zA-Z]+$/;
const MDP_MAX_LENGTH = 1;

const buttonBack = document.getElementById('back');
const buttonSend = document.getElementById('send');

/* Element de la page racine.php */
const buttonRedirectLogin = document.getElementById('buttonRedirectLogin');
const buttonRedirectSignUp = document.getElementById('buttonRedirectSignUp');

/* Element de la page inscription.php */
const inputMailSignUp = document.getElementById('mailSignUp');
const inputNameSignUp = document.getElementById('nameSignUp');
const inputFirstnameSignUp = document.getElementById('firstnameSignUp');
const inputPasswordSignUp = document.getElementById('passwordSignUp');

/* Element de la page connexion.php */
const inputMailLogin = document.getElementById('emailLogin');
const inputPasswordLogin = document.getElementById('passwordLogin');

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
    

function validateFormSignUp() {
    const mail = inputMailSignUp.value,
          firstName = inputFirstnameSignUp.value,
          name = inputNameSignUp.value,
          password = inputPasswordSignUp.value;

    if (mailRegex.test(mail) && nameRegex.test(name) && nameRegex.test(firstName) && password.length >= MDP_MAX_LENGTH) {
        buttonSend.style.backgroundColor = '#4158D0';
        buttonSend.disabled=false;
    }
    // TODO Faire une fonction pour indiquer que le champs comporte une erreur
    if (!mailRegex.test(mail)) {
        console.log('mailRegex.test(mail) : ',inputMailSignUp.value, mailRegex.test(mail));
        inputMailSignUp.classList.add('champsErreur');
        buttonSend.style.backgroundColor = 'grey';
        buttonSend.disabled=true;
        // TODO afficher un message d'erreur
    }
    if (!nameRegex.test(name)) {
        console.log('nameRegex.test(name) : ',inputNameSignUp.value, nameRegex.test(name));
        inputNameSignUp.classList.add('champsErreur');
        buttonSend.style.backgroundColor = 'grey';
        buttonSend.disabled=true;
        // TODO afficher un message d'erreur
    }
    if (!nameRegex.test(firstName)) {
        console.log('nameRegex.test(name) : ',inputFirstnameSignUp.value, nameRegex.test(name));
        inputFirstnameSignUp.classList.add('champsErreur');
        buttonSend.style.backgroundColor = 'grey';
        buttonSend.disabled=true;
        // TODO afficher un message d'erreur
    }
    if (password.length < 1) {
        console.log('password.length < 8 : ', password.length < MDP_MAX_LENGTH);
        inputPasswordSignUp.classList.add('champsErreur');
        buttonSend.style.backgroundColor = 'grey';
        buttonSend.disabled=true;
        // TODO afficher un message d'erreur
    }
}

if (inputMailLogin != null && inputPasswordLogin != null) {
    inputMailLogin.addEventListener('blur',validateMailLogin);
    inputPasswordLogin.addEventListener('blur',validateMdpLogin)
}

/**
 * Change le style du champs spécifier pour signifier à l'utilsateur une erreur de saisie.
 * Un message d'erreur peut être ajouté.
 * @param elt {HTMLElement} Le champs comportant une erreur
 * @param messageErreur {string} Le message d'erreur pouvant accompagner le champs erroné
 */
function afficheErreurChamps(elt, messageErreur="") {
    elt.classList.add('champsErreur');
    buttonSend.style.backgroundColor = 'grey';
    buttonSend.disabled=true
    //TODO Ajouter le message d'erreur à l'élément
}

function validateMailLogin() {
    const email = inputMailLogin.value;
    if (mailRegex.test(email) ) {
        inputMailLogin.classList.remove('champsErreur');
        buttonSend.style.backgroundColor = '#4158D0';
        buttonSend.disabled = false;
    } else {
        if (!mailRegex.test(email)) {
            afficheErreurChamps(inputMailLogin);
        }
    }
}

function validateMdpLogin() {
    console.log('validateMdpFormLogin')
    const password = inputPasswordLogin.value;
    if (password.length >= MDP_MAX_LENGTH) {
        inputPasswordLogin.classList.remove('champsErreur');
        buttonSend.style.backgroundColor = '#4158D0';
        buttonSend.disabled = false;
    } else {
        if (password.length < 1) {
            afficheErreurChamps(inputPasswordLogin);
        }
    }
}