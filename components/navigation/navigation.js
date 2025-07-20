// Navigation Component JavaScript
class Navigation {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        this.initSmoothScrolling();
        this.initActiveLinkHighlighting();
        this.initLanguageSwitcher();
        this.initMobileMenu();
    }

    initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initActiveLinkHighlighting() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    initLanguageSwitcher() {
        const languageDropdown = document.querySelector('.language-dropdown');
        const dropdownItems = document.querySelectorAll('.dropdown-item[data-lang]');
        const currentFlag = document.querySelector('.current-flag');
        const currentLanguage = document.querySelector('.current-language');
        

        
        // Language configurations
        const languages = {
            en: { flag: '🇬🇧', name: 'English' },
            de: { flag: '🇩🇪', name: 'Deutsch' },
            pt: { flag: '🇧🇷', name: 'Português' }
        };
        
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent Bootstrap dropdown from handling the click
                
                const selectedLang = item.getAttribute('data-lang');
                
                this.currentLanguage = selectedLang;
                
                // Update dropdown button
                if (currentFlag) currentFlag.textContent = languages[selectedLang].flag;
                if (currentLanguage) currentLanguage.textContent = languages[selectedLang].name;
                
                // Update active state
                dropdownItems.forEach(dropdownItem => {
                    dropdownItem.classList.remove('active');
                });
                item.classList.add('active');
                
                // Trigger language change event
                this.changeLanguage(selectedLang);
                
                // Close the dropdown manually
                const dropdown = document.querySelector('.language-dropdown .dropdown-menu');
                const dropdownButton = document.querySelector('.language-dropdown .btn');
                if (dropdown) {
                    dropdown.classList.remove('show');
                }
                if (dropdownButton) {
                    dropdownButton.classList.remove('show');
                    dropdownButton.setAttribute('aria-expanded', 'false');
                }
            });
        });
        
        // Set initial active state
        const initialLangItem = document.querySelector(`[data-lang="${this.currentLanguage}"]`);
        if (initialLangItem) {
            initialLangItem.classList.add('active');
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const dropdown = document.querySelector('.language-dropdown');
            if (dropdown && !dropdown.contains(e.target)) {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                const dropdownButton = dropdown.querySelector('.btn');
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('show');
                }
                if (dropdownButton) {
                    dropdownButton.classList.remove('show');
                    dropdownButton.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    changeLanguage(language) {
        // Dispatch custom event for language change
        const event = new CustomEvent('languageChanged', {
            detail: { language: language }
        });
        document.dispatchEvent(event);
        
        // Update all translatable elements
        this.updatePageContent(language);
    }

    updatePageContent(language) {
        const elements = document.querySelectorAll('[data-translate]');
        
        var updatedCount = 0;
        elements.forEach(element => {
            const translationKey = element.getAttribute('data-translate');
            if (translationKey && window.TRANSLATIONS && window.TRANSLATIONS[language]) {
                const translation = window.TRANSLATIONS[language][translationKey];
                if (translation) {
                    element.textContent = translation;
                    updatedCount++;
                }
            }
        });
        
        // Also update form placeholders
        const placeholders = {
            en: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Your Message' },
            de: { name: 'Name', email: 'E-Mail', subject: 'Betreff', message: 'Ihre Nachricht' },
            pt: { name: 'Nome', email: 'E-mail', subject: 'Assunto', message: 'Sua Mensagem' }
        };
        
        if (placeholders[language]) {
            const nameInput = document.querySelector('input[placeholder="Name"], input[placeholder="Nome"]');
            const emailInput = document.querySelector('input[type="email"]');
            const subjectInput = document.querySelector('input[placeholder="Subject"], input[placeholder="Betreff"], input[placeholder="Assunto"]');
            const messageTextarea = document.querySelector('textarea');
            
            if (nameInput) nameInput.placeholder = placeholders[language].name;
            if (emailInput) emailInput.placeholder = placeholders[language].email;
            if (subjectInput) subjectInput.placeholder = placeholders[language].subject;
            if (messageTextarea) messageTextarea.placeholder = placeholders[language].message;
        }
    }

    initMobileMenu() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
            // Close mobile menu when clicking on a link
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 992) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                });
            });
        }
    }
}

// Make Navigation class available globally
window.Navigation = Navigation; 