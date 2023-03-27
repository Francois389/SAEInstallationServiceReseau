<?php
try
{
    $db = new PDO('mysql:host=192.168.43.178;dbname=sys', 'quentin', '12345');
}
catch (PDOException $e)
{
        die('Erreur : ' . $e->getMessage());
}

$sqlQuery = 'SELECT * FROM sys.tableTest';
$recipesStatement = $mysqlClient->prepare($sqlQuery);
$Statement->execute([]);
$result = $recipesStatement->fetchAll();

echo $result['id']; 

?>
