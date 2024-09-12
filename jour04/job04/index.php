<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Utilisateurs</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
        }
    </style>
</head>
<body>

    <h1>Liste des utilisateurs</h1>

    <!-- Bouton pour mettre à jour le tableau -->
    <button id="updateButton">Update</button>

    <!-- Tableau pour afficher les utilisateurs -->
    <table id="userTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <!-- Les lignes des utilisateurs seront insérées ici -->
        </tbody>
    </table>

    <script>
        // Fonction pour mettre à jour le tableau avec les données des utilisateurs
        function updateTable() {
            // Utiliser Fetch pour récupérer les utilisateurs depuis users.php
            fetch('users.php')
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Erreur lors de la récupération des utilisateurs.");
                    }
                    return response.json(); // Convertir la réponse en JSON
                })
                .then(data => {
                    const tbody = document.querySelector('#userTable tbody');
                    tbody.innerHTML = ''; // Vider le tableau avant d'ajouter les nouvelles données

                    // Boucler sur les utilisateurs et créer une ligne pour chaque utilisateur
                    data.forEach(user => {
                        const row = document.createElement('tr');
                        row.innerHTML = `<td>${user.id}</td>
                                         <td>${user.nom}</td>
                                         <td>${user.prenom}</td>
                                         <td>${user.email}</td>`;
                        tbody.appendChild(row);
                    });
                })
                .catch(error => {
                    console.error("Erreur :", error);
                });
        }

        // Ajouter un événement au bouton pour mettre à jour le tableau
        document.getElementById('updateButton').addEventListener('click', updateTable);
    </script>

</body>
</html>
