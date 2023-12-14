function flip(clickedElement) {
    console.log("Clicked Element:", clickedElement);
  
    const flipBoxInner = clickedElement.querySelector(".flip-box-inner");
  
    console.log("flipBoxInner:", flipBoxInner);
  
    if (flipBoxInner.style.transform === "rotateY(180deg)") {
      flipBoxInner.style.transform = "rotateY(0deg)";
    } else {
      flipBoxInner.style.transform = "rotateY(180deg)";
    }
  }
  

  
  function applyFilters() {
    const selectedCompanies = ["a", "d", "k", "j", "i"];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

    // Check if at least one checkbox or radio button is selected
    if (checkboxes.length > 0 || radioButtons.length > 0) {
        // Hide all boxes initially
        const allBoxes = document.querySelectorAll('.box');
        allBoxes.forEach(box => box.style.display = 'none');

        // Show only selected boxes
        selectedCompanies.forEach(company => {
            const box = document.querySelector(`.box.${company}`);
            if (box) {
                box.style.display = 'flex';
            }
        });
    } else {
        // If no checkbox or radio button is selected, show all boxes
        const allBoxes = document.querySelectorAll('.box');
        allBoxes.forEach(box => box.style.display = 'flex');
    }
}




function clearFilters() {
    // Get all checkboxes and radio buttons within the form
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    // Uncheck all checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        
    });

    // Uncheck all radio buttons
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });

    const allBoxes = document.querySelectorAll('.box');
        allBoxes.forEach(box => box.style.display = 'flex');
}

  
function flipBackByKeyword(keyword) {
    const flipBoxes = document.querySelectorAll('.flip-box');

    flipBoxes.forEach(flipBox => {
        const flipBoxBack = flipBox.querySelector('.flip-box-back');
        const companyName = flipBoxBack.querySelector('h2').innerText.toLowerCase();

        if (companyName.includes(keyword.toLowerCase())) {
            flipBox.querySelector('.flip-box-inner').style.transform = "rotateY(180deg)";
        }
    });
}

function performSearch() {
    const keywordInput = document.forms['myform']['keyword'];
    const keyword = keywordInput.value.trim();

    // Check if the keyword is not empty
    if (keyword !== '') {
        // Call the function to flip back based on the keyword
        flipBackByKeyword(keyword);
    }
}
