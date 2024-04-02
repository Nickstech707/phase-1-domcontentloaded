// Your code goes here
// Wait for the DOM to be loaded and then call the updateDOM function when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  updateDOM();
});

// Function to update the content of an HTML element with id "text" and set it to "This is really cool!"
function updateDOM() {
  document.getElementById("text").innerHTML = "This is really cool!";
}
