// Sélectionner le bouton et ajouter un événement de clic
document.getElementById("button").addEventListener("click", function() {
    // Utiliser Fetch pour récupérer le contenu du fichier expression.txt
    fetch("expression.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement de l'expression.");
            }
            return response.text(); // Retourner le contenu du fichier
        })
        .then(data => {
            // Insérer le contenu récupéré dans le paragraphe
            document.getElementById("expression").textContent = data;
        })
        .catch(error => {
            console.error("Erreur :", error);
        });
});
