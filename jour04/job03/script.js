// Fonction pour filtrer les Pokémon
document.getElementById("filterButton").addEventListener("click", function() {
    // Récupérer les valeurs des filtres
    const idFilter = document.getElementById("id").value.toLowerCase();
    const nameFilter = document.getElementById("name").value.toLowerCase();
    const typeFilter = document.getElementById("type").value.toLowerCase();

    // Utiliser Fetch pour récupérer le contenu du fichier JSON
    fetch("pokemon.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement des données.");
            }
            return response.json(); // Convertir en JSON
        })
        .then(data => {
            // Filtrer les Pokémon en fonction des critères
            const filteredPokemon = data.filter(pokemon => {
                const matchesId = idFilter === "" || pokemon.id.toString() === idFilter;
                const matchesName = nameFilter === "" || pokemon.name.french.toLowerCase().includes(nameFilter);
                const matchesType = typeFilter === "" || pokemon.type.some(type => type.toLowerCase() === typeFilter);
                return matchesId && matchesName && matchesType;
            });

            // Afficher les résultats
            displayResults(filteredPokemon);
        })
        .catch(error => {
            console.error("Erreur :", error);
        });
});

// Fonction pour afficher les résultats filtrés
function displayResults(pokemonList) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Vider les résultats précédents

    if (pokemonList.length === 0) {
        resultsDiv.textContent = "Aucun Pokémon trouvé.";
        return;
    }

    pokemonList.forEach(pokemon => {
        const pokemonDiv = document.createElement("div");
        pokemonDiv.innerHTML = `<strong>ID :</strong> ${pokemon.id} <br> 
                                <strong>Nom (français) :</strong> ${pokemon.name.french} <br> 
                                <strong>Type :</strong> ${pokemon.type.join(', ')} <br><br>`;
        resultsDiv.appendChild(pokemonDiv);
    });
}
