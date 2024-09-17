document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById("game-board");
    const tiles = Array.from(document.getElementsByClassName("tile"));
    let emptyTile = document.querySelector(".empty");

    // Fonction pour mélanger les carreaux au début de la partie
    function shuffleTiles() {
        const tileArray = tiles.slice(0, 8); // Ne pas inclure la case vide dans le mélange
        tileArray.sort(() => Math.random() - 0.5); // Mélange aléatoire
        tileArray.forEach(tile => gameBoard.appendChild(tile)); // Réinsérer les carreaux mélangés dans la grille
        gameBoard.appendChild(emptyTile); // S'assurer que la case vide est à la fin
    }

    // Vérifier si deux cases sont adjacentes
    function areAdjacent(tile1, tile2) {
        const index1 = Array.prototype.indexOf.call(gameBoard.children, tile1);
        const index2 = Array.prototype.indexOf.call(gameBoard.children, tile2);
        const diff = Math.abs(index1 - index2);
        return diff === 1 || diff === 3;
    }

    // Déplacer un carreau vers la case vide
    function moveTile(tile) {
        if (areAdjacent(tile, emptyTile)) {
            const emptyPos = emptyTile.dataset.position;
            emptyTile.dataset.position = tile.dataset.position;
            tile.dataset.position = emptyPos;

            gameBoard.insertBefore(tile, emptyTile); // Échanger les positions dans le DOM
        }
    }

    // Vérifier si le joueur a gagné
    function checkWin() {
        let isWin = true;
        tiles.forEach((tile, index) => {
            if (tile.dataset.position != index + 1) {
                isWin = false;
            }
        });
        if (isWin) {
            document.getElementById("message").textContent = "Vous avez gagné !";
            document.getElementById("restartButton").style.display = "block"; // Afficher le bouton de recommencement
        }
    }

    // Ajouter l'événement de clic sur chaque carreau
    tiles.forEach(tile => {
        tile.addEventListener("click", function() {
            moveTile(tile);
            checkWin();
        });
    });

    // Mélanger les carreaux au chargement de la page
    shuffleTiles();

    // Recommencer la partie
    document.getElementById("restartButton").addEventListener("click", function() {
        this.style.display = "none"; // Cacher le bouton après avoir cliqué
        shuffleTiles();
        document.getElementById("message").textContent = "";
    });
});
