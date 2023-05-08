<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/style.css">
    <script src="../scripts/main.js" defer></script>
    <title>Lecture</title>
</head>
<body>
    <nav class="enTeteAccueil">
        <h1 class="title">Dashboard</h1>
        <button id="back" class="buttonBack">Retour &agrave;  l'accueil</button>
    </nav>
<?php
    session_start();
    function connexionBd($identifiantUser, $mdp) { //connection a la Bd en fonction du statut de l'utilisateur
        try {
            $bdd = new PDO('mysql:host=192.168.1.31:3308;dbname=sos_ordi;', $identifiantUser, $mdp);
            return $bdd;
        } catch (PDOException $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }

    switch ($_SESSION['statutConnexion']) {
        case '1':
            $bdd = connexionBd('pdg', '2f)1aQUTlqscubl');
            $vue = 'vue_pdg';
            $statut = '1';
            break;

        case '2':
            $bdd = connexionBd('manager', '&el3IXwkcstnpi');
            $vue = 'vue_managers';
            $statut = '2';
            break;

        case '3':
            $bdd = connexionBd('employe', 'AU$)I#s5zzv8814');
            $vue = 'vue_employes';
            break;

        default:
            break;
    }

    $id = $_SESSION['idConnexion'];
    $infos_perso_query = $bdd->prepare('SELECT nom, prenom, date_de_naissance, statut FROM ' . $vue . ' WHERE adresse_mail = ?');
    $infos_perso_query->execute(array($id));
    $infos_perso = $infos_perso_query->fetch();
?>
<div class="contenu">
    <div class="mainBlock">
        <p>
            Voici vos informations personnelles :<br>
            Nom: <?php echo $infos_perso['nom']; ?><br>
            Pr&eacute;nom: <?php echo $infos_perso['prenom']; ?><br>
            Date de naissance: <?php echo $infos_perso['date_de_naissance']; ?><br>
            Statut : <?php echo $infos_perso['statut']; ?><br>
        </p>
</div>
<?php
if ($vue == 'vue_pdg' || $vue == 'vue_managers') { ?>
<div class="mainBlock"><?php
    $infos_employes_query = $bdd->query('SELECT adresse_mail, nom, prenom, statut FROM ' . $vue . ' WHERE statut > ' . $statut . ' ORDER BY statut');
    ?>
    <p>Voici la liste des employe :</p>
    <table>
        <tr>
            <th class="col">Adresse mail</th>
            <th class="col">Nom</th>
            <th class="col">Pr&eacute;nom</th>
            <th class="col">Statut</th>
        </tr>
        <?php
        foreach ($infos_employes_query as list($adresse_mail, $nom, $prenom, $statut)) {
            echo " <tr>
                    <td>$adresse_mail</td>
                    <td>$nom</td>
                    <td>$prenom</td>
                    <td>$statut</td>
                </tr>";
        }
        ?>
    </table>
</div>
<?php
}
?>
<footer>
        <p>&copy; 2023 - Tous droits r&eacute;serv&eacute;s</p>
</footer>

</body>
</html>