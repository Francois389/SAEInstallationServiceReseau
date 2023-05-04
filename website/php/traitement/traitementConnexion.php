<?php
    session_start();
    $id = $_POST['idInput'];
    $mdp = $_POST['passwordInput'];

    try {
        $bdd = new PDO('mysql:host=localhost;dbname=sos_ordi;', 'connexion', 'B42Pz#EitFhyL');

    } catch (PDOException $e) {
        die('Erreur : ' . $e->getMessage());

    }

    $verify_connection_query = $bdd->prepare('SELECT mot_de_passe FROM vue_connexion WHERE adresse_mail = ?');
    $verify_connection_query->execute(array($id));   
    $verify_connection = $verify_connection_query->fetch()['mot_de_passe'];

    if ($verify_connection == $mdp) {
        $_SESSION['idConnexion'] = $id; 
        $_SESSION['mdpConnexion'] = $mdp; 
        header('Location: ../lecture.php');

        $statut_query = $bdd->prepare('SELECT statut FROM vue_connexion WHERE adresse_mail = ?');
        $statut_query->execute(array($id));
        $statut = $statut_query->fetch()['statut'];
        $_SESSION['statutConnexion'] = $statut;
        exit;

    } else {
        // echo "Votre identifiant ou votre mot de passe est incorecte.";
        // sleep(5);
        header('Location: ../../pages/connexion.html');
        exit;
    }
?>