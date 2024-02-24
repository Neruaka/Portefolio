// Afficher le bouton de retour en haut lors du défilement
const boutonRetourHaut = document.querySelector('.retour-haut');
window.onscroll = function() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        boutonRetourHaut.style.display = "block";
    } else {
        boutonRetourHaut.style.display = "none";
    }
};

// Faire défiler jusqu'en haut de la page lorsque l'utilisateur clique sur le bouton
boutonRetourHaut.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});