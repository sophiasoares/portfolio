// Contact Section Component JavaScript
class Contact {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollAnimation();
        this.initContactForm();
    }

    initScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.classList.add('fade-in');
            observer.observe(contactSection);
        }
    }

    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                // Get form data
                const name = contactForm.querySelector('input[name="name"]').value;
                const email = contactForm.querySelector('input[name="email"]').value;
                const subject = contactForm.querySelector('input[name="subject"]').value;
                const message = contactForm.querySelector('textarea[name="message"]').value;
                
                // Simple validation
                if (!name || !email || !subject || !message) {
                    e.preventDefault();
                    this.showNotification('Please fill in all fields.', 'error');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    e.preventDefault();
                    this.showNotification('Please enter a valid email address.', 'error');
                    return;
                }
                
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.disabled = true;
                
                // Prevent default form submission and handle it manually
                e.preventDefault();
                
                // Submit form using fetch to avoid page redirect
                const formData = new FormData(contactForm);
                
                fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                        contactForm.reset();
                    } else {
                        this.showNotification('There was an error sending your message. Please try again.', 'error');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    this.showNotification('There was an error sending your message. Please try again.', 'error');
                })
                .finally(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                });
            });
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius-md);
            color: white;
            font-weight: 500;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: var(--shadow-lg);
        `;
        
        // Set background color based on type
        if (type === 'success') {
            notification.style.background = 'var(--secondary-color)';
        } else if (type === 'error') {
            notification.style.background = '#EF4444';
        } else {
            notification.style.background = 'var(--primary-color)';
        }
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
}

// Make Contact class available globally
window.Contact = Contact; 