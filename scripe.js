// --- Animation au chargement du tableau de bord ---

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 200); // délai d’animation 200ms par carte
    });
});


// --- Animation hover sur les boutons ---

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.classList.add("hovered");
    });

    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("hovered");
    });
});

