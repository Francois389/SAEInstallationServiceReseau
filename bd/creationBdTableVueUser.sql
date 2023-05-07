CREATE DATABASE SOS_ordi;

CREATE TABLE personnel (
    adresse_mail VARCHAR(70) NOT NULL,
    nom VARCHAR(50) NOT NULL ,
    prenom VARCHAR(50) NOT NULL ,
    date_de_naissance DATE,
    mot_de_passe TEXT NOT NULL /*? j'ai mis le type TEXT au cas si on décide de hacher le mdp*/,
    statut INT NOT NULL,
    PRIMARY KEY (adresse_mail)
);

CREATE VIEW vue_pdg AS (
    SELECT adresse_mail, nom, prenom, date_de_naissance, statut
    FROM personnel
);

CREATE VIEW vue_managers AS (
    SELECT adresse_mail, nom, prenom, date_de_naissance, statut
    FROM personnel
    WHERE statut >= 2
);

CREATE VIEW vue_employes AS (
    SELECT adresse_mail, nom, prenom, date_de_naissance, statut
    FROM personnel
    WHERE statut >= 3
);

CREATE VIEW vue_connexion AS (
    SELECT adresse_mail, mot_de_passe, statut
    FROM personnel
);

CREATE USER 'pdg'@'%' IDENTIFIED BY '2f)1aQUTlqscubl';
CREATE USER 'manager'@'%' IDENTIFIED BY '&el3IXwkcstnpi';
CREATE USER 'employe'@'%' IDENTIFIED BY 'AU$)I#s5zzv8814';
CREATE USER 'connexion'@'%' IDENTIFIED BY 'B42Pz#EitFhyL';

GRANT SELECT ON sos_ordi.vue_pdg TO 'pdg'@'localhost';
GRANT SELECT ON sos_ordi.vue_managers TO 'manager'@'localhost';
GRANT SELECT ON sos_ordi.vue_employes TO 'employe'@'localhost';
GRANT SELECT ON sos_ordi.vue_connexion TO 'connexion'@'localhost';