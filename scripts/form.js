// Product array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate product dropdown
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    
    // Clear any existing options except the first one
    while (productSelect.children.length > 1) {
        productSelect.removeChild(productSelect.lastChild);
    }
    
    // Add products from array
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        productSelect.appendChild(option);
    });
    
    // Set today's date as default for installation date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('installationDate').value = today;
    
    // Add keyboard navigation for rating stars
    const ratingInputs = document.querySelectorAll('.rating-container input');
    ratingInputs.forEach((input, index) => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && index < ratingInputs.length - 1) {
                ratingInputs[index + 1].focus();
            } else if (e.key === 'ArrowRight' && index > 0) {
                ratingInputs[index - 1].focus();
            }
        });
    });
});