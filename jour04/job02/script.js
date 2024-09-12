function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        const jsonObject = JSON.parse(jsonString);
        
        // Retourner la valeur correspondant à la clé
        return jsonObject[key];
    } catch (error) {
        console.error("Erreur de parsing du JSON :", error);
        return undefined; // Retourner undefined en cas d'erreur
    }
}

const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

// Exemple d'utilisation
console.log(jsonValueKey(jsonString, "city")); // Affiche "Marseille"
console.log(jsonValueKey(jsonString, "name")); // Affiche "La Plateforme_"
