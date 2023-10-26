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

openMenuBtn.addEventListener("click", toggleHeaderMenu);
closeMenuBtn.addEventListener("click", toggleHeaderMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 428px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove("is-open");
  openMenuBtn.setAttribute("aria-expanded", false);
  //     // bodyScrollLock.enableBodyScroll(document.body);
});
// })();
// const navBar = document.querySelector(".header-nav-list").querySelectorAll("a");
// console.log(navBar);
// navBar.forEach((elements) => {
//   element.addEventListener("clik", function () {
//     navBar.forEach((nav) => nav.classList.remove(".header-active"));
//     this.classList.add(".header-active");
//   });
// });
const menuLinks = document.querySelectorAll(".header-nav-link");
console.log(menuLinks.href);
const runu = document.baseURI;
console.log(document);
console.log(document.location.pathname);

// const menuLinkFav = document.querySelector(".header-nav-link-fav");
const menuItems = document.querySelectorAll(".header-nav-list-item");
const home = document.querySelector("#header-home");
const favor = document.querySelector("#header-fav");

menuLinks.forEach((menuLink) => {
  const linkPath = new URL(menuLink.href).pathname;
  if (document.location.pathname === linkPath) {
    menuLink.classList.add("home-nav");
  }
  // if (document.location.pathname === menuLink.attributes.href.nodeValue) {
  //   console.log(menuLink.attributes);
  //   document.querySelector("body").style.backgroundColor = "green";
  // } else {
  //   document.querySelector("body").style.backgroundColor = "red";
  // }
});
// const getPage = () => {
//   if (document.location.pathname === "./index.html") {
//     document.querySelector("body").style.backgroundColor = "red";
//     home.style.backgroundColor = "#f4f4f4";
//     favor.classList.remove(".fav-nav");
//   } else if (document.location.pathname === "./index2.html") {
//     favor.classList.add(".fav-nav");
//     home.style.backgroundColor = "transparent";
//   }
// };

// for (let i = 0; i < menuLinks.length; i++) {
//   menuLinks[i].addEventListener("click", function (cheangeMenuTitle) {
//     let danim = menuLinks[i].baseURI;
//     if (document.location.pathname === menuLinks[i].baseURI) {
//       for (j = 0; j < menuItem.length; j++) {
//         if (menuItem[j].baseURI === danim) {
//           console.log(menuItem[j].innerText);
//         }
//       }
//     }
//   });
// }

// console.log(menuLinks[0].baseURI);
// console.log(menuItem);
// console.log(menuItem[0].children);
//console.log(menuItem[0].innerText);
