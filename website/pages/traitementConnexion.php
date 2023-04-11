<?php session_start() ?>
<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=sae_reseau;', 'root', '');

} catch (PDOException $e) {
    die('Erreur : ' . $e->getMessage());
}
$email = $_POST['emailLogin'];
$mdp_saisie = $_POST['passwordInput'];

$email_users = $bdd ->query('SELECT adresse_mail, mdp FROM users');
foreach ($email_users as list($email_existant, $mdp_existant)) {
    if ($email_existant == $email) {
        $_SESSION['login'] = $email;
        if (password_verify($mdp_saisie, $mdp_existant)) {
            header('Location: dashboard.php');
            return;
        } else {
            $_SESSION['connexionErreur'] = true;
            $_SESSION['messageErreur'] = "Le mot de passe saisie est invalide";
            header('Location: connexion.php');
            return;
        }
    }
}
$_SESSION['connexionErreur'] = true;
$_SESSION['messageErreur'] = "L'identifiant saisie est invalide";
header('Location: connexion.php');
return;
?>