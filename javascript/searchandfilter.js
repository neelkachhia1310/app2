document.addEventListener("DOMContentLoaded", function () {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.style.display = "none";

  const resetButton = document.getElementById("resetButton");
  if (resetButton) {
    resetButton.addEventListener("click", resetFilters);
  }
});

function resetFilters() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("cityName").value = "";
  document.getElementById("email").value = "";

  const campusRadioButtons = document.querySelectorAll('input[name="campus"]');
  if (campusRadioButtons.length > 0) {
    campusRadioButtons.forEach((radio) => {
      radio.checked = false;
    });
  }

  document.getElementById("courseName").value = "";
  document.getElementById("graduationYear").value = "";

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  document.getElementById("dob").value = "";

  const resultsContainer = document.getElementById("results-container");
  resultsContainer.style.display = "none";

  const noResultsMessageContainer =
    document.getElementById("no-results-message");
  noResultsMessageContainer.style.display = "none";
}

function searchAndFilter() {
  const firstName = document.getElementById("firstName").value.toLowerCase();
  const lastName = document.getElementById("lastName").value.toLowerCase();
  const city = document.getElementById("cityName").value.toLowerCase();
  const email = document.getElementById("email").value.toLowerCase();
  const campus =
    document.querySelector('input[name="campus"]:checked')?.value || "";
  const course = document.getElementById("courseName").value;
  const graduationYear = document.getElementById("graduationYear").value;
  const countries = getSelectedCountries();
  const dob = document.getElementById("dob").value;

  const userRecords = getStoredUserRecords();
  const searchResults = userRecords.filter((record) => {
    return (
      record.firstName.toLowerCase().includes(firstName) &&
      record.lastName.toLowerCase().includes(lastName) &&
      record.city.toLowerCase().includes(city) &&
      record.email.toLowerCase().includes(email) &&
      (campus === "" || record.campus === campus) &&
      (course === "" || record.course === course) &&
      (graduationYear === "" || record.graduationYear === graduationYear) &&
      (countries.length === 0 || countries.includes(record.country)) &&
      (dob === "" || record.birthday === dob)
    );
  });

  displaySearchResults(searchResults);
  return false;
}

function getSelectedCountries() {
  const checkboxes = document.querySelectorAll(
    'input[name^="country"]:checked'
  );
  const selectedCountries = Array.from(checkboxes).map(
    (checkbox) => checkbox.value
  );
  return selectedCountries;
}

function getStoredUserRecords() {
  const storedRecords = localStorage.getItem("userRecords");
  return storedRecords ? JSON.parse(storedRecords) : [];
}

function displaySearchResults(results, currentPage = 1, resultsPerPage = 10) {
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedResults = results.slice(startIndex, endIndex);

  const resultsContainer = document.getElementById("results-container");
  const resultsTable = document.getElementById("results-table");
  const resultsTableBody = document.getElementById("results-body");
  const paginationContainer = document.getElementById("pagination-container");
  const noResultsMessageContainer =
    document.getElementById("no-results-message");

  if (paginatedResults.length === 0) {
    resultsContainer.style.display = "block";
    resultsTable.style.display = "none";
    paginationContainer.innerHTML = "";

    noResultsMessageContainer.style.display = "block";
  } else {
    resultsContainer.style.display = "block";
    resultsTable.style.display = "table";
    resultsTableBody.innerHTML = "";
    noResultsMessageContainer.style.display = "none";
    paginatedResults.forEach((result) => {
      const row = resultsTableBody.insertRow();
      row.innerHTML = `
        <td>${result.firstName} ${result.lastName}</td>
        <td>${result.city}</td>
        <td>${result.email}</td>
        <td>${result.campus}</td>
        <td>${result.course}</td>
        <td>${result.graduationYear}</td>
        <td>${result.country}</td>
        <td>${result.birthday}</td>
      `;
    });

    const totalPages = Math.ceil(results.length / resultsPerPage);
    paginationContainer.innerHTML = buildPaginationLinks(
      currentPage,
      totalPages
    );
  }
}

function buildPaginationLinks(currentPage, totalPages) {
  let paginationHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<a href="#" onclick="changePage(${i})" ${
      i === currentPage ? 'class="active"' : ""
    }>${i}</a>`;
  }

  return paginationHTML;
}

function changePage(pageNumber) {
  const resultsPerPage = 10;
  const currentPage = pageNumber;
  const firstName = document.getElementById("firstName").value.toLowerCase();
  const lastName = document.getElementById("lastName").value.toLowerCase();
  const city = document.getElementById("cityName").value.toLowerCase();
  const email = document.getElementById("email").value.toLowerCase();
  const campus =
    document.querySelector('input[name="campus"]:checked')?.value || "";
  const course = document.getElementById("courseName").value;
  const graduationYear = document.getElementById("graduationYear").value;
  const countries = getSelectedCountries();
  const dob = document.getElementById("dob").value;

  const userRecords = getStoredUserRecords();
  const filteredResults = userRecords.filter((record) => {
    return (
      record.firstName.toLowerCase().includes(firstName) &&
      record.lastName.toLowerCase().includes(lastName) &&
      record.city.toLowerCase().includes(city) &&
      record.email.toLowerCase().includes(email) &&
      (campus === "" || record.campus === campus) &&
      (course === "" || record.course === course) &&
      (graduationYear === "" || record.graduationYear === graduationYear) &&
      (countries.length === 0 || countries.includes(record.country)) &&
      (dob === "" || record.birthday === dob)
    );
  });

  displaySearchResults(filteredResults, currentPage, resultsPerPage);
}
