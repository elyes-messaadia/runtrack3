// Fonction pour vérifier si un nombre est premier
function estPremier(n) {
    if (n <= 1) return false; // Les nombres inférieurs ou égaux à 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; // Si on trouve un diviseur, ce n'est pas un nombre premier
      }
    }
    return true; // Sinon, c'est un nombre premier
  }
  
  // Fonction pour calculer la somme si les deux nombres sont premiers
  function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
      return a + b; // Si les deux nombres sont premiers, on retourne leur somme
    } else {
      return false; // Sinon, on retourne false
    }
  }
  
  // Exemple d'utilisation
  console.log(sommenombrespremiers(3, 5)); // Affiche 8 (car 3 et 5 sont premiers)
  console.log(sommenombrespremiers(4, 5)); // Affiche false (car 4 n'est pas premier)
  