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

if (btnEnvoi != null) {

}

if (inputEmail != null && inputPassword != null) {
    inputEmail.addEventListener("change", saisieEmailValide());
    inputPassword.addEventListener("change", saisiePwdValide(inputPassword.value));

    /**
     *
     * @param {String} email
     */
    function saisieEmailValide(email) {
        inputEmail.style.borderColor = "green";
    }

    function saisiePwdValide(value) {
        return undefined;
    }
}

