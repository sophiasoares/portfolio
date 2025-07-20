// Skills Section Component JavaScript
class Skills {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.init();
    }

    init() {
        this.initSkillBarAnimations();
        this.initScrollAnimation();
    }

    initSkillBarAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                }
            });
        }, { threshold: 0.5 });

        this.skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }

    initScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const skillsSection = document.querySelector('#skills');
        if (skillsSection) {
            skillsSection.classList.add('fade-in');
            observer.observe(skillsSection);
        }
    }
}

// Initialize skills section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Skills();
}); 