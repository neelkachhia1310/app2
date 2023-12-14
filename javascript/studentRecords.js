// studentRecords.js

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomStudent() {
  const firstNames = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    "David",
    "Olivia",
    "Daniel",
    "Ava",
    "Ethan",
    "Mia",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Williams",
    "Jones",
    "Miller",
    "Davis",
    "García",
    "Rodriguez",
    "Martinez",
  ];
  const cities = ["New York", "Los Angeles", "Toronto", "Mumbai"];
  const courses = [
    "IT Solutions",
    "Web Development",
    "AI",
    "Machine Learning",
    "Big Data",
  ];
  const campuses = ["North Campus", "IGS", "Lakeshore Campus"];
  const countries = ["India", "Canada", "USA"];
  const graduationYears = ["2024", "2023", "2022", "2021"];

  const birthday = new Date(
    getRandomInt(1970, 2000),
    getRandomInt(0, 11),
    getRandomInt(1, 28)
  );

  return {
    firstName: firstNames[getRandomInt(0, firstNames.length - 1)],
    lastName: lastNames[getRandomInt(0, lastNames.length - 1)],
    city: cities[getRandomInt(0, cities.length - 1)],
    email: `example${getRandomInt(100, 999)}@example.com`,
    course: courses[getRandomInt(0, courses.length - 1)],
    campus: campuses[getRandomInt(0, campuses.length - 1)],
    country: countries[getRandomInt(0, countries.length - 1)],
    graduationYear:
      graduationYears[getRandomInt(0, graduationYears.length - 1)],
    birthday: birthday.toISOString().split("T")[0], // Format as YYYY-MM-DD
  };
}

function generateRandomStudents(numberOfStudents) {
  const students = [];
  for (let i = 0; i < numberOfStudents; i++) {
    students.push(generateRandomStudent());
  }
  return students;
}

// Store random student records in localStorage
function storeRandomStudentRecords() {
  const recordsToStore = generateRandomStudents(100);
  localStorage.setItem("userRecords", JSON.stringify(recordsToStore));
}

// Call the function to store records when the page loads
document.addEventListener("DOMContentLoaded", function () {
  storeRandomStudentRecords();
});
