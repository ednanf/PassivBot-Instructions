document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navbarLinks = document.querySelector(".navbar-links");

  if (menuToggle && navbarLinks) {
    menuToggle.addEventListener("click", function () {
      navbarLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }
});
