function tri(numbers, order) {
    // Fonction de tri personnalisée
    numbers.sort(function(a, b) {
      if (order === "asc") {
        return a - b; // Tri ascendant
      } else if (order === "desc") {
        return b - a; // Tri descendant
      } else {
        throw new Error("Le paramètre 'order' doit être 'asc' ou 'desc'");
      }
    });
    
    // Retourner le tableau trié
    return numbers;
  }
  
  // Exemple d'utilisation :
  console.log(tri([3, 8, 1, 4], "asc"));  // Affiche [1, 3, 4, 8] (ordre ascendant)
  console.log(tri([3, 8, 1, 4], "desc")); // Affiche [8, 4, 3, 1] (ordre décroissant)
  