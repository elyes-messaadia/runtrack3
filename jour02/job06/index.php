<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job06</title>
</head>

<body>
    <h1>Bienvenue à La Plateforme_ !</h1>
    <p>Entrez le code Konami pour changer le style de la page.</p>

    <script>
        // Séquence du code Konami
        const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        /* Haut, Haut, 
                Bas, Bas, 
                    Gauche, Droite, 
                    Gauche, Droite,
                                   B, A*/

        // Tableau pour stocker la séquence tapée par l'utilisateur
        let userInput = [];

        // Écouter les touches appuyées sur le document
        document.addEventListener('keydown', function(event) {
            // Afficher la touche pressée dans la console
            console.log("Touche appuyée : " + event.key);

            // Ajouter la touche pressée dans le tableau (event.keyCode correspond à la touche)
            userInput.push(event.keyCode);

            // Si la séquence dépasse la longueur du code Konami, on enlève les premières entrées
            if (userInput.length > konamiCode.length) {
                userInput.shift(); // Supprimer le premier élément du tableau pour maintenir la longueur
            }

            // Vérifier si la séquence correspond au code Konami
            if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
                activateKonamiCode(); // Appeler la fonction qui stylise la page
            }
        });

        // Fonction à exécuter lorsque le code Konami est détecté
        function activateKonamiCode() {
            // Changer le fond de la page aux couleurs de La Plateforme_
            document.body.style.backgroundColor = "#007bff"; // Bleu vif
            document.body.style.color = "#ffffff"; // Texte en blanc
            alert("Code Konami détecté ! La page est maintenant aux couleurs de La Plateforme_.");
        }
    </script>
</body>

</html>