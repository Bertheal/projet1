document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact');

    // Créer un bouton pour afficher un message de bienvenue
    const button = document.createElement('button');
    button.innerHTML = "Cliquez ici pour un message spécial";
    contactSection.appendChild(button);

    // Ajouter un événement au bouton
    button.addEventListener('click', function() {
        alert("Merci de visiter ma page ! 😊");
    });
});
