const buttonRedirectLogin = document.getElementById('buttonRedirectLogin');
const buttonRedirectSignUp = document.getElementById('buttonRedirectSignUp');

buttonRedirectLogin.addEventListener('click', () => {
    window.location.href = 'pages/connexion.html';
});

buttonRedirectSignUp.addEventListener('click', () => {
    window.location.href = 'pages/inscription.html';
});