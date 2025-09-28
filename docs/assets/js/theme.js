class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.loadSavedTheme();
        this.setupSystemThemeListener();
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        this.setTheme(newTheme);
        this.saveTheme(newTheme);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeIcon(theme);

        // Trigger animation update for new theme
        const animationScript = window.particleAnimation || window.geometricAnimation;
        if (animationScript && animationScript.updateTheme) {
            animationScript.updateTheme(theme);
        }
    }

    updateThemeIcon(theme) {
        const moonIcon = document.querySelector('.icon-moon');
        const sunIcon = document.querySelector('.icon-sun');

        if (moonIcon && sunIcon) {
            if (theme === 'dark') {
                // Dark mode - show sun icon (to switch to light)
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                // Light mode - show moon icon (to switch to dark)
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        }
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        const theme = savedTheme || 'dark';

        this.setTheme(theme);
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    setupSystemThemeListener() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener((e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});