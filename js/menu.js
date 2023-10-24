// (() => {
const mobileMenu = document.querySelector(".header-mobi-menu-container");
const openMenuBtn = document.querySelector(".heder-open-menu-btn");
const closeMenuBtn = document.querySelector(".header-close-mob-menu-btn");
const favorCase = document.querySelector(".header-item-favorite");
const favorLink = document.querySelector(".header-favor-link");
const homeCase = document.querySelector(".header-item-home");

const toggleHeaderMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMenu.classList.toggle("is-open");
};

//     //     const scrollLockMethod = !isMenuOpen
//     //       ? "disableBodyScroll"
//     //       : "enableBodyScroll";
//     //     bodyScrollLock[scrollLockMethod](document.body);
//   };

openMenuBtn.addEventListener("click", toggleHeaderMenu);
closeMenuBtn.addEventListener("click", toggleHeaderMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 428px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove("is-open");
//     openMenuBtn.setAttribute("aria-expanded", false);
//     // bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
const navBar = document.querySelector(".header-nav-list").querySelectorAll("a");
console.log(navBar);
navBar.forEach((elements) => {
  element.addEventListener("clik", function () {
    navBar.forEach((nav) => nav.classList.remove(".header-active"));
    this.classList.add(".header-active");
  });
});
