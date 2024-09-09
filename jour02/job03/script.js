function addone() {
  let compteurElement = document.getElementById("compteur");

  let compteur = parseInt(compteurElement.textContent);
  compteur += 1;

  compteurElement.textContent = compteur;
}

document.getElementById("button").addEventListener("click", addone);
