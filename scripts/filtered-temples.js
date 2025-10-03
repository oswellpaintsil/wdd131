// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Temple data array
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Additional temples
        {
            templeName: "Salt Lake City Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 41010,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-1079992-wallpaper.jpg"
        },
        {
            templeName: "Hong Kong China",
            location: "Hong Kong, China",
            dedicated: "1996, May, 26",
            area: 21000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-china-temple-lds-827910-wallpaper.jpg"
        }
    ];

    // DOM elements
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav');
    const gallery = document.getElementById('temple-gallery');
    const navLinks = document.querySelectorAll('nav a');

    // Function to create temple card
    function createTempleCard(temple) {
        const figure = document.createElement('figure');
        figure.className = 'temple-card';
        figure.innerHTML = `
            <div class="temple-info">
                <h3 class="temple-name">${temple.templeName}</h3>
                <div class="temple-details">
                    <p class="temple-location"><strong>Location:</strong> ${temple.location}</p>
                    <p class="temple-dedicated"><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p class="temple-area"><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            </div>
            <div class="temple-image-container">
                <img
                    src="${temple.imageUrl}"
                    alt="${temple.templeName} Temple"
                    loading="lazy"
                />
            </div>
        `;
        return figure;
    }

    // Function to display temples
    function displayTemples(filteredTemples) {
        gallery.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = createTempleCard(temple);
            gallery.appendChild(card);
        });
    }

    // Function to filter temples
    function filterTemples(filter) {
        let filtered = [];
        
        switch(filter) {
            case 'old':
                // Temples built before 1900
                filtered = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
            case 'new':
                // Temples built after 2000
                filtered = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
            case 'large':
                // Temples larger than 90,000 square feet
                filtered = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                // Temples smaller than 10,000 square feet
                filtered = temples.filter(temple => temple.area < 10000);
                break;
            case 'home':
            default:
                // Display all temples
                filtered = temples;
                break;
        }
        
        displayTemples(filtered);
    }

    // Function to toggle navigation
    function toggleNav() {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            hamburger.textContent = '✕';
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }

    // Initialize the page
    function init() {
        // Display all temples initially
        filterTemples('home');
        
        // Set current year and last modified date
        const currentYearElement = document.getElementById('currentyear');
        const lastModifiedElement = document.getElementById('lastModified');
        
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
        
        if (lastModifiedElement) {
            lastModifiedElement.textContent = document.lastModified;
        }
        
        // Add click event to hamburger
        if (hamburger && nav) {
            hamburger.addEventListener('click', toggleNav);
            hamburger.setAttribute('aria-expanded', 'false');
        }
        
        // Add click events to navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const filter = this.getAttribute('data-filter');
                
                // Update active state
                navLinks.forEach(l => l.removeAttribute('aria-current'));
                this.setAttribute('aria-current', 'page');
                
                // Filter temples
                filterTemples(filter);
                
                // Close mobile menu if open
                if (window.innerWidth < 768 && nav.classList.contains('active')) {
                    toggleNav();
                }
            });
        });
        
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
        navLinks.forEach((link, index) => {
            link.setAttribute('tabindex', '0');
            
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    link.click();
                    if (window.innerWidth < 768) {
                        toggleNav();
                    }
                }
                
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
        
        // Lazy loading enhancement
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
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
    }

    // Initialize the application
    init();
});