<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtrer Pokémon</title>
</head>

<body>

    <!-- Formulaire pour filtrer les Pokémon -->
    <form id="filterForm">
        <label for="id">ID :</label>
        <input type="text" id="id" name="id"><br><br>

        <label for="name">Nom (français) :</label>
        <input type="text" id="name" name="name"><br><br>

        <label for="type">Type :</label>
        <select id="type" name="type">
            <option value="">Tous</option>
            <option value="Grass">Plante</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Feu</option>
            <option value="Water">Eau</option>
            <option value="Electric">Électrique</option>
            <!-- Ajoute d'autres types si nécessaire -->
        </select><br><br>

        <input type="button" id="filterButton" value="Filtrer">
    </form>

    <!-- Div pour afficher les résultats -->
    <div id="results"></div>

    <!-- Inclure le fichier script.js -->
    <script src="script.js"></script>

</body>

</html>