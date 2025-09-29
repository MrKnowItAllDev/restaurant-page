import { createOverlay } from "./page-load";

export default function(parent) {
    const modal = document.createElement("modal");
    const overlay = createOverlay();
    const button = document.createElement('button');
    const modalHeader = document.createElement('section');
    const modalBody = document.createElement('section');

    const { ...menu } = getMenu();

    Object.keys(menu).forEach((key) => {
        const section = document.createElement('section');
        const menuType = document.createElement('h2');
        menuType.textContent = `${key}`;
        section.appendChild(menuType);
        modalBody.appendChild(section);
        menu[key].forEach((ing) => {
            const  title = document.createElement('h3');
            const ingredients = document.createElement('p');
            const price = document.createElement('p');

            title.textContent = `${ing.title}`;
            ingredients.textContent = `${ing.ingredients}`;
            price.textContent = `${ing.price}`;

            modalBody.appendChild(title);
            modalBody.appendChild(ingredients);
            modalBody.appendChild(price);
        });
    });

    // Misc
    button.classList.add('btn');
    button.classList.add('active');
    modal.classList.add('modal');
    button.textContent = "SEE MORE";

    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modal.appendChild(button);
    parent.appendChild(overlay);
    parent.appendChild(modal);
}

function getMenu() {
    return {
        starters: [
            {
                title: "Bruschetta",
                ingredients: "Toasted bread, tomatoes, basil, olive oil",
                price: "$8",
            },
            {
                title: "Stuffed Mushrooms",
                ingredients: "Garlic herb filling, parmesan",
                price: "$10",
            },
        ],
        mains: [
            {
                title: "Grilled Salmon",
                ingredients: "Lemon butter sauce, seasonal vegetables",
                price: "$22",
            },
            {
                title: "Filet Mignon",
                ingredients: "Peppercorn sauce, truffle mash",
                price: "$28",
            },
        ],
        desserts: [
            {
                title: "Tiramisu",
                ingredients: "Coffee-soaked ladyfingers, mascarpone",
                price: "$12",
            },
            {
                title: "Chocolate Lava Cake",
                ingredients: "Rich chocolate centre, vanilla ice cream",
                price: "$14",
            },
        ],
    };
}