const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

