<?php
try
{
    $db = new PDO('mysql:host=192.168.43.178;dbname=sys;charset=utf8', 'quentin', '12345');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$sqlQuery = 'SELECT * FROM tableTest';
$recipesStatement = $mysqlClient->prepare($sqlQuery);
$Statement->execute([]);
$result = $recipesStatement->fetchAll();

echo $result['id'];

?>
