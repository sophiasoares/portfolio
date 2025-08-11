// Configuration file for sensitive data
// This file should be added to .gitignore
const CONFIG = {
    formspreeId: 'xwpqvnpb',
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
} 