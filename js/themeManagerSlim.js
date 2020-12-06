"use strict";

let themeManager = {};

themeManager.themeData = [
    {
        "id": "normal",
        "style": ":root {--theme-applied: 'normal'; } body { background-color: black; color: white; }",
        "eval": "void(0);"
    },
    {
        "id": "winter",
        "style": ":root {--theme-applied: 'winter'; } body { background-color: #0f0f23; color: #cccccc; }",
        "eval": "void(0);"
    }
];

themeManager.loadTheme = function () {
    if (localStorage.getItem("theme") != getComputedStyle(document.documentElement).getPropertyValue('--applied-theme')) {
        console.log(this.themeData);
        let h = this.themeData.find(o => o.id === localStorage.getItem("theme"));
        document.querySelector("#themeStyle").textContent = h.style;
        eval(h.eval);
    };
};


window.onload = function () {
    if (!document.body.hasAttribute('data-theme-noThemeOnLoad')) {
        if (localStorage.getItem("theme")) {
            themeManager.loadTheme();
        } else {
            localStorage.setItem("theme", "winter");
            themeManager.loadTheme();
        }
    };
};