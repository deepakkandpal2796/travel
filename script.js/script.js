const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const hero = document.querySelector('.hero');
burger.addEventListener("click", () => {
//   nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
  menu.classList.toggle("menu-open")
  hero.classList.toggle("hero-active");

});

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     nav.classList.toggle("nav-open");
//     burger.classList.toggle("toggle");
//   });
// });
