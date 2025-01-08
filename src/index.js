import "./stylesheets/styles.css"
import "./stylesheets/header.css"
import "./stylesheets/menu.css"
import "./stylesheets/footer.css"
import { Cafe } from "./modules/cafe-module.js"
import { Home } from "./modules/home-module.js"
import { Petit } from "./modules/petit-module.js"

const contentDiv = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const cafeButton = document.querySelector("#kirby-cafe");
const petitButton = document.querySelector("#kirby-cafe-petit");

const homeButtonImages = document.querySelectorAll(".home-button-image");
const cafeButtonImages = document.querySelectorAll(".cafe-button-image");
const petitButtonImages = document.querySelectorAll(".petit-button-image");

const clearScreen = () => {
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
};

homeButton.addEventListener("click", (e) => {
    clearScreen();
    homeButtonImages.forEach((image) => {
        image.classList.remove("invisible");
    })
    cafeButtonImages.forEach((image) => {
        image.classList.add("invisible")
    })
    petitButtonImages.forEach((image) => {
        image.classList.add("invisible")
    })
    homeButton.setAttribute("disabled", "");
    cafeButton.removeAttribute("disabled");
    petitButton.removeAttribute("disabled");
    Home.buildContent();
});

cafeButton.addEventListener("click", (e) => {
    clearScreen();
    cafeButtonImages.forEach((image) => {
        image.classList.remove("invisible");
    })
    homeButtonImages.forEach((image) => {
        image.classList.add("invisible")
    })
    petitButtonImages.forEach((image) => {
        image.classList.add("invisible")
    })
    cafeButton.setAttribute("disabled", "");
    homeButton.removeAttribute("disabled");
    petitButton.removeAttribute("disabled");
    Cafe.buildContent();
});

petitButton.addEventListener("click", (e) => {
    clearScreen();
    petitButtonImages.forEach((image) => {
        image.classList.remove("invisible");
    })
    homeButtonImages.forEach((image) => {
        image.classList.add("invisible")
    })
    cafeButtonImages.forEach((image) => {
        image.classList.add("invisible")
    })
    petitButton.setAttribute("disabled", "");
    cafeButton.removeAttribute("disabled");
    homeButton.removeAttribute("disabled");
    Petit.buildContent();
});


Home.buildContent();