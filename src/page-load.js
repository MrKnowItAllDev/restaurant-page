'use strict';

import backGround from "./assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg";

// Create the web page on page load
export default function(parent) {
    // Create elements
    const container = document.createElement("section");


    // Add element classes
    container.setAttribute('id', 'container');

    // Misc attributes
    container.style.background = backGround;

    // Attach element nodes to parent
    parent.appendChild(container);
};