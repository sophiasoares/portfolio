// Main App JavaScript
class PortfolioApp {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        this.loadComponents();
        this.initLanguageSystem();
        this.initScrollAnimations();
        this.initLoadingState();
    }

    async loadComponents() {
        try {
            // Load navigation component
            const navResponse = await fetch('components/navigation/navigation.html');
            const navHtml = await navResponse.text();
            document.getElementById('navigation-component').innerHTML = navHtml;

            // Load hero component
            const heroResponse = await fetch('components/hero/hero.html');
            const heroHtml = await heroResponse.text();
            document.getElementById('hero-component').innerHTML = heroHtml;

            // Load about component
            const aboutResponse = await fetch('components/about/about.html');
            const aboutHtml = await aboutResponse.text();
            document.getElementById('about-component').innerHTML = aboutHtml;

            // Load skills component
            const skillsResponse = await fetch('components/skills/skills.html');
            const skillsHtml = await skillsResponse.text();
            document.getElementById('skills-component').innerHTML = skillsHtml;

            // Load education-career component
            const educationCareerResponse = await fetch('components/education-career/education-career.html');
            const educationCareerHtml = await educationCareerResponse.text();
            document.getElementById('education-career-component').innerHTML = educationCareerHtml;

            // Load projects component
            const projectsResponse = await fetch('components/projects/projects.html');
            const projectsHtml = await projectsResponse.text();
            document.getElementById('projects-component').innerHTML = projectsHtml;

            // Load languages component
            const languagesResponse = await fetch('components/languages/languages.html');
            const languagesHtml = await languagesResponse.text();
            document.getElementById('languages-component').innerHTML = languagesHtml;

            // Load contact component
            const contactResponse = await fetch('components/contact/contact.html');
            const contactHtml = await contactResponse.text();
            document.getElementById('contact-component').innerHTML = contactHtml;

            // Load outside-work component
            const outsideWorkResponse = await fetch('components/outside-work/outside-work.html');
            const outsideWorkHtml = await outsideWorkResponse.text();
            document.getElementById('outside-work-component').innerHTML = outsideWorkHtml;

            // Initialize components after loading
            this.initializeComponents();
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    initializeComponents() {
        // Re-initialize navigation
        if (window.Navigation) {
            new window.Navigation();
        }

        // Re-initialize hero
        if (window.Hero) {
            new window.Hero();
        }

        // Re-initialize about
        if (window.About) {
            new window.About();
        }

        // Re-initialize skills
        if (window.Skills) {
            new window.Skills();
        }

        // Re-initialize education-career
        if (window.EducationCareer) {
            new window.EducationCareer();
        }

        // Re-initialize projects
        if (window.Projects) {
            new window.Projects();
        }

        // Re-initialize languages
        if (window.Languages) {
            new window.Languages();
        }

        // Re-initialize contact
        if (window.Contact) {
            new window.Contact();
        }

        // Re-initialize outside-work
        if (window.OutsideWork) {
            new window.OutsideWork();
        }
    }

    initLanguageSystem() {
        // Listen for language change events from navigation
        document.addEventListener('languageChanged', (event) => {
            this.currentLanguage = event.detail.language;
            this.updateLanguage();
        });
    }

    updateLanguage() {
        // This method is now handled by the Navigation component
        // The navigation component will update all translatable elements
        console.log('Language changed to:', this.currentLanguage);
    }

    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observe all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
        });
    }

    initLoadingState() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
}); 