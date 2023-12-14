// Load tasks from local storage on page load
const taskLists = JSON.parse(localStorage.getItem('taskLists')) || [];
// localStorage.clear();
// Display existing tasks on page load
listTask();

function listTask() {
  let result = ``;
  for (let i = 0; i < taskLists.length; i++) {
    result += `<p>${taskLists[i]}</p>`;
  }
  result += ``;
  console.log(result);
  document.getElementById("message_here").innerHTML = result;
}

function addmessage() {
  const newtaskInput = document.getElementById("post_comment");
  const newtaskValue = newtaskInput.value.trim();

  // Check if the input is not empty
  if (newtaskValue !== '') {
    taskLists.push(newtaskValue);

    // Save tasks to local storage
    localStorage.setItem('taskLists', JSON.stringify(taskLists));

    listTask(); // Update the displayed task list

    // Clear the input field
    newtaskInput.value = '';
  }
}

// Add click event for the post button
document.getElementById("post_button").addEventListener("click", addmessage);

document.getElementById("post_comment").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addmessage();
    }
  });




 