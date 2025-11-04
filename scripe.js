// Script pour le prototype Gestion de Commerce
document.addEventListener("DOMContentLoaded", () => {
    // Afficher un message de bienvenue
    alert("Bienvenue sur la plateforme Kahymm Gestion Commerce !");

    // Sélectionner tous les boutons
    const boutons = document.querySelectorAll("button");

    // Ajouter un événement à chaque bouton
    boutons.forEach(bouton => {
        bouton.addEventListener("click", () => {
            const titre = bouton.parentElement.querySelector("h2").textContent;
            alert("Vous avez cliqué sur : " + titre);
        });
    });

    // Exemple d’affichage de date automatique
    const footer = document.querySelector("footer p");
    if (footer) {
        const annee = new Date().getFullYear();
        footer.textContent = `© ${annee} - Prototype Kahymm Gestion Commerce`;
    }
});
