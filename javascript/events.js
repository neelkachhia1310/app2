document.addEventListener("DOMContentLoaded", function () {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // showNotification("Welcome!", "Thank you for granting permission.");
        let notification = new Notification(
          "Welcome to events of Career Connect",
          {
            body: "Thanks you for allowing our notifications.",
          }
        );
      } else {
        console.log("Permission denied for notifications");
        // alert(
        //   "Please allow notifications for this site. You can manage your settings in your browser."
        // );
      }
    });
  } else {
    console.log("permission already granted!");
  }

  const likeButton = document.getElementById("thumsup1");
  const dislikeButton = document.getElementById("thumbsdown1");
  const likeIcon = document.getElementById("likeIcon1");
  const likedIcon = document.getElementById("likedIcon1");
  const dislikeIcon = document.getElementById("dislikeIcon1");
  const dislikedIcon = document.getElementById("dislikedIcon1");

  likeButton.classList.add("active");
  dislikeButton.classList.remove("active");
  likeIcon.style.display = "inline-block";
  likedIcon.style.display = "none";
  dislikeIcon.style.display = "inline-block";
  dislikedIcon.style.display = "none";

  // Set the initial count (you can change this value)
  const initialCount = 3; // Replace with your desired initial count
  const likeCount = document.getElementById("likeCount1");
  const dislikeCount = document.getElementById("dislikeCount1");
  likeCount.textContent = initialCount;
  dislikeCount.textContent = initialCount;

  // Event listeners for like and dislike buttons
  likeButton.addEventListener("click", function () {
    toggleLikeDislike("thumsup1");
  });

  dislikeButton.addEventListener("click", function () {
    toggleLikeDislike("thumsup1");
  });
});

// let notification, interval;
// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "hidden") {
//     let leaveDate = new Date();
//     interval = setInterval(() => {
//       notification = new Notification("Come back please!!!", {
//         body: `You have been away since last ${Math.round(
//           (new Date() - leaveDate) / 1000
//         )} seconds.`,
//         tag: "Come back",
//       });
//     }, 5000);
//   } else {
//     if (interval) clearInterval(interval);
//     if (notification) notification.close();
//   }
// });

function openPopup(headingText, eventData) {
  let popupContainer = document.getElementById("popupContainer");
  let popupHeading = document.getElementById("popupHeading");
  let popupText = document.getElementById("popupText");

  let imageUrl = "/images/";

  switch (headingText) {
    case "Academic Events":
      imageUrl += "Academic Events";
      break;
    case "Cultural and Arts Events":
      imageUrl += "Cultural and Arts Events";
      break;
    case "Sports Events":
      imageUrl += "Sports Events";
      break;
    case "Social and Networking Events":
      imageUrl += "Social and Networking Events";
      break;
    case "Educational Workshops and Training":
      imageUrl += "Educational Workshops and Training";
      break;
    case "Celebrations":
      imageUrl += "Celebrations";
      break;
    default:
      imageUrl = "";
      break;
  }

  if (imageUrl != "") {
    imageUrl += ".jpg";
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageUrl;
  }

  popupHeading.textContent = headingText;
  popupText.textContent = eventData;

  popupContainer.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closePopup() {
  let popupContainer = document.getElementById("popupContainer");
  popupContainer.style.display = "none";
  let popupImage = document.getElementById("popupImage");
  popupImage.src = "";
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll(".eventinfoheading");
  headings.forEach(function (heading) {
    heading.addEventListener("click", function () {
      let eventData = heading.nextElementSibling.textContent;
      openPopup(heading.innerText, eventData);
    });
  });

  let closeButton = document.getElementById("closePopup");
  closeButton.addEventListener("click", closePopup);
});

function toggleLikeDislike(id) {
  const likeButton = document.getElementById(id);
  const dislikeButton = document.getElementById(`thumbs${id.substring(6)}`);
  const likeIcon = document.getElementById(`likeIcon${id.substring(6)}`);
  const likedIcon = document.getElementById(`likedIcon${id.substring(6)}`);
  const dislikeIcon = document.getElementById(`dislikeIcon${id.substring(6)}`);
  const dislikedIcon = document.getElementById(
    `dislikedIcon${id.substring(6)}`
  );
  const likeCount = document.getElementById(`likeCount${id.substring(6)}`);
  const dislikeCount = document.getElementById(
    `dislikeCount${id.substring(6)}`
  );

  if (likeButton.classList.contains("active")) {
    // User is unliking, toggle it off
    likeButton.classList.remove("active");
    likeIcon.style.display = "inline-block";
    likedIcon.style.display = "none";
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  } else {
    // User is liking, toggle it on
    likeButton.classList.add("active");
    likeIcon.style.display = "none";
    likedIcon.style.display = "inline-block";
    likeCount.textContent = parseInt(likeCount.textContent) + 1;

    // If dislike was active, toggle it off
    if (dislikeButton.classList.contains("active")) {
      dislikeButton.classList.remove("active");
      dislikeIcon.style.display = "inline-block";
      dislikedIcon.style.display = "none";
      dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
    }
  }
}

function toggleLikeDislike(id) {
  const likeButton = document.getElementById(id);
  const dislikeButton = document.getElementById(`thumbs${id.substring(6)}`);
  const likeIcon = document.getElementById(`likeIcon${id.substring(6)}`);
  const likedIcon = document.getElementById(`likedIcon${id.substring(6)}`);
  const dislikeIcon = document.getElementById(`dislikeIcon${id.substring(6)}`);
  const dislikedIcon = document.getElementById(
    `dislikedIcon${id.substring(6)}`
  );
  const likeCount = document.getElementById(`likeCount${id.substring(6)}`);
  const dislikeCount = document.getElementById(
    `dislikeCount${id.substring(6)}`
  );

  if (likeButton.classList.contains("active")) {
    // User is unliking, toggle it off
    likeButton.classList.remove("active");
    likeIcon.style.display = "inline-block";
    likedIcon.style.display = "none";
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  } else {
    // User is liking, toggle it on
    likeButton.classList.add("active");
    likeIcon.style.display = "none";
    likedIcon.style.display = "inline-block";
    likeCount.textContent = parseInt(likeCount.textContent) + 1;

    // If dislike was active, toggle it off
    if (dislikeButton.classList.contains("active")) {
      dislikeButton.classList.remove("active");
      dislikeIcon.style.display = "inline-block";
      dislikedIcon.style.display = "none";
      dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
    }
  }
}
