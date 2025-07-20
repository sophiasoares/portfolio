// Education & Career Section Component JavaScript
class EducationCareer {
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

        const educationCareerSection = document.querySelector('#education-career');
        if (educationCareerSection) {
            educationCareerSection.classList.add('fade-in');
            observer.observe(educationCareerSection);
        }
    }
}

// Initialize education career section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EducationCareer();
}); 