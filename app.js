const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

let countDownDate = new Date(new Date().getFullYear(), 12, 31).getTime();

let countDown = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    if (timeleft < 0) {
        clearInterval(countDown);
    }

    days.textContent = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hours.textContent = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    min.textContent = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    sec.textContent = Math.floor((timeleft % (1000 * 60)) / 1000);
    
}, 1000);