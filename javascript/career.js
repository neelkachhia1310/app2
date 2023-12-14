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
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    // Apply dark-black class to selected checkboxes
    checkboxes.forEach((checkbox) => {
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (checkbox.checked && label) {
            label.classList.style.color = "red";
        } else {
            abel.classList.style.color = "black";
        }
    });

    // Apply dark-black class to selected radio buttons
    radioButtons.forEach((radio) => {
        const label = document.querySelector(`label[for="${radio.id}"]`);
        if (radio.checked && label) {
            label.classList.style.color = "red";
        } else {
            label.classList.style.color = "black";
        }
    });
}



// label.style.color = "red";
  

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
}

  
