'use strict';

import homePage from "./page-load";
import "./styles/style.css";

function clear(parent) {
    if (parent.children) {
        Array.from(parent.children).forEach((child, i) => {
            if (i <= parent.children.length) {
                parent.removeChild(child);
            }
        });
    }
}

window.onload = (() => {
        const parent = document.querySelector('#content');
        clear(parent);
        homePage(parent);
    }
);

(function() {

    const parent = document.querySelector('#content');
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');
    const aboutBtn = document.querySelector('.about');

    homeBtn.addEventListener('click', (e) => {
        clear();
        homePage();
    });
})();



