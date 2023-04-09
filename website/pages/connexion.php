<?php session_start()?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/css/style.css">
    <script src="../src/js/main.js" defer></script>
    <title>Connexion</title>
</head>
    <body>
        <div class="enTete">
            <h1>Connexion</h1>
            <button id="back" class="buttonBack">Retour à  l'accueil</button>
        </div>
        <div class="mainBlock">
            <?php
            if (isset($_SESSION['connexionErreur']) && $_SESSION['connexionErreur']) { ?>
                <div class="alert alert-danger" role="alert">
                    <?php echo $_SESSION['messageErreur'] ?>
                </div>
            <?php } ?>
            <form action="traitementConnexion.php" method="POST">
                <div class="title">Connectez vous !</div>

                <div class="singleInput">
                    <label for="emailLogin">Entrez votre email:</label>
                    <input type="email" name="emailLogin" placeholder="exemple@mail.com" id="emailLogin" <?php if (isset($_SESSION['login'])) {echo "value=\"".$_SESSION['login']."\"";} ?>>
                </div>

                <div class="singleInput">
                    <label for="passwordLogin">Entrez votre mot de passe:</label>
                    <input type="password" name="passwordInput" id="passwordLogin" placeholder="Mot de passe">
                </div>

                <button class="valider" id="send">Valider</button>
            </form>
        </div>
        <footer>
            <p>© <u>IUT de Rodez</u> 2023 - Tous droits réservés</p>
        </footer>
    </body>
</html> 