var currentPage = window.location.pathname;

var menuItems = document.querySelectorAll("#com_nav a");

menuItems.forEach(function (item) {
  var pageName = item.getAttribute("href").split("/").pop().split(".")[0];

  if (currentPage.includes(pageName)) {
    if (pageName == "") {
    } else {
      item.classList.add("active");
    }
    if (pageName == currentPage) {
      item.classList.add("active");
    }
  }
});
