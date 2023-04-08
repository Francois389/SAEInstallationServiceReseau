<?php /* Séparation de l'inscription et de la visualisation des users. */?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" >
    <link href="../src/css/style.css" rel="stylesheet">
    <script src="../src/js/main.js" defer></script>
    <title>Inscrit !</title>
</head>
<body>
    <?php
        try {
            $bdd = new PDO('mysql:host=localhost;dbname=sae_reseau;', 'root', '');
        } catch (PDOException $e) {
            die('Erreur : ' . $e->getMessage());
        }
    ?>
    <div class="enTete">
        <h1>Dashboard</h1>
        <button id="back" class="buttonBack">Retour &agrave;  l'accueil</button>
    </div>
    <div class="conteneur">
        <?php
        $user_number_query = $bdd->prepare('SELECT COUNT(*) FROM users');
        $user_number_query->execute();
        $user_number = $user_number_query->fetch()['COUNT(*)'];
        ?>
        <div class="contenu">
            <div class="mainBlock">
                <p>Merci pour votre inscription, nous somme désormais <?php echo $user_number?> inscrits sur le site !</p>
            </div>
            <div class="mainBlock">
                <?php $name_user_query = $bdd->query('SELECT nom, prenom, adresse_mail FROM users'); ?>
                <p>Voici la liste des membres :</p>
                <table class="table">
                    <tr>
                        <th class="col">Nom</th>
                        <th class="col">Prenom</th>
                        <th class="col">Adresse Mail</th>
                    </tr>
                    <?php
                    foreach ($name_user_query as list($nom, $prenom, $adresse_mail)) {
                        echo " <tr>
                                    <td>$nom</td>
                                    <td>$prenom</td>
                                    <td>$adresse_mail</td>
                                </tr>";
                    } ?>
                </table>
            </div>
        </div>
    </div>
<?php include_once("../includes/footer.html")?>
</body>
</html>
