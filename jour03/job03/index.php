<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taquin de La Plateforme_</title>
    <style>
        #game-board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 2px;
            margin-bottom: 20px;
        }

        .tile {
            width: 100px;
            height: 100px;
            background-size: 300px 300px;
            cursor: grab;
        }

        .empty {
            background-color: lightgray;
        }

        #message {
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
        }

        .success {
            color: green;
        }

        .failure {
            color: red;
        }
    </style>
</head>
<body>

    <div id="message"></div>

    <!-- Plateau de jeu -->
    <div id="game-board">
        <div class="tile" data-position="1" style="background-image: url('1.PNG');" draggable="true"></div>
        <div class="tile" data-position="2" style="background-image: url('2.PNG');" draggable="true"></div>
        <div class="tile" data-position="3" style="background-image: url('3.PNG');" draggable="true"></div>
        <div class="tile" data-position="4" style="background-image: url('4.PNG');" draggable="true"></div>
        <div class="tile" data-position="5" style="background-image: url('5.PNG');" draggable="true"></div>
        <div class="tile" data-position="6" style="background-image: url('6.PNG');" draggable="true"></div>
        <div class="tile" data-position="7" style="background-image: url('7.PNG');" draggable="true"></div>
        <div class="tile" data-position="8" style="background-image: url('8.PNG');" draggable="true"></div>
        <div class="tile empty" data-position="9"></div> <!-- Case vide -->
    </div>

    <!-- Bouton pour recommencer -->
    <button id="restartButton" style="display: none;">Recommencer</button>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
