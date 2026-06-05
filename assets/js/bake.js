function getTargetDate() {
    const now = new Date();
    const year = now.getFullYear();
    const target = new Date(year, 10, 6);
    return target <= now ? new Date(year + 1, 10, 6) : target;
}

function pad(value, length) {
    return String(value).padStart(length, '0');
}

function setDigit(selector, digit) {
    document.querySelector(selector).innerHTML = `<img src="assets/img/FB_${digit}.png">`;
}

function updateCountdown() {
    const totalSeconds = Math.floor((getTargetDate() - new Date()) / 1000);

    const days    = pad(Math.floor(totalSeconds / 86400), 3);
    const hours   = pad(Math.floor((totalSeconds % 86400) / 3600), 2);
    const minutes = pad(Math.floor((totalSeconds % 3600) / 60), 2);
    const seconds = pad(totalSeconds % 60, 2);

    setDigit('.sd1', days[0]);
    setDigit('.sd2', days[1]);
    setDigit('.sd3', days[2]);

    setDigit('.sh1', hours[0]);
    setDigit('.sh2', hours[1]);

    setDigit('.sm1', minutes[0]);
    setDigit('.sm2', minutes[1]);

    setDigit('.ss1', seconds[0]);
    setDigit('.ss2', seconds[1]);

    if (minutes === '00' && seconds === '00') {
        playTurnip();
    }
}

function playTurnip() {
    const audio = new Audio('assets/turnip.m4a');
    audio.play();
}

document.querySelector('.t').addEventListener('click', playTurnip);

updateCountdown();
setInterval(updateCountdown, 1000);
