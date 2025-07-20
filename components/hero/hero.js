// Hero Section Component JavaScript
class Hero {
    constructor() {
        this.heroTitle = document.querySelector('.hero-title');
        this.init();
    }

    init() {
        this.initTypingEffect();
        this.initParallax();
    }

    initTypingEffect() {
        if (this.heroTitle) {
            const text = this.heroTitle.textContent;
            this.heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    this.heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
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

// Initialize hero when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Hero();
}); 