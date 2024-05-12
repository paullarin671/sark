// burger menu
"use strict";
let header = document.querySelector(".header");
let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
const headerListLinks = document.querySelectorAll(".header__link");
let headerItemLists = document.querySelectorAll(".header__link-list");
let headerProperties = document.querySelectorAll(".header__properties");

// modals
let modals = document.querySelectorAll(".modal");
let modalBurgers = document.querySelectorAll(".modal__burger");

// links scroll
const menuLinks = document.querySelectorAll("a[href^='#']");
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    let href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector(".header").offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
}
// headerList
headerItemLists.forEach((headerItemList) => {
  headerItemList.addEventListener("click", () => {
    headerProperties.forEach((headerProperty) => {
      headerProperty.classList.toggle("active");
      headerItemList.classList.toggle("active");
    });
  });
});

for (let i = 0; i < headerListLinks.length; i++) {
  headerListLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    headerMenu.classList.remove("active");
  });
}

// header burger
let body = document.querySelector("body");
headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
});

// screen remove modal on click a close icon
modalBurgers.forEach((modalBurger) => {
  modalBurger.addEventListener("click", () => {
    modals.forEach((modal) => {
      if (modal.classList.contains("active")) {
        modal.classList.remove("active");
        body.classList.remove("lock");
      }
    });
  });
});

let currYearSpan = document.querySelector(".currYear");
currYearSpan.textContent = new Date().getFullYear();
// currYear
