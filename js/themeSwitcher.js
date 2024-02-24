document.getElementById('themeButton').addEventListener('click', function() {
    var link = document.querySelector('link[href*="Index.css"]');
    // Trouver les éléments d'icône dans le bouton
    var iconSun = this.querySelector('.fa-sun');
    var iconMoon = this.querySelector('.fa-moon');

    if (link.getAttribute('href') == "/css/nightIndex.css") {
        link.setAttribute('href', '/css/dayIndex.css');
        // Basculer les icônes
        iconSun.style.display = "none";
        iconMoon.style.display = "inline";
    } else {
        link.setAttribute('href', '/css/nightIndex.css');
        // Basculer les icônes
        iconMoon.style.display = "none";
        iconSun.style.display = "inline";
    }
});
