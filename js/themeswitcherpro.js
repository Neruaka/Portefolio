document.getElementById('themeButton').addEventListener('click', function() {
    var link = document.getElementsByTagName('link')[0];
    if (link.getAttribute('href') == "../css/Projets.css") {
        link.setAttribute('href', '../css/dayprojects.css');
        this.textContent = "Mode sombre";
    } else {
        link.setAttribute('href', '../css/Projets.css');
        this.textContent = "Mode clair";
    }
});