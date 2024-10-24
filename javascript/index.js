//Mobile navigation

const primaryNav = document.getElementById("primary-navigation");
const closeButton = document.querySelector(".close-button");
const menuButton = document.querySelector(".menu-button");
const visibility = primaryNav.getAttribute("data-visible");
const modeToggle = document.querySelector(".dark-light-btn");
const html = document.querySelector("html");
const colourMode = html.getAttribute("data-theme");

menuButton.addEventListener("click", () => {
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    menuButton.setAttribute("aria-expanded", true);
  }
});

closeButton.addEventListener("click", () => {
  primaryNav.setAttribute("data-visible", false);
  menuButton.setAttribute("aria-expanded", false);
});

// active links

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`nav ul li a[href="#${id}"]`);

        if (entry.isIntersecting) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// dark mode toggle

modeToggle.addEventListener("click", () => {
  const currentMode = html.getAttribute("data-theme");

  if (currentMode === "light") {
    html.setAttribute("data-theme", "dark");
    modeToggle.style.backgroundImage = "url(images/light-mode.svg)";
    modeToggle.setAttribute("aria-label", "change to light theme");
  } else {
    html.setAttribute("data-theme", "light");
    modeToggle.style.backgroundImage = "url(images/dark-mode.svg)";
    modeToggle.setAttribute("aria-label", "change to dark theme");
  }
});
