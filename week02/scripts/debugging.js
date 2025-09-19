// const radiusOutput = document.getElementById('radius');
// const areaOutput = document.querySelector('area');

// let area = 0;
// const PI = 3.14159;

// let radius = 10;
// area = PI * radius * radius;
// radiusOutput.textContent = radius;
// areaOutput.textContent = area;

// radius = 20;
// area = PI * radius * radius;
// radiusOutput = radius;
// areaOutput = area;

// 1. Get the elements correctly
const radiusOutput = document.getElementById('radius');
// Use the ID selector #area to find the element with id="area"
const areaOutput = document.getElementById('area'); // querySelector('#area') would also work

let area = 0;
const PI = 3.14159;

// Calculate and display for radius = 10
let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Calculate and display for radius = 20
radius = 20;
area = PI * radius * radius;
// 2. CORRECTED: Set the textContent of the elements, don't reassign the constants.
radiusOutput.textContent = radius;
areaOutput.textContent = area;