"use strict";
let $homepage = {};
$homepage.modalToggle = function () {
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

$homepage.calcTime_countdown = setInterval(void (0), 1000);

$homepage.calcTime = function (selector) {
    // Ktokolwiek wymyślił w TC39 to, że daty mogą
    // być tylko w formacie amerykańskim (miesiąc/dzień/rok)
    // powinnen zostać zbanowany z korzystania z komputera
    // przez okres całego swego życia
    if (selector.options[selector.selectedIndex].value == "newyear") {
        const deeta = new Date('12/31/2020 23:59:59');
        clearInterval(this.calcTime_countdown);
        this.calcTime_countdown = setInterval(function () {
            $homepage.timeFramework(deeta);
        }, 1000);
    } else if (selector.options[selector.selectedIndex].value == "christmas") {
        const deeta = new Date('12/24/2020 23:59:59');
        console.log(deeta);
        clearInterval(this.calcTime_countdown);
        this.calcTime_countdown = setInterval(function () {
            $homepage.timeFramework(deeta);
        }, 1000);
    } else if (selector.options[selector.selectedIndex].value == "wigilia") {
        const deeta = new Date('12/23/2020 23:59:59');
        console.log(deeta);
        clearInterval(this.calcTime_countdown);
        this.calcTime_countdown = setInterval(function () {
            $homepage.timeFramework(deeta);
        }, 1000);
    } else if (selector.options[selector.selectedIndex].value == "easter") {
        const deeta = new Date('4/3/2021 23:59:59');
        console.log(deeta);
        clearInterval(this.calcTime_countdown);
        this.calcTime_countdown = setInterval(function () {
            $homepage.timeFramework(deeta);
        }, 1000);
    } else if (selector.options[selector.selectedIndex].value == "pies") {
        // pamiątka po psie biegnącym 5500km/h
        const deeta = new Date('12/3/2021 23:59:59');
        console.log(deeta);
        clearInterval(this.calcTime_countdown);
        this.calcTime_countdown = setInterval(function () {
            $homepage.timeFramework(deeta);
        }, 1000);
    } else if (selector.options[selector.selectedIndex].value == "summer") {
        const deeta = new Date('5/25/2021 23:59:59');
        console.log(deeta);
        clearInterval(this.calcTime_countdown);
        this.calcTime_countdown = setInterval(function () {
            $homepage.timeFramework(deeta);
        }, 1000);
    };
};

$homepage.timeFramework = function (end) {
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(this.calcTime_countdown);
        document.getElementById('dayCounter').innerHTML = 'Koniec odliczania!';

        return;
    };
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('dayCounter').innerHTML = days + ' dni, ';
    document.getElementById('dayCounter').innerHTML += hours + ' godzin, ';
    document.getElementById('dayCounter').innerHTML += minutes + ' minut i ';
    document.getElementById('dayCounter').innerHTML += seconds + ' sekund';
};


$homepage.calcTime({
    options: [
        {
            "value": "newyear"
        }
    ],
    selectedIndex: 0
});