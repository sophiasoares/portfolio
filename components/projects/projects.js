// Projects Section Component JavaScript
class Projects {
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

        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.classList.add('fade-in');
            observer.observe(projectsSection);
        }
    }
}

// Make Projects class available globally
window.Projects = Projects; 