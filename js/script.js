"use strict";

const timer = {
    pomodoro: 25,
    shortbreak: 5,
    longbreak: 15,
    longbreakinterval: 4

ccc
}




let btns = document.querySelectorAll("a");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        btns.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
}
