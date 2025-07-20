// About Section Component JavaScript
class About {
    constructor() {
        this.statNumbers = document.querySelectorAll('.stat-number');
        this.init();
    }

    init() {
        this.initScrollAnimation();
        this.initCounterAnimation();
    }

    initScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.classList.add('fade-in');
            observer.observe(aboutSection);
        }
    }

    initCounterAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.statNumbers.forEach(number => {
            observer.observe(number);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }, 16);
    }
}

// Initialize about section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new About();
}); 