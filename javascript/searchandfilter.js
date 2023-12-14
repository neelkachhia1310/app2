// searchFunctionality.js
document.addEventListener("DOMContentLoaded", function () {
  // Initially hide the results container
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

  // Reset radio buttons for campus
  const campusRadioButtons = document.querySelectorAll('input[name="campus"]');
  if (campusRadioButtons.length > 0) {
    campusRadioButtons.forEach((radio) => {
      radio.checked = false;
    });
  }

  // Reset other inputs and checkboxes
  document.getElementById("courseName").value = "";
  document.getElementById("graduationYear").value = "";

  // Reset checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Reset birthday field
  document.getElementById("dob").value = "";

  // Reset results container
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.style.display = "none";

  const noResultsMessageContainer =
    document.getElementById("no-results-message");
  noResultsMessageContainer.style.display = "none";
}
// Function to search and filter student records
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
  return false; // Prevent form submission
}

// Function to get selected countries from checkboxes
function getSelectedCountries() {
  const checkboxes = document.querySelectorAll(
    'input[name^="country"]:checked'
  );
  const selectedCountries = Array.from(checkboxes).map(
    (checkbox) => checkbox.value
  );
  return selectedCountries;
}

// Function to get stored user records from localStorage
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
    // No matching records found
    resultsContainer.style.display = "block"; // Show the entire results container
    resultsTable.style.display = "none"; // Hide the results table
    paginationContainer.innerHTML = "";
    // resultsTableBody.innerHTML =
    //   '<tr><td colspan="8">No matching records found.</td></tr>';
    noResultsMessageContainer.style.display = "block";
  } else {
    // Matching records found
    resultsContainer.style.display = "block"; // Show the entire results container
    resultsTable.style.display = "table"; // Show the results table
    resultsTableBody.innerHTML = ""; // Clear previous results
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

    // Display pagination links
    const totalPages = Math.ceil(results.length / resultsPerPage);
    paginationContainer.innerHTML = buildPaginationLinks(
      currentPage,
      totalPages
    );
  }
}

// Function to build pagination links
function buildPaginationLinks(currentPage, totalPages) {
  let paginationHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<a href="#" onclick="changePage(${i})" ${
      i === currentPage ? 'class="active"' : ""
    }>${i}</a>`;
  }

  return paginationHTML;
}

// Function to handle page change
function changePage(pageNumber) {
  const resultsPerPage = 10; // Change this to the desired number of results per page
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
