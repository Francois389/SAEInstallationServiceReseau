//accueil.html
const btnConnexion = document.getElementById("btnConnexion");
const btnPresentation = document.getElementById("btnPresentation");

//connexion.html
const btnAccueil = document.getElementById("back");
const btnEnvoi = document.getElementById("send");
const inputEmail = document.getElementById("idLogin");
const inputPassword = document.getElementById("passwordLogin");

//presentation.html
const btnAccueil2 = document.getElementById("back");

//lecture.php
const btnAccueil3 = document.getElementById("back");


if (btnConnexion != null) {
    btnConnexion.addEventListener("click", function () {
        window.location.href = "pages/connexion.html";
    });
}

if (btnPresentation != null) {
    btnPresentation.addEventListener("click", function () {
        window.location.href = "pages/presentation.html";
    });
}

if (btnAccueil != null) {
    btnAccueil.addEventListener("click", function () {
        window.location.href = "../accueil.html";
    });
}

if (btnAccueil2 != null) {
    btnAccueil2.addEventListener("click", function () {
        window.location.href = "../accueil.html";
    });
}

if (btnAccueil3 != null) {
    btnAccueil3.addEventListener("click", function () {
        window.location.href = "../accueil.html";
    });
}

function validationBouton(emailValide, pwdValide) {
    if (emailValide && pwdValide) {
        console.log("Saisie valide")
        btnEnvoi.disabled = false;
        btnEnvoi.style.backgroundColor = "#4158D0";
    } else {
        console.log("Saisie invalide")
        btnEnvoi.disabled = true;
        btnEnvoi.style.backgroundColor = "grey";
    }
}

if (inputEmail != null && inputPassword != null) {
    console.log("Page connexion.html");
    let emailValide = false;
    let pwdValide = false;
    inputEmail.addEventListener("keyup", saisieEmailValide);
    inputPassword.addEventListener("keyup", saisiePwdValide);

    function saisieEmailValide() {
        console.log("Changement de saisie email");
        if (inputEmail.value.match("[a-z0-9._-]+@sos_ordi\.[a-z]{2,4}$")) {
            inputEmail.style.borderColor = "green";
            inputEmail.style.borderWidth = "5px";
            emailValide = true;
            validationBouton(emailValide, pwdValide);
        } else {
            inputEmail.style.borderColor = "red";
            inputEmail.style.borderWidth = "5px";
            emailValide = false;
            validationBouton(emailValide, pwdValide);
        }
    }

    function saisiePwdValide() {
        console.log("Changement de saisie password");
        if (inputPassword.value.length >= 1) {
            inputPassword.style.borderColor = "green";
            inputPassword.style.borderWidth = "5px";
            pwdValide = true;
            validationBouton(emailValide, pwdValide);
        } else {
            inputPassword.style.borderColor = "red";
            inputPassword.style.borderWidth = "5px";
            pwdValide = false;
            validationBouton(emailValide, pwdValide);
        }
    }
    console.log("emailValide : " + emailValide + " pwdValide : " + pwdValide);


}

console.log("JS chargé")