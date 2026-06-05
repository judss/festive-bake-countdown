const SNOWFLAKE_COUNT = 50;

class Snowflake {
    constructor(element) {
        this.element = element;
        this.counter = Math.random() * Math.PI * 2;
        this.sign = Math.random() < 0.5 ? 1 : -1;
        this.speed = 5 + Math.random() * 40;
        this.xPos = Math.random() * window.innerWidth;
        this.yPos = Math.random() * window.innerHeight;
        this.element.style.opacity = 0.1 + Math.random() * 0.9;
        this.element.style.fontSize = 12 + Math.random() * 50 + 'px';
    }

    update() {
        this.counter += this.speed / 5000;
        this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
        this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
        this.element.style.transform = `translate3d(${Math.round(this.xPos)}px, ${Math.round(this.yPos)}px, 0)`;

        if (this.yPos > window.innerHeight) {
            this.xPos = Math.random() * window.innerWidth;
            this.yPos = -50;
        }
    }
}

function init() {
    const container = document.getElementById('snowflakeContainer');

    const snowflakes = Array.from({ length: SNOWFLAKE_COUNT }, () => {
        const el = document.createElement('p');
        el.className = 'snowflake';
        el.textContent = '*';
        container.appendChild(el);
        return new Snowflake(el);
    });

    function animate() {
        snowflakes.forEach(flake => flake.update());
        requestAnimationFrame(animate);
    }

    animate();
}

document.addEventListener('DOMContentLoaded', init);
