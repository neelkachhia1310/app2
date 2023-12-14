const taskLists = [];

function listTask() {
  let result = `
    <div class="section2">
      <div>
        <div class="post_image">
          <img src="../images/man.png" />
          <p>Krushil Mehta</p>
        </div>
        <p class="profile">
          Student of web development at Humber College || Information technology solutions) <br />
          1s • 🌎
        </p>
      </div>`;

  for (let i = 0; i < taskLists.length; i++) {
    result += `<p>${taskLists[i]}</p>`;
  }

  result += `
    <p>👍1</p>
    <div class="comment">
      <input
        type="text"
        id="post_comment_10"
        placeholder="add your comment.."
      />
      <img
        src="../images/send.png"
        height="30px"
        onclick="addcomment(10)"
      />
    </div>
    <div id="comment_here_10"></div>
  </div>`;
  console.log(result);
  document.getElementById("post_here").innerHTML = result;
}

function addTask() {
  let newTask = document.getElementById("post_text").value;
  let errorMessage = document.getElementById("error_message");

  if (newTask.trim() !== "") {
    taskLists.push(newTask);
    listTask();
    errorMessage.innerHTML = ""; // Clear the error message if it was displayed
    errorMessage.classList.remove("show"); // Remove the show class to hide the error message
  } else {
    // Display a user-friendly error message
    errorMessage.innerHTML = "Please add text before posting!";
    errorMessage.classList.add("show"); // Apply the show class for the error message animation
  }
}

const commentLists = {};

function commentListsTask(sectionId) {
  let result = `<br>
    <div class="post_image">
      <img src="../images/man.png"/>
      <p>Krushil Mehta</p>
    </div>`;

  const currentCommentList = commentLists[sectionId] || [];

  for (let i = 0; i < currentCommentList.length; i++) {
    result += `<p>${currentCommentList[i]}</p>`;
  }

  result += ``;
  console.log(result);
  document.getElementById(`comment_here_${sectionId}`).innerHTML = result;
}

function addcomment(sectionId) {
  const newTask = document.getElementById(`post_comment_${sectionId}`).value;

  if (!commentLists[sectionId]) {
    commentLists[sectionId] = [];
  }

  if (newTask.trim() !== "") {
    commentLists[sectionId].push(newTask);
    commentListsTask(sectionId);
  } else {
    const commentInput = document.getElementById(`post_comment_${sectionId}`);
    commentInput.style.border = "2px solid red"; // Adding red border for emphasis
  }
}
