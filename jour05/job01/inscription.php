<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>

    <h1>Inscription</h1>

    <form id="inscriptionForm" method="POST">
        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" required><br>
        <span id="error-prenom" style="color:red;"></span><br>

        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required><br>
        <span id="error-nom" style="color:red;"></span><br>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required><br>
        <span id="error-email" style="color:red;"></span><br>

        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required><br>
        <span id="error-password" style="color:red;"></span><br>

        <label for="confirm_password">Confirmer mot de passe :</label>
        <input type="password" id="confirm_password" name="confirm_password" required><br>
        <span id="error-confirm-password" style="color:red;"></span><br>

        <button type="submit">S'inscrire</button>
    </form>

    <script>
        document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Empêcher le rafraîchissement de la page

            // Réinitialiser les messages d'erreur
            document.getElementById('error-prenom').textContent = '';
            document.getElementById('error-nom').textContent = '';
            document.getElementById('error-email').textContent = '';
            document.getElementById('error-password').textContent = '';
            document.getElementById('error-confirm-password').textContent = '';

            // Récupérer les valeurs des champs
            const prenom = document.getElementById('prenom').value;
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirm_password = document.getElementById('confirm_password').value;

            // Vérifications en JavaScript
            let valid = true;

            if (prenom.length < 2) {
                document.getElementById('error-prenom').textContent = 'La taille de votre prénom est trop petite';
                valid = false;
            }

            if (nom.length < 2) {
                document.getElementById('error-nom').textContent = 'La taille de votre nom est trop petite';
                valid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('error-email').textContent = "Email non valide";
                valid = false;
            }

            if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
                document.getElementById('error-password').textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.";
                valid = false;
            }

            if (password !== confirm_password) {
                document.getElementById('error-confirm-password').textContent = "Les mots de passe ne correspondent pas";
                valid = false;
            }

            if (valid) {
                // Envoyer les données au serveur avec Fetch API
                const formData = new FormData(this);
                fetch('inscription_process.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(data => {
                    if (data === 'success') {
                        window.location.href = 'connexion.php'; // Rediriger vers la page de connexion après inscription réussie
                    } else {
                        document.getElementById('error-email').textContent = data; // Afficher l'erreur
                    }
                });
            }
        });
    </script>

</body>
</html>
