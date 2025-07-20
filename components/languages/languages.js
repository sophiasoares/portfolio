// Languages Section Component JavaScript
class Languages {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollAnimation();
        this.initProgressBars();
    }

    initScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const languagesSection = document.querySelector('#languages');
        if (languagesSection) {
            languagesSection.classList.add('fade-in');
            observer.observe(languagesSection);
        }
    }

    initProgressBars() {
        const progressBars = document.querySelectorAll('.language-progress .progress-bar');
        
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

        progressBars.forEach(bar => {
            observer.observe(bar);
        });
    }
}

// Make Languages class available globally
window.Languages = Languages; 