// Fonction pour calculer et mettre à jour la couleur du footer en fonction du scroll
window.addEventListener("scroll", function () {
  // Récupérer la hauteur totale du document
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let docHeight = document.body.offsetHeight;

  // Calculer le pourcentage de scrolling
  let scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

  // Récupérer le footer
  let footer = document.getElementById("footer");

  // Modifier la couleur du footer en fonction du pourcentage de scrolling
  // Par exemple, nous allons utiliser une teinte de vert
  let greenValue = Math.min(255, Math.floor((scrollPercent / 100) * 255));
  footer.style.backgroundColor = `rgb(0, ${greenValue}, 0)`; // Couleur en fonction du scroll
  /* J'adore cette fonction, j'aime vraiment beaucoup le fait de pouvoir changer la couleur du footer 
    en scrollant vers le bas et inversement*/
});
