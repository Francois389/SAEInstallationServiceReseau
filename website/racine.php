<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/style.css">
    <script src="src/js/main.js" defer></script>
    <title>Page d'accueil</title>
</head>
<body>
    <div class="container">
        <?php include_once ("includes/header.html")?>
        <div class="content">
            <div class="mainBlock" id="blockAccueil">
                <button id="buttonRedirectSignUp">Inscription</button>
                <button id="buttonRedirectLogin">Connexion</button>
            </div>
        </div>
        <?php include_once ("includes/footer.html")?>
    </div>
</body>
</html>