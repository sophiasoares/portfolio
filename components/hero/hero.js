// Hero Section Component JavaScript
class Hero {
    constructor() {
        this.heroTitle = document.querySelector('.hero-title');
        this.init();
    }

    init() {
        this.initParallax();
    }

    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero-section');
            
            if (heroSection) {
                const rate = scrolled * -0.5;
                heroSection.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Make Hero class available globally
window.Hero = Hero; 