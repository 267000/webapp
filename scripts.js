// Select elements
const reminderForm = document.getElementById('reminder-form');
const reminderList = document.getElementById('reminder-list');

// Handle form submission
reminderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const petName = document.getElementById('pet-name').value;
  const task = document.getElementById('task').value;
  const time = document.getElementById('time').value;

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span><strong>${petName}</strong>: ${task} at ${time}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Append to the list
  reminderList.appendChild(listItem);

  // Clear the form
  reminderForm.reset();

  // Add delete functionality
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    listItem.remove();
  });
});
