// Footer Component JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Load footer HTML
    fetch('components/footer/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-component').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading footer component:', error);
        });
}); 