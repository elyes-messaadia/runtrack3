// Fonction pour valider le formulaire d'inscription
document.getElementById('inscriptionForm')?.addEventListener('submit', function(e) {
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

    // Vérification du prénom
    if (prenom.length < 2) {
        document.getElementById('error-prenom').textContent = 'La taille de votre prénom est trop petite';
        valid = false;
    }

    // Vérification du nom
    if (nom.length < 2) {
        document.getElementById('error-nom').textContent = 'La taille de votre nom est trop petite';
        valid = false;
    }

    // Vérification de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-email').textContent = "Email non valide";
        valid = false;
    }

    // Vérification du mot de passe (minimum 8 caractères, avec au moins une majuscule, un chiffre, et un caractère spécial)
    if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        document.getElementById('error-password').textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.";
        valid = false;
    }

    // Vérification de la confirmation du mot de passe
    if (password !== confirm_password) {
        document.getElementById('error-confirm-password').textContent = "Les mots de passe ne correspondent pas";
        valid = false;
    }

    // Si toutes les vérifications sont valides, envoyer les données au serveur
    if (valid) {
        const formData = new FormData(this); // Créer un FormData à partir du formulaire
        fetch('inscription_process.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                window.location.href = 'connexion.php'; // Rediriger vers la page de connexion après inscription réussie
            } else {
                document.getElementById('error-email').textContent = data; // Afficher l'erreur (email déjà pris)
            }
        });
    }
});

// Fonction pour valider le formulaire de connexion
document.getElementById('connexionForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher le rafraîchissement de la page

    // Réinitialiser les messages d'erreur
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-password').textContent = '';

    // Récupérer les valeurs des champs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envoyer les données au serveur avec Fetch API
    const formData = new FormData(this); // Créer un FormData à partir du formulaire
    fetch('connexion_process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            window.location.href = 'index.php'; // Rediriger vers la page d'accueil après connexion réussie
        } else {
            document.getElementById('error-email').textContent = data; // Afficher l'erreur (email ou mot de passe incorrect)
        }
    });
});
