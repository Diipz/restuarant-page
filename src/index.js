import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

loadHomePage();
switchTab();

//tab switching logic//
function switchTab() {
    let container = document.querySelector("#content")
    let homeTab = document.querySelector(".home");
    let menuTab = document.querySelector(".menu");
    let contactTab = document.querySelector(".contact");

    homeTab.addEventListener("click", e => {
        container.textContent = "";
        loadHomePage();
        switchTab();
    });

    menuTab.addEventListener("click", e => {
        container.textContent = "";
        loadMenuPage();
        switchTab();
    });

    contactTab.addEventListener("click", e => {
        container.textContent = "";
        loadContactPage();
        switchTab();
    });
}




