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

  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        let notification = new Notification(
          "Welcome to events of Career Connect",
          {
            body: "Thanks you for allowing our notifications.",
          }
        );
      } else {
        console.log("Permission denied for notifications");
      }
    });
  } else {
    console.log("permission already granted!");
  }

  changeLikeDislike(1);
  changeLikeDislike(2);
  changeLikeDislike(3);
  changeLikeDislike(4);
  changeLikeDislike(5);
  changeLikeDislike(6);

  const hackathonDate = new Date("2023-12-17T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const timeDifference = hackathonDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("customDays").innerText = days;
    document.getElementById("customHours").innerText = hours;
    document.getElementById("customMinutes").innerText = minutes;
    document.getElementById("customSeconds").innerText = seconds;
  }

  setInterval(updateCountdown, 1000);

  updateCountdown();
});

function changeLikeDislike(EventId) {
  const likeButton = document.getElementById("thumsup" + EventId);
  const dislikeButton = document.getElementById("thumbsdown" + EventId);
  const likeIcon = document.getElementById("likeIcon" + EventId);
  const dislikeIcon = document.getElementById("dislikeIcon" + EventId);
  const likedIcon = document.getElementById("likedIcon" + EventId);
  const dislikedIcon = document.getElementById("dislikedIcon" + EventId);
  const likeCount = document.getElementById("likeCount" + EventId);
  const dislikeCount = document.getElementById("dislikeCount" + EventId);

  let initialLikeCount = Math.floor(Math.random() * 100);
  let initialDislikeCount = Math.floor(Math.random() * 100);

  likeCount.textContent = initialLikeCount;
  dislikeCount.textContent = initialDislikeCount;
  likeIcon.style.display = "inline-block";
  dislikeIcon.style.display = "inline-block";

  likeButton.addEventListener("click", function () {
    if (
      likeIcon.style.display === "inline-block" &&
      dislikeIcon.style.display === "inline-block"
    ) {
      likedIcon.style.display = "inline-block";
      likeIcon.style.display = "none";
      likeCount.textContent = initialLikeCount + 1;
    } else if (likedIcon.style.display === "inline-block") {
      likedIcon.style.display = "none";
      likeIcon.style.display = "inline-block";
      likeCount.textContent = initialLikeCount;
    } else {
      likedIcon.style.display = "inline-block";
      likeIcon.style.display = "none";
      likeCount.textContent = initialLikeCount + 1;
      dislikedIcon.style.display = "none";
      dislikeIcon.style.display = "inline-block";
      dislikeCount.textContent = initialDislikeCount;
    }
  });
  dislikeButton.addEventListener("click", function () {
    if (
      likeIcon.style.display === "inline-block" &&
      dislikeIcon.style.display === "inline-block"
    ) {
      dislikedIcon.style.display = "inline-block";
      dislikeIcon.style.display = "none";
      dislikeCount.textContent = initialDislikeCount + 1;
    } else if (dislikedIcon.style.display === "inline-block") {
      dislikedIcon.style.display = "none";
      dislikeIcon.style.display = "inline-block";
      dislikeCount.textContent = initialDislikeCount;
    } else {
      likedIcon.style.display = "none";
      likeIcon.style.display = "inline-block";
      likeCount.textContent = initialLikeCount;
      dislikedIcon.style.display = "inline-block";
      dislikeIcon.style.display = "none";
      dislikeCount.textContent = initialDislikeCount + 1;
    }
  });
}
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
