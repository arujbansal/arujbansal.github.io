class GeometricAnimation {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.animationId = null;
        this.theme = 'light';
        this.init();
    }

    init() {
        this.createCanvas();
        this.setupParticles();
        this.animate();
        this.setupResizeListener();
        this.updateTheme(document.documentElement.getAttribute('data-theme') || 'light');
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';

        this.ctx = this.canvas.getContext('2d');
        this.resize();

        const bgElement = document.getElementById('animatedBg');
        if (bgElement) {
            bgElement.appendChild(this.canvas);
        }
    }

    resize() {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.ctx.scale(dpr, dpr);
    }

    setupParticles() {
        this.particles = [];
        const particleCount = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 15000));

        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new GeometricParticle(window.innerWidth, window.innerHeight));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        this.drawGrid();

        this.particles.forEach(particle => {
            particle.update();
            particle.draw(this.ctx, this.theme);
        });

        this.drawConnections();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    drawGrid() {
        const gridSize = 25;
        const opacity = this.theme === 'dark' ? 0.25 : 0.2;

        this.ctx.strokeStyle = `rgba(70, 130, 220, ${opacity})`;
        this.ctx.lineWidth = 0.5;
        this.ctx.beginPath();

        // Vertical lines
        for (let x = 0; x <= window.innerWidth; x += gridSize) {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, window.innerHeight);
        }

        // Horizontal lines
        for (let y = 0; y <= window.innerHeight; y += gridSize) {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(window.innerWidth, y);
        }

        this.ctx.stroke();
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (150 - distance) / 150 * 0.25;
                    this.ctx.strokeStyle = this.theme === 'dark'
                        ? `rgba(70, 130, 220, ${opacity})`
                        : `rgba(50, 100, 200, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    updateTheme(newTheme) {
        this.theme = newTheme;
    }

    setupResizeListener() {
        window.addEventListener('resize', () => {
            this.resize();
            this.setupParticles();
        });
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

class GeometricParticle {
    constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.7 + 0.4;
        this.shape = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // Bounce off edges
        if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(this.canvasWidth, this.x));
        this.y = Math.max(0, Math.min(this.canvasHeight, this.y));
    }

    draw(ctx, theme) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const color = theme === 'dark' ? '70, 130, 220' : '50, 100, 200';
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;

        switch (this.shape) {
            case 0: // Circle
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 1: // Square
                ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
                break;
            case 2: // Triangle
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.lineTo(-this.size, this.size);
                ctx.lineTo(this.size, this.size);
                ctx.closePath();
                ctx.fill();
                break;
        }

        ctx.restore();
    }
}

// Initialize animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.geometricAnimation = new GeometricAnimation();
});