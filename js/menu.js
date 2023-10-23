// (() => {
const mobileMenu = document.querySelector(".header-mobi-menu-container");
const openMenuBtn = document.querySelector(".heder-open-menu-btn");
const closeMenuBtn = document.querySelector(".header-close-mob-menu-btn");
const favorCase = document.querySelector(".header-item-favorite");
const favorLink = document.querySelector(".header-favor-link");
const homeCase = document.querySelector(".header-item-home");

openMenuBtn.addEventListener("click", getOpen);
function getOpen() {
  mobileMenu.classList.add("is-open");
}
closeMenuBtn.addEventListener("click", getClose);
function getClose() {
  mobileMenu.classList.remove("is-open");
}
favorCase.addEventListener("click", openFavor);
function openFavor() {
  favorCase.style.backgroundColor = "#f4f4f4";
  favorCase.style.color = "rgba(36, 36, 36, 1)";
}
//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//     openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//     mobileMenu.classList.toggle("is-open");

//     //     const scrollLockMethod = !isMenuOpen
//     //       ? "disableBodyScroll"
//     //       : "enableBodyScroll";
//     //     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener("click", toggleMenu);
//   closeMenuBtn.addEventListener("click", toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 428px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove("is-open");
//     openMenuBtn.setAttribute("aria-expanded", false);
//     // bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
