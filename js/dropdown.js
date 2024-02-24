document.addEventListener('DOMContentLoaded', () => {
    const burgerMenuButton = document.querySelector('#burgerMenuButton');
    const navLinks = document.querySelector('#navLinks');

    // Toggle du menu burger
    burgerMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navLinks.classList.toggle('closed'); // Assurez-vous d'ajouter ou de retirer la classe 'closed' selon le besoin
        console.log('click sur le burger');
    });

    // Fermeture du menu burger au redimensionnement
    window.addEventListener('resize', () => {
        if (window.innerWidth > 750) {
            navLinks.classList.remove('open');
            navLinks.classList.add('closed'); // Assurez-vous que la classe 'closed' est bien gérée
            console.log('redimensionnement');
        }
    });
});
console.log('dropdown.js chargé');