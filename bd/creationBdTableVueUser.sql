/* ////////////     ATTENTION !!! REFLECHIR AU QUESTIONS DANS LES COMMENTAIRES AVANT DE COPIER COLLER LE CODE      ////////////// */

CREATE DATABASE SaeReseau;

CREATE TABLE employe (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) /*NOT NULL ?*/,
    prenom VARCHAR(50) /*NOT NULL ?*/,
    age INT /*NOT NULL ?*/,
    date_de_naissance DATE /*NOT NULL ?*/,
    mot_de_passe TEXT /*NOT NULL ? j'ai mis le type TEXT au cas si on décide de hacher le mdp*/,
    statut INT /*NOT NULL ?*/,
    PRIMARY KEY (id)
);

CREATE VIEW tout_le_monde AS (
    SELECT *
    FROM employe
); /*vue pour le PDG, faut il donné au PDG le droit de voir le mdp? */

CREATE VIEW manager_et_employe AS (
    SELECT *
    FROM employe
    WHERE statut <= 2
); /*vue pour le/les manager, faut il donné au manager le droit de voir le mdp? */

CREATE VIEW employe AS (
    SELECT *
    FROM employe
    WHERE statut <= 3
); /*a réfléchir a se qu'on donne l'autorisation de voir au employés */

CREATE USER 'PDG' IDENTIFIED BY '2f)1aQUTlqscubl';
CREATE USER 'Manager' IDENTIFIED BY '&el3IXwkcstnpi';
CREATE USER 'Employe' IDENTIFIED BY 'AU$)I#s5zzv8814';

GRANT SELECT ON tout_le_monde TO 'PDG';
GRANT SELECT ON manager_et_employe TO 'Manager';
GRANT SELECT ON employes TO 'Employe';