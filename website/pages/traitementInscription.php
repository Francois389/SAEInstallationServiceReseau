<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscrit !</title>
</head>
<body>
    <?php
        $mail = $_POST['emailInput'];
        $mot_de_passe = $_POST['passwordInput'];
        $nom = $_POST['nameInput'];
        $prenom = $_POST['firstnameInput'];

        try {
            $bdd = new PDO('mysql:host=localhost;dbname=sae_reseau;', 'root', '');

        } catch (PDOException $e) {
            die('Erreur : ' . $e->getMessage());
        }

        $insert_user = $bdd->prepare('INSERT INTO users(nom, prenom, adresse_mail, mdp) VALUES(?, ?, ?, ?)');
        $insert_user->execute(array($nom, $prenom, $mail, password_hash($mot_de_passe, PASSWORD_BCRYPT)));

        header('Location: dashboard.php');
    ?>
</body>
</html>
