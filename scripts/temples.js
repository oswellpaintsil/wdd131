// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav');
    
    // Function to toggle navigation
    function toggleNav() {
        nav.classList.toggle('active');
        // Change hamburger to X when active
        if (nav.classList.contains('active')) {
            hamburger.textContent = '✕';
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }
    
    // Add click event to hamburger
    if (hamburger && nav) {
        hamburger.addEventListener('click', toggleNav);
        hamburger.setAttribute('aria-expanded', 'false');
    }
    
    // Update footer with current year and last modified date
    const currentYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !e.target.closest('nav') && 
            !e.target.closest('.hamburger')) {
            toggleNav();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            toggleNav();
            hamburger.focus();
        }
    });
    
    // Add keyboard navigation to menu items
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length > 0) {
        navLinks.forEach((link, index) => {
            // Add tabindex for better keyboard navigation
            link.setAttribute('tabindex', '0');
            
            // Handle keyboard navigation
            link.addEventListener('keydown', (e) => {
                // Close menu on Enter or Space
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    link.click();
                    if (window.innerWidth < 768) {
                        toggleNav();
                    }
                }
                
                // Arrow key navigation for menu items
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault();
                    const nextIndex = (index + 1) % navLinks.length;
                    navLinks[nextIndex].focus();
                }
                
                if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
                    navLinks[prevIndex].focus();
                }
                
                // Home and End keys
                if (e.key === 'Home') {
                    e.preventDefault();
                    navLinks[0].focus();
                }
                
                if (e.key === 'End') {
                    e.preventDefault();
                    navLinks[navLinks.length - 1].focus();
                }
            });
        });
    }
    
    // Lazy loading enhancement
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            // Add a class when image is loaded
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    }
    
    // Add focus styles for keyboard users
    document.addEventListener('keyup', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-user');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-user');
    });
});