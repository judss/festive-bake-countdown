function getTargetDate() {
    const now = new Date();
    const year = now.getFullYear();
    const target = new Date(year, 10, 6);
    return target <= now ? new Date(year + 1, 10, 6) : target;
}

function pad(value, length) {
    return String(value).padStart(length, '0');
}

const imgExt = document.createElement('canvas').toDataURL('image/webp').startsWith('data:image/webp') ? 'webp' : 'png';

function setDigit(selector, digit) {
    document.querySelector(selector).innerHTML = `<img src="assets/img/FB_${digit}.${imgExt}">`;
}

function showFestiveOut() {
    document.querySelectorAll('.dc > .t').forEach(el => el.style.display = 'none');
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('festive-out').style.display = 'block';
    new Audio('assets/turnip.m4a').play();
    launchConfetti();
}

function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colours = ['#ff4444', '#ff9900', '#ffdd00', '#66cc33', '#3399ff', '#cc44ff', '#ff66aa', '#ffffff'];
    const particles = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: 6 + Math.random() * 8,
        h: 4 + Math.random() * 6,
        colour: colours[Math.floor(Math.random() * colours.length)],
        vx: (Math.random() - 0.5) * 2,
        vy: 2 + Math.random() * 3,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.15,
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.angle += p.spin;
            if (p.y < canvas.height + 20) alive = true;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.colour;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }
        if (alive) requestAnimationFrame(draw);
        else canvas.remove();
    }

    requestAnimationFrame(draw);
}

let countdownInterval;

function updateCountdown() {
    const totalSeconds = Math.floor((getTargetDate() - new Date()) / 1000);

    if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        showFestiveOut();
        return;
    }

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
}

updateCountdown();
countdownInterval = setInterval(updateCountdown, 1000);
