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
    let newtask = document.getElementById("post_comment").value;
    taskLists.push(newtask);

    // Save tasks to local storage
    localStorage.setItem('taskLists', JSON.stringify(taskLists));

    listTask(); // Update the displayed task list
}
