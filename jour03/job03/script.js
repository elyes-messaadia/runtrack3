$(document).ready(function() {
    const $board = $('#game-board');
    const $tiles = $board.children();
    let emptyTile = $('.empty');

    // Fonction pour mélanger les carreaux
    function shuffleTiles() {
        const tilesArray = $tiles.toArray();
        tilesArray.sort(() => Math.random() - 0.5); // Mélanger aléatoirement
        $board.empty(); // Vider le plateau
        $.each(tilesArray, function(index, tile) {
            $board.append(tile); // Réinsérer les carreaux mélangés
        });
        emptyTile = $('.empty'); // Mettre à jour la case vide
    }

    // Activer le drag-and-drop pour chaque carreau
    function enableDragAndDrop() {
        let draggedTile = null;

        // Fonction pour démarrer le drag
        $('.tile').on('dragstart', function(event) {
            draggedTile = event.target;
            event.originalEvent.dataTransfer.setData('text', event.target.dataset.position);
        });

        // Empêcher le comportement par défaut de dragover sur la case vide
        $('.tile').on('dragover', function(event) {
            event.preventDefault();
        });

        // Gérer le drop
        $('.tile').on('drop', function(event) {
            event.preventDefault();
            const tileIndex = $(this).index();
            const emptyIndex = emptyTile.index();

            // Vérifier si le carreau déposé est adjacent à la case vide
            const isAdjacent = Math.abs(tileIndex - emptyIndex) === 1 || Math.abs(tileIndex - emptyIndex) === 3;

            if (isAdjacent) {
                // Échanger la case vide et le carreau glissé
                $(this).after(emptyTile);
                $(emptyTile).after(draggedTile);
                emptyTile = $(draggedTile); // Mettre à jour la case vide
                checkWin(); // Vérifier si le puzzle est résolu
            }
        });
    }

    // Vérifier si le puzzle est résolu
    function checkWin() {
        let isWin = true;
        $('.tile').each(function(index) {
            const position = $(this).data('position');
            if (position !== index + 1) {
                isWin = false;
                return false;
            }
        });

        if (isWin) {
            $('#message').text('Vous avez gagné !').addClass('success');
            $('.tile').off('click').off('dragstart').off('drop'); // Désactiver les clics et le drag-and-drop
            $('#restartButton').show(); // Montrer le bouton recommencer
        }
    }

    // Mélanger les carreaux au chargement de la page
    shuffleTiles();
    enableDragAndDrop();

    // Bouton recommencer
    $('#restartButton').on('click', function() {
        $('#message').empty(); // Vider le message
        $('#message').removeClass('success');
        shuffleTiles(); // Remélanger les carreaux
        enableDragAndDrop(); // Réactiver le drag-and-drop
        $(this).hide(); // Cacher le bouton "Recommencer"
    });
});
