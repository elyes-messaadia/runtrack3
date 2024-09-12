<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'utilisateurs';
$username = 'root'; // Utilise ton nom d'utilisateur MySQL
$password = ''; // Utilise ton mot de passe MySQL

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Requête pour récupérer tous les utilisateurs
    $stmt = $pdo->query("SELECT * FROM utilisateurs");
    $utilisateurs = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Retourner les données au format JSON
    echo json_encode($utilisateurs);
} catch (PDOException $e) {
    echo "Erreur de connexion à la base de données : " . $e->getMessage();
}
?>
