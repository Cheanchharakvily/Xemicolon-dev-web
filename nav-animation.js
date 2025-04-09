let lastScrollY = window.scrollY;
let isHoveringNavbar = false;

// Detect if hovering on navbar or megaMenu
navbar.addEventListener("mouseenter", () => isHoveringNavbar = true);
navbar.addEventListener("mouseleave", () => isHoveringNavbar = false);
megaMenu.addEventListener("mouseenter", () => isHoveringNavbar = true);
megaMenu.addEventListener("mouseleave", () => isHoveringNavbar = false);

window.addEventListener("scroll", () => {
  // Don't hide if interacting with navbar/mega menu
  if (isHoveringNavbar) return;

  if (window.scrollY > lastScrollY && window.scrollY > 150) {
    navbar.style.top = "-100px"; // hide
  } else {
    navbar.style.top = "0"; // show
  }

  lastScrollY = window.scrollY;
});
