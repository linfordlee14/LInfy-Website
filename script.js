// This file contains JavaScript code to enhance interactivity on the website.

document.addEventListener('DOMContentLoaded', function() {
    // Back to Top button functionality
    const backToTopButton = document.getElementById('back-to-top');

    // Show or hide the button based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});