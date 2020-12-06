"use strict";
let $common = {};
$common.modalToggle = function () {
    if (document.querySelector(".modal").getAttribute("data-utils-homepage-modal") == "hidden") {
        document.querySelector(".modal").setAttribute("data-utils-homepage-modal", "visible");
        let target = document.querySelector(".modal");
        target.style.display = "block";
        target.style.opacity = 0;
        let fade = setInterval(function () {
            if (!target.style.opacity) {
                target.style.opacity = 0;
            }
            if (target.style.opacity < 1) {
                target.style.opacity = parseFloat(target.style.opacity) + 0.1;
            } else {
                clearInterval(fade);
            }
        }, 50);
    } else {
        document.querySelector(".modal").setAttribute("data-utils-homepage-modal", "hidden");
        let target = document.querySelector(".modal");
        let fade = setInterval(function () {
            if (!target.style.opacity) {
                target.style.opacity = 1;
            }
            if (target.style.opacity > 0) {
                target.style.opacity -= 0.1;
            } else {
                clearInterval(fade);
                target.style.display = "none";
            }
        }, 50);
    };
};