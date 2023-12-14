var currentPage = window.location.pathname;
currentPage = currentPage.toLowerCase();
var menuItems = document.querySelectorAll("#com_nav a");

menuItems.forEach(function (item) {
  var pageName = item.getAttribute("href").split("/").pop().split(".")[0];
  pageName = pageName.toLowerCase();
  if (currentPage.includes(pageName)) {
    if (pageName == "") {
    } else {
      item.classList.add("active");
    }
    if (currentPage == "/") {
      item.classList.add("active");
    }
  }
});
