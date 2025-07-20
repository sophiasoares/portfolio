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

// Make OutsideWork class available globally
window.OutsideWork = OutsideWork; 