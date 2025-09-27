'use strict';

// Create the web page on page load


export default function(parent) {
    // Create elements
    const overlay = document.createElement("section");
    const container = document.createElement("section");
    const heading = document.createElement("h1");
    const paragraph = document.createElement("p");

    const btnSection = document.createElement('section');
    const hBtn = document.createElement("button");
    const mBtn = document.createElement("button");
    const cBtn = document.createElement("button");
    const aBtn = document.createElement("button");


    // Add element classes
    btnSection.classList.add('btn-section');
    container.setAttribute('id', 'container');
    overlay.classList.add("overlay");
    heading.style.color = '#ffffff';
    [hBtn, mBtn, cBtn, aBtn].forEach((btn) => {
        btn.classList.add('btn');
        btn.classList.add('banner-btn');
    });
    hBtn.classList.add('active');

    hBtn.classList.add('home');
    mBtn.classList.add('menu');
    cBtn.classList.add('contact');
    aBtn.classList.add('about');

    hBtn.textContent = "Home";
    mBtn.textContent = "Menu";
    cBtn.textContent = "Contact";
    aBtn.textContent = "About";
    heading.textContent = "Welcome To Our Restaurant";
    paragraph.textContent = "Fine dining with an exceptional menu and elegant atmosphere";

    container.appendChild(overlay);
    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(btnSection);
    [hBtn, mBtn, cBtn, aBtn].forEach((btn) => {
        btnSection.appendChild(btn);
    });
    parent.appendChild(container);

    return {
        hBtn,
        mBtn,
        cBtn,
        aBtn
    };
};