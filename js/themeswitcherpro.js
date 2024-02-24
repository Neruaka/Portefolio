document.getElementById('themeButton').addEventListener('click', function() {
    var link = document.getElementsByTagName('link')[0];
    // Trouver les éléments d'icône dans le bouton
    var iconSun = this.querySelector('.fa-sun');
    var iconMoon = this.querySelector('.fa-moon');

    if (link.getAttribute('href') == "/css/Projets.css") {
        link.setAttribute('href', '/css/dayprojects.css');
        // Basculer les icônes
        iconSun.style.display = "none";
        iconMoon.style.display = "inline";
    } else {
        link.setAttribute('href', '/css/Projets.css');
        // Basculer les icônes
        iconMoon.style.display = "none";
        iconSun.style.display = "inline";
    }
});
