const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const servicesLink = document.getElementById("servicesLink");
const megaMenu = document.getElementById("megaMenu");
const tabItems = document.querySelectorAll(".service-tabs li");
const contentItems = document.querySelectorAll(".mega-content");
const links = document.querySelectorAll(".nav-links li");

let megaTimeout = null;
let isMegaOpen = false;

// Mega Menu Show
function showMegaMenu() {
  clearTimeout(megaTimeout);

  if (!isMegaOpen) {
    megaMenu.style.display = "flex";
    megaMenu.style.animation = "slideDown 0.3s ease forwards";
    isMegaOpen = true;
  }

  // Change navbar style for light mode
  navbar.style.backgroundColor = "#EDEBE7";
  links.forEach((li) => {
    li.querySelector("a").style.color = "#021526";
  });
  logo.src = "assets/logo_white.png";
}

// Mega Menu Hide
function hideMegaMenu() {
  megaMenu.style.animation = "slideUp 0.3s ease forwards";

  megaMenu.addEventListener("animationend", function handler(e) {
    if (e.animationName === "slideUp") {
      megaMenu.style.display = "none";
      isMegaOpen = false;
      megaMenu.removeEventListener("animationend", handler);
    }
  });

  // Revert navbar styling
  navbar.style.backgroundColor = "#021526";
  links.forEach((li) => {
    li.querySelector("a").style.color = "#EDEBE7";
  });
  logo.src = "assets/logo_dark.png";
}

// Handle hover areas with delay
servicesLink.addEventListener("mouseenter", () => {
  clearTimeout(megaTimeout);
  showMegaMenu();
});

servicesLink.addEventListener("mouseleave", () => {
  megaTimeout = setTimeout(hideMegaMenu, 250);
});

megaMenu.addEventListener("mouseenter", () => {
  clearTimeout(megaTimeout);
  showMegaMenu();
});

megaMenu.addEventListener("mouseleave", () => {
  megaTimeout = setTimeout(hideMegaMenu, 250);
});

// Tab switching inside mega menu
tabItems.forEach((tab) => {
  tab.addEventListener("mouseenter", () => {
    const target = tab.getAttribute("data-target");
    tabItems.forEach((t) => t.classList.remove("active"));
    contentItems.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

// Scroll Hide / Show Navbar
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (isMegaOpen) return; // Don’t hide if mega menu is open

  if (window.scrollY > lastScrollY && window.scrollY > 150) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollY = window.scrollY;
});

// Mobile Nav Toggle
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const closeNav = document.getElementById("closeNav");
const servicesToggle = document.getElementById("servicesToggle");
const servicesSubmenu = document.getElementById("servicesSubmenu");

hamburger.addEventListener("click", () => {
  mobileNav.classList.add("active");
  hamburger.classList.add("active");
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  hamburger.classList.remove("active");
});

servicesToggle.addEventListener("click", (e) => {
  e.preventDefault();
  servicesSubmenu.classList.toggle("active");
});
