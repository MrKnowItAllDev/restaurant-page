import { createOverlay } from "./page-load";

export default function(parent) {

    const modal = document.createElement("section");
    const header = document.createElement("section");
    const content = document.createElement("section");
    const paragraph = document.createElement("section");
    const overlay = createOverlay();

    const h2 = document.createElement("h2");
    const headerContent = document.createElement("p");
    const paraContent = document.createElement("p");

    const button = document.createElement("button");

    h2.textContent = "About Us";
    headerContent.textContent = "Crafting exquisite cuisine with passion and tradition.";
    paraContent.textContent = `
                    We are a fine dining restaurant offering a unique culinary experience. 
                    Where each dish is meticulously crafted using only the freshest ingredients.`;

    button.textContent = "LEARN MORE";
    button.classList.add('btn');
    button.classList.add('active');

    headerContent.style.fontSize = `20px`;

    modal.classList.add('modal');

    header.appendChild(h2);
    content.appendChild(headerContent);
    paragraph.appendChild(paraContent);

    modal.appendChild(header);
    modal.appendChild(content);
    modal.appendChild(paragraph);
    modal.appendChild(button);

    parent.appendChild(overlay);
    parent.appendChild(modal);
};
