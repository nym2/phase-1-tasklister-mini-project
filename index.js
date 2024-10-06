// Select the form and tasks container
const form = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

// Add event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior (refresh)
  event.preventDefault();
  
  // Get the value of the input field
  const taskInput = document.querySelector("#new-task-description").value;
  
  // Create a new list item to display the task
  const taskItem = document.createElement("li");
  taskItem.textContent = taskInput;
  
  // Append the new task to the task list
  taskList.appendChild(taskItem);
  
  // Clear the input field after submitting
  document.querySelector("#new-task-description").value = "";
});