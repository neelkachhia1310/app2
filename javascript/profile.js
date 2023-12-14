function editProfile(field) {
  const currentValueElement = document.getElementById(field);
  const currentValue = currentValueElement.childNodes[0].nodeValue.trim();

  // Check if an edit form is already present
  const existingForm = currentValueElement.querySelector('.edit-form');
  
  if (existingForm) {
      existingForm.remove();
  } else {
      // Create a form element
      const form = document.createElement('form');
      form.classList.add('edit-form');

      // Create an input field for the user to edit
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentValue.split(': ')[1]; // Remove the form title
      input.classList.add('edit-input');

      // Create an "Update" button
      const updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.classList.add('update-button');

      // Handle the form submission
      form.addEventListener('submit', function (event) {
          event.preventDefault();

          // Update the content and hide the form
          currentValueElement.childNodes[0].nodeValue = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${input.value}`;
          form.style.display = 'none';
      });

      // Append input and button to the form
      form.appendChild(input);
      form.appendChild(updateButton);

      // Append the form after the current content
      currentValueElement.appendChild(form);
  }
}





function addToList(listId, promptMessage) {
  const newListValue = prompt(promptMessage);
  if (newListValue !== null && newListValue.trim() !== "") {
      const list = document.getElementById(listId);
      const li = document.createElement("li");
      li.textContent = newListValue;
      list.appendChild(li);
  }
}

function addTestimonial() {
  const newTestimonial = prompt("Write a testimonial:");
  if (newTestimonial !== null && newTestimonial.trim() !== "") {
      const testimonialList = document.querySelector(".box.testimonials ul");
      const li = document.createElement("li");
      li.textContent = `"${newTestimonial}"`;
      testimonialList.appendChild(li);
  }
}

// Light/Dark Mode Toggle
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
}

function addToListWithForm(listId, placeholder) {
  const list = document.getElementById(listId);

  // Create a form element
  const form = document.createElement('form');
  form.classList.add('add-form');

  // Create an input field for the user to add a new item
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = placeholder;
  input.classList.add('add-input');

  // Create an "Add" button
  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.classList.add('add-button');

  // Handle the form submission
  form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Add a new item to the list, reset the form, and hide the form
      if (input.value.trim() !== "") {
          const li = document.createElement('li');
          li.textContent = input.value;
          list.appendChild(li);
          form.reset();
          form.style.display = 'none';
      }
  });

  // Append input and button to the form
  form.appendChild(input);
  form.appendChild(addButton);

  // Append the form after the list
  list.appendChild(form);
}
