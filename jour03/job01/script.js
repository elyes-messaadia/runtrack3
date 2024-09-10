$(document).ready(function() {
    // Lorsque le bouton "Afficher le texte" est cliqué
    $('#showTextButton').click(function() {
        // Afficher le texte
        $('#text').fadeIn(); // On peut aussi utiliser .show() pour une apparition simple
        // Afficher le bouton "Cacher le texte"
        $('#hideTextButton').fadeIn();
    });

    // Lorsque le bouton "Cacher le texte" est cliqué
    $('#hideTextButton').click(function() {
        // Cacher le texte
        $('#text').fadeOut(); // On peut aussi utiliser .hide()
        // Cacher le bouton "Cacher le texte"
        $('#hideTextButton').fadeOut();
    });
});
