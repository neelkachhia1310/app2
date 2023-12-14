document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("heroSection");
  const welcomeText = document.getElementById("welcomeText");
  getRandomQuote();

  const imageUrls = [
    "images/hero-image1.jpg",
    "images/hero-image2.jpg",
    "images/hero-image3.jpg",
  ];

  let currentImageIndex = 0;

  function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${imageUrls[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  }

  setInterval(changeBackgroundImage, 5000);

  changeBackgroundImage();

  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        let notification = new Notification("Welcome to Career Connect", {
          body: "Thank you for allowing our notifications.",
        });
      } else {
        console.log("Permission denied for notifications");
      }
    });
  } else {
    console.log("permission already granted!");
  }

  const feedbackSlider = document.getElementById("feedbackSlider");
  const sliderValue = document.getElementById("sliderValue");
  const rateButton = document.getElementById("rateButton");
  const ratingResult = document.getElementById("ratingResult");

  feedbackSlider.addEventListener("input", function () {
    sliderValue.textContent = feedbackSlider.value;
  });

  rateButton.addEventListener("click", function () {
    const rating = feedbackSlider.value;
    ratingResult.textContent = `Thank you for rating us : ${rating}`;
  });

  feedbackSlider.addEventListener("mouseover", function () {
    feedbackSlider.style.cursor = "pointer";
  });

  feedbackSlider.addEventListener("mouseout", function () {
    feedbackSlider.style.cursor = "auto";
  });

  document
    .querySelectorAll('.col-connect-link[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

  const sections = document.querySelectorAll(".col-connect-section");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        section.classList.add("in-view");
      } else {
        section.classList.remove("in-view");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

let notification, interval;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    let leaveDate = new Date();
    interval = setInterval(() => {
      notification = new Notification("Come back please!!!", {
        body: `You have been away since last ${Math.round(
          (new Date() - leaveDate) / 1000
        )} seconds.`,
        tag: "Come back",
      });
    }, 5000);
  } else {
    if (interval) clearInterval(interval);
    if (notification) notification.close();
  }
});

function getRandomQuote() {
  const apiUrl = "https://api.quotable.io/random";

  fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const quoteTextElement = document.getElementById("quoteText");
      const quoteAuthorElement = document.getElementById("quoteAuthor");

      quoteTextElement.textContent = `"${data.content}"`;
      quoteAuthorElement.textContent = `- ${data.author}`;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
}
