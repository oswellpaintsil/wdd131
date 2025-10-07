// Review counter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize counter if it doesn't exist
    if (!localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', '0');
    }
    
    // Get current count from localStorage
    let reviewCount = parseInt(localStorage.getItem('reviewCount'));
    
    // Increment the count
    reviewCount++;
    
    // Store the updated count
    localStorage.setItem('reviewCount', reviewCount.toString());
    
    // Display the count with proper formatting
    const countElement = document.getElementById('reviewCount');
    if (countElement) {
        countElement.textContent = reviewCount.toLocaleString();
    }
    
    // Add animation to counter
    setTimeout(() => {
        countElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            countElement.style.transform = 'scale(1)';
        }, 200);
    }, 100);
});