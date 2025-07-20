// Outside Work Section Component JavaScript
class OutsideWork {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollAnimation();
    }

    initScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const outsideWorkSection = document.querySelector('#outside-work');
        if (outsideWorkSection) {
            outsideWorkSection.classList.add('fade-in');
            observer.observe(outsideWorkSection);
        }
    }
}

// Initialize outside work section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new OutsideWork();
}); 