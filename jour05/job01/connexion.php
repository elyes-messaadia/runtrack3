<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>

    <h1>Connexion</h1>

    <form id="connexionForm" method="POST">
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required><br>
        <span id="error-email" style="color:red;"></span><br>

        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required><br>
        <span id="error-password" style="color:red;"></span><br>

        <button type="submit">Se connecter</button>
    </form>

    <script>
        document.getElementById('connexionForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Empêcher le rafraîchissement de la page

            // Réinitialiser les messages d'erreur
            document.getElementById('error-email').textContent = '';
            document.getElementById('error-password').textContent = '';

            // Récupérer les valeurs des champs
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Envoyer les données au serveur avec Fetch API
            const formData = new FormData(this);
            fetch('connexion_process.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                if (data === 'success') {
                    window.location.href = 'index.php'; // Rediriger vers la page d'accueil après connexion réussie
                } else {
                    document.getElementById('error-email').textContent = data; // Afficher l'erreur
                }
            });
        });
    </script>

</body>
</html>
