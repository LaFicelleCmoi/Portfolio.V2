document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidenav = document.getElementById("mySidenav");
  const navLinks = document.querySelectorAll(".sidenav a[href^='#']");

  // Ouvre la sidenav
  openBtn.onclick = function() {
    sidenav.classList.add("active");
  };

  // Ferme la sidenav
  closeBtn.onclick = function() {
    sidenav.classList.remove("active");
  };

  // Ferme la sidenav après un clic sur un lien
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      // Empêche le comportement par défaut du lien
      e.preventDefault();

      // Récupère l'ancre
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Ferme le menu
      sidenav.classList.remove("active");

      // Défile vers l'ancre après un court délai (pour laisser le temps à la sidenav de se fermer)
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Délai de 300ms pour laisser le temps à l'animation de fermeture
    });
  });
});
