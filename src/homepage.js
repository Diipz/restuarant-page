export function loadHomePage() {

    const container = document.querySelector("#content");

    const header = document.createElement("div");
    header.classList.add("header");
    container.appendChild(header);

    const homeTab = document.createElement("div");
    homeTab.classList.add("home", "tab");
    homeTab.textContent = "Home";
    header.appendChild(homeTab);

    const menuTab = document.createElement("div");
    menuTab.classList.add("menu", "tab");
    menuTab.textContent = "Menu";
    header.appendChild(menuTab);

    const contactTab = document.createElement("div");
    contactTab.textContent = "Contact";
    contactTab.classList.add("contact", "tab");
    header.appendChild(contactTab);

    const restuarantName = document.createElement("h1");
    restuarantName.textContent = "Chef's Cuisine";
    container.appendChild(restuarantName);

    const slogan = document.createElement("div");
    slogan.classList.add("slogan");
    slogan.textContent = "Visit Chef and and try his cuisine! Hundreds of kids agree. You won't be disappointed!";
    container.appendChild(slogan);

    const chefImage = document.createElement("img");
    chefImage.src = "https://static.wikia.nocookie.net/southpark/images/3/38/JeromeChef.png/revision/latest?cb=20160402120214";
    chefImage.alt = "South Park's Chef";
    chefImage.classList.add("chef");
    container.appendChild(chefImage);

    const disclaimer = document.createElement("p");
    disclaimer.textContent = "All rights of characters and themes are owned by Paramount Global";
    container.appendChild(disclaimer);

}