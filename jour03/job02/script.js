function enableDragAndDrop() {
  let draggedImage = null;

  // Activer le drag-and-drop pour chaque image
  $("#container img").on("dragstart", function (event) {
    draggedImage = event.target;
  });

  $("#container img").on("dragover", function (event) {
    event.preventDefault(); // Permettre le drop
  });

  $("#container img").on("drop", function (event) {
    event.preventDefault();
    if (draggedImage !== event.target) {
      const draggedIndex = $(draggedImage).index();
      const targetIndex = $(event.target).index();

      if (draggedIndex > targetIndex) {
        $(event.target).before(draggedImage);
      } else {
        $(event.target).after(draggedImage);
      }
    }
  });
}
// Fonction pour mélanger un tableau
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

$(document).ready(function () {
  const $container = $("#container");
  const $images = $container.children(); // Sélectionner les images dans le conteneur

  // Fonction pour mélanger les images
  $("#shuffleButton").click(function () {
    const shuffledImages = shuffle($images.toArray());
    $container.empty(); // Vider le conteneur
    $.each(shuffledImages, function (index, img) {
      $container.append(img); // Réinsérer les images mélangées
    });
    enableDragAndDrop(); // Ré-attacher les événements de drag-and-drop après le mélange
  });

  // Initialiser le drag-and-drop au chargement de la page
  enableDragAndDrop();
});
// Fonction pour vérifier si les images sont dans le bon ordre
function checkOrder() {
  const currentOrder = $("#container img")
    .map(function () {
      return $(this).attr("id");
    })
    .get();

  const correctOrder = ["1", "2", "3", "4", "5", "6"];

  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
    $("#message")
      .text("Vous avez gagné !")
      .addClass("success")
      .removeClass("failure");
  } else {
    $("#message")
      .text("Vous avez perdu.")
      .addClass("failure")
      .removeClass("success");
  }
}

// Ajouter un bouton pour vérifier l'ordre
$(document).ready(function () {
  const $checkButton = $("<button>Vérifier l'ordre</button>");
  $("body").append($checkButton);

  $checkButton.click(checkOrder);
});
