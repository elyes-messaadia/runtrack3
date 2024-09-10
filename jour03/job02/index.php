<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arc-en-ciel Puzzle</title>
    <style>
        #container {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }

        #container img {
            width: 100px;
            margin: 5px;
            cursor: pointer;
        }

        #message {
            text-align: center;
            font-size: 24px;
        }

        .success {
            color: green;
        }

        .failure {
            color: red;
        }
    </style>
    <!-- Inclure jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>

    <!-- Bouton pour mélanger les images -->
    <button id="shuffleButton">Mélanger</button>

    <!-- Conteneur pour les images -->
    <div id="container">
        <img src="arc1.png" id="1" draggable="true">
        <img src="arc2.png" id="2" draggable="true">
        <img src="arc3.png" id="3" draggable="true">
        <img src="arc4.png" id="4" draggable="true">
        <img src="arc5.png" id="5" draggable="true">
        <img src="arc6.png" id="6" draggable="true">
        <!-- Faire un Easter MacDo avec les Arc-en-ciels -->
    </div>

    <!-- Message à afficher en dessous -->
    <div id="message"></div>

    <!-- Script JS -->
    <script src="script.js"></script>

</body>

</html>