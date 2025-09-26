// Wind chill calculation function (one line as required)
function calculateWindChill(temperature, windSpeed) {
    // Metric wind chill formula for °C (temperature <= 10°C and windSpeed > 4.8 km/h)
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

// Update wind chill display
function updateWindChill() {
    const temperature = 28; // °C (static value - does NOT meet condition: > 10°C)
    const windSpeed = 12;   // km/h (static value meeting condition: > 4.8 km/h)
    
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');
    
    // Display static values
    temperatureElement.textContent = temperature;
    windSpeedElement.textContent = windSpeed;
    
    // Check conditions for wind chill calculation (metric units)
    // Temperature must be <= 10°C and wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill.toFixed(1) + ' °C';
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Update footer with current year and last modified date
function updateFooter() {
    // Current year
    const currentYearElement = document.getElementById('current-year');
    currentYearElement.textContent = new Date().getFullYear();
    
    // Last modified date in exact format: DD/MM/YYYY HH:MM:SS
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModified = new Date(document.lastModified);
    
    const day = String(lastModified.getDate()).padStart(2, '0');
    const month = String(lastModified.getMonth() + 1).padStart(2, '0');
    const year = lastModified.getFullYear();
    const hours = String(lastModified.getHours()).padStart(2, '0');
    const minutes = String(lastModified.getMinutes()).padStart(2, '0');
    const seconds = String(lastModified.getSeconds()).padStart(2, '0');
    
    lastModifiedElement.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateWindChill();
    updateFooter();
});