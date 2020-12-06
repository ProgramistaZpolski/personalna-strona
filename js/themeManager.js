"use strict";

let themeManager = {};

themeManager.themeData = [
    {
        "id": "normal",
        "style": ":root {--theme-applied: 'normal'; } body { background-color: black; color: white; }",
        "eval": "this.utility.revertSnowball();"
    },
    {
        "id": "winter",
        "style": ":root {--theme-applied: 'winter'; } body { background-color: #0f0f23; color: #cccccc; }",
        "eval": "this.utility.snowball();"
    }
];

themeManager.setTheme = function (obj) {
    localStorage.setItem("theme", obj.getAttribute("data-theme-set"));
    this.loadTheme();
};

themeManager.loadTheme = function () {
    if (localStorage.getItem("theme") != getComputedStyle(document.documentElement).getPropertyValue('--applied-theme')) {
        console.log(this.themeData);
        let h = this.themeData.find(o => o.id === localStorage.getItem("theme"));
        document.querySelector("#themeStyle").textContent = h.style;
        eval(h.eval);
    };
};

themeManager.utility = {};


themeManager.utility.snowball = function () {
    document.body.innerHTML += `<div class="snowballs">
    <div class="snowball1">❄</div>
    <div class="snowball2">❄</div>
    <div class="snowball3">❄</div>
    <div class="snowball4">❄</div>
    <div class="snowball5">❄</div>
    <div class="snowball6">❄</div>
    <div class="snowball7">❄</div>
    <div class="snowball8">❄</div>
    <div class="snowball9">❄</div>
    <div class="snowball10">❄</div>
    <div class="snowball11">❄</div>
    <div class="snowball12">❄</div>
    <div class="snowball13">❄</div>
    <div class="snowball14">❄</div>
    <div class="snowball15">❄</div>
    <div class="snowball16">❄</div>
    <div class="snowball17">❄</div>
    <div class="snowball18">❄</div>
    <div class="snowball19">❄</div>
    <div class="snowball20">❄</div>
    </div>`;
    document.querySelector("#themeStyle").textContent += `
    body {
        overflow-y: hidden;
    }
    .snowball1, .snowball2, .snowball3, .snowball4, .snowball5, .snowball6, .snowball7 {
        position: absolute;
        animation-name: "snow";
        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        width: 25px;
        height: 25px;
        font-size: 30px;
    }

    .snowball8, .snowball9, .snowball10, .snowball11, .snowball12, .snowball13 {
        position: absolute;
        animation-name: "snow";
        animation-duration: 12s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        width: 25px;
        height: 25px;
        font-size: 26px;
    }

    .snowball14, .snowball15, .snowball16, .snowball17 {
        position: absolute;
        animation-name: "snow";
        animation-duration: 8s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        width: 25px;
        height: 25px;
        font-size: 31px;
    }

    .snowball18, .snowball19, .snowball20 {
        position: absolute;
        animation-name: "snow";
        animation-duration: 16s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        width: 25px;
        height: 25px;
        font-size: 34px;
    }

    .snowball1 {
        left: 10%;
    }
    
    .snowball2 {
        left: 15%;
    }

    .snowball3 {
        left: 27%;
    }
    
    .snowball4 {
        left: 40%;
    }

    .snowball5 {
        left: 59%
    }

    .snowball6 {
        left: 70%;
    }

    .snowball7 {
        left: 75%;
    }


    .snowball8 {
        left: 6%;
    }
    
    .snowball9 {
        left: 30%;
    }

    .snowball10 {
        left: 89%;
    }
    
    .snowball11 {
        left: 75%;
    }

    .snowball12 {
        left: 51%
    }

    .snowball13 {
        left: 66%;
    }

    .snowball14 {
        left: 33%;
    }
    
    .snowball15 {
        left: 44%;
    }

    .snowball16 {
        left: 55%
    }

    .snowball17 {
        left: 66%;
    }

    .snowball18 {
        left: 14%;
    }

    .snowball19 {
        left: 45%
    }

    .snowball20 {
        left: 76%;
    }


    @keyframes snow {
        0% {
            top: 0;
            transform: rotate(0deg);
        }
        100% {
            top: 100%;
            transform: rotate(360deg);
        }
    }`;
};

themeManager.utility.revertSnowball = function() {
    document.querySelector(".snowballs").innerHTML = ""; 
}

window.onload = function () {
    if (!document.body.hasAttribute('data-theme-noThemeOnLoad')) {
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") == "winter") {
                document.querySelector("#winterTheme").checked = true;
            } else {
                document.querySelector("#normalTheme").checked = true;
            }
            themeManager.loadTheme();
        } else {
            localStorage.setItem("theme", "winter");
            document.querySelector("#winterTheme").checked = true;
            themeManager.loadTheme();
        }
    };
};