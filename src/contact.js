export function loadContactPage() {

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

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    container.appendChild(contactContainer);

    const contactDetails1 = document.createElement("p");
    contactDetails1.classList.add("contact-details");
    contactDetails1.textContent = "South Park Elementary";
    contactContainer.appendChild(contactDetails1);

    const contactDetails2 = document.createElement("p");
    contactDetails2.classList.add("contact-details");
    contactDetails2.textContent = "South Park";
    contactContainer.appendChild(contactDetails2);

    const contactDetails3 = document.createElement("p");
    contactDetails3.classList.add("contact-details");
    contactDetails3.textContent = "Denver";
    contactContainer.appendChild(contactDetails3);

    const contactDetails4 = document.createElement("p");
    contactDetails4.classList.add("contact-details");
    contactDetails4.textContent = "Colorado";
    contactContainer.appendChild(contactDetails4);

    const contactDetails5 = document.createElement("p");
    contactDetails5.classList.add("contact-details");
    contactDetails5.textContent = "80014";
    contactContainer.appendChild(contactDetails5);
}

