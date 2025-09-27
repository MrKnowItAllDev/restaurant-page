'use strict';

import loadHome from "./page-load";
import loadAbout from "./about";
import "./styles/style.css";
import bground from "./assets/ethan-smith-3B_Vlmcd-dY-unsplash.jpg";

function clear(parent) {
    if (parent.children) {
        Array.from(parent.children).forEach((child, i) => {
            if (child.className !== "attribute") {
                parent.removeChild(child);
            }
        });
    }
}

window.onload = (() => {
        const parent = document.querySelector('#content');
        clear(parent);
        loadHome(parent);
    }
);

(function() {
    const parent = document.querySelector('#content');
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');
    const aboutBtn = document.querySelector('.about');
    const contactBtn = document.querySelector('.contact');
    // const { hBtn, mBtn, cBtn, aBtn} = loadHome(parent);

    document.body.style.backgroundImage = `url('${bground}')`;
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundSize = `cover`;

    homeBtn.addEventListener('click', (e) => {
        callback(parent, clear, loadHome);
        toggleActive(e.target, menuBtn, aboutBtn);
    });

    menuBtn.addEventListener('click', (e) => {
        callback(parent, clear, loadHome);
        toggleActive(e.target, homeBtn, aboutBtn);
    });

    aboutBtn.addEventListener('click', (e) => {
        callback(parent, clear, loadAbout);
        toggleActive(e.target, homeBtn, menuBtn);
    });
})();

function callback(param, fn, callFn) {
    fn(param);
    callFn(param);
}

function toggleActive(target, btn, oBtn) {
    target.classList.add('active');
    btn.classList.remove('active');
    oBtn.classList.remove('active');
}
