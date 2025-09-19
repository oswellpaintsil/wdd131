// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');
// const li = document.createElement('li');
// const deleteButton = document.createElement('button');
// li.textContent = input.nodeValue;
// deleteButton.textContent = '❌';
// li.append(deleteButton);
// list.append(li);



// Get references to the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener to the button
button.addEventListener('click', function() {
  // Check if the input is not blank (after trimming whitespace)
  if (input.value.trim() !== '') {

    // --- TASK: Move your previous code inside this block ---
    // Create the list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Populate the li element with the input value
    li.textContent = input.value; // Fixed: should be .value, not .nodeValue
    // Populate the delete button with a 'X' emoji
    deleteButton.textContent = '❌';

    // Append the delete button to the list item
    li.append(deleteButton);
    // Append the list item to the unordered list
    list.append(li);

    // --- TASK: Add an event listener to the delete button ---
    deleteButton.addEventListener('click', function () {
      // Remove the parent <li> element when the delete button is clicked
      list.removeChild(li);
      // Return focus to the input field
      input.focus();
    });

    // --- TASK: Clean up the input field ---
    input.value = '';

  } else {
    // Optional: Provide feedback to the user that the input was empty.
    // alert('Please enter a book and chapter.');
    // For a better user experience, just returning focus is often enough.
  }

  // --- TASK: Send focus to the input field (whether item was added or not) ---
  input.focus();
});