export function loadMenuPage() {

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

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    container.appendChild(menuContainer);

    const menuImages = document.createElement("div");
    menuImages.classList.add("menu-images");
    menuContainer.appendChild(menuImages);

    const meatBalls = document.createElement("img");
    meatBalls.src = "https://images-gmi-pmc.edge-generalmills.com/a7d7f227-8d99-4ebd-b224-f5338c0f0749.jpg";
    meatBalls.alt = "meat balls";
    meatBalls.classList.add("food-image");
    menuImages.appendChild(meatBalls);

    const pizza = document.createElement("img");
    pizza.src = "https://www.simplyrecipes.com/thmb/Pb4_cwer3Dv-cAb297od2Qr_GCU=/1777x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg";
    pizza.alt = "pizza";
    pizza.classList.add("food-image");
    menuImages.appendChild(pizza);

    const description = document.createElement("div");
    description.classList.add("description");
    menuContainer.appendChild(description);

    const meatBallsDescription = document.createElement("h2");
    meatBallsDescription.classList.add("food-description");
    meatBallsDescription.textContent = "Big brown salty meat balls";
    description.appendChild(meatBallsDescription);

    const pizzaDescription = document.createElement("h2");
    pizzaDescription.classList.add("food-description");
    pizzaDescription.textContent = "Phatman's pizza";
    description.appendChild(pizzaDescription);

}



