<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lecture</title>
</head>
<body>
<?php
    session_start();
    // $bdd = null;

    function connexionBd($identifiantUser, $mdp) { //connection a la Bd en fonction du statut de l'utilisateur
        try {
            $bdd = new PDO('mysql:host=localhost;dbname=saereseau;', $identifiantUser, $mdp);
            return $bdd;
        } catch (PDOException $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }

    switch ($_SESSION['statutConnection']) {
        case '1':
            $bdd = connexionBd('PDG', '2f)1aQUTlqscubl');
            $vue = 'tout_le_monde';
            break;

        case '2':
            $bdd = connexionBd('Manager', '&el3IXwkcstnpi');
            $vue = 'manager_et_employe';
            break;

        case '3':
            $bdd = connexionBd('Employe', 'AU$)I#s5zzv8814');
            $vue = 'employes';
            break;

        default:
            break;
    }

    $employe_number_query = $bdd->prepare('SELECT COUNT(*) FROM ' . $vue);
    $employe_number_query->execute();
    $employe_number = $employe_number_query->fetch()['COUNT(*)'];
?>
<div class="contenu">
    <div class="mainBlock">
        <p>Il y a <?php echo $employe_number?> employés dans l'entreprise !</p>
</div>
<div class="mainBlock">
    <?php
        $infos_employes_query = $bdd->query('SELECT nom, prenom, date_de_naissance, statut FROM ' . $vue);
    ?>
    <p>Voici la liste des membres :</p>
    <table class="table">
    <tr>
        <th class="col">Nom</th>
        <th class="col">Prenom</th>
        <th class="col">Date de naissance</th>
        <th class="col">Statut</th>
    </tr>
<?php
    foreach ($infos_employes_query as list($nom, $prenom, $date_de_naissance, $statut)) {
        echo " <tr>
                    <td>$nom</td>
                    <td>$prenom</td>
                    <td>$date_de_naissance</td>
                    <td>$statut</td>
                </tr>";
    } 
?>
</body>
</html>