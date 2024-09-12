<?php
session_start(); // Démarrer la session

// Vérifier si l'utilisateur est connecté
if (isset($_SESSION['prenom'])) {
    echo "<p>Bonjour " . htmlspecialchars($_SESSION['prenom']) . "</p>";
    echo '<a href="logout.php">Déconnexion</a>';
} else {
    echo '<a href="inscription.php">Inscription</a> | <a href="connexion.php">Connexion</a>';
}
?>
