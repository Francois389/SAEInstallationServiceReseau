<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/css/style.css">
    <script src="../src/js/main.js" defer></script>
    <title>Inscription</title>
</head>
    <body>
        <div class="enTete">
            <h1>Inscription</h1>
            <button id="back" class="buttonBack">Retour à l'accueil</button>
        </div>
        <div class="mainBlock">
            <form method="POST" name="formSignUp" action="traitementInscription.php">
                <div class="title">Inscrivez vous !</div>

                    <div class="singleInput">
                        <label for="mailSignUp">Entrez votre email:</label>
                        <input type="email" name="emailInput" placeholder="exemple@mail.com" id="mailSignUp">
                    </div>

                    <div class="singleInput">
                        <label for="firstnameSignUp">Entrez votre prénom :</label>
                        <input type="text" name="firstnameInput" placeholder="John" id="firstnameSignUp">
                    </div>

                    <div class="singleInput">
                        <label for="nameSignUp">Entrez votre nom :</label>
                        <input type="text" name="nameInput" placeholder="Doe" id="nameSignUp">
                    </div>

                    <div class="singleInput">
                        <label for="passwordSignUp">Entrez votre mot de passe:</label>
                        <input type="password" name="passwordInput" placeholder="Mot de passe" id="passwordSignUp">
                    </div>
                <button class="valider" id="send">Valider</button>
            </form>
        </div>
        <footer>
            <p>© <u>IUT de Rodez</u> 2023 - Tous droits réservés</p>
        </footer>
    </body>
</html>