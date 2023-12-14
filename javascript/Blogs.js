var blogData = [
    { title: "Exploring the Wonders of Nature", content: "Full content of blog 1", category: "Technology", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/375px-Shaqi_jrvej.jpg" },
    { title: "Roaming Around the World", content: "Full content of blog 2", category: "Travel", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/375px-Shaqi_jrvej.jpg" },
    // Add more blog data as needed
];

document.addEventListener("DOMContentLoaded", function () {
    loadBlogPosts(blogData);
});

function loadBlogPosts(data) {
    var container = document.getElementById("blogContainer");

    container.innerHTML = "";

    data.forEach(post => {
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        
        blogPost.innerHTML = `
            <img src="${post.image}" alt="Blog Image">
            <h2>${post.title}</h2>
            <p>${post.content.substring(0, 100)}...</p>
            <p>Category: ${post.category}</p>
            <a href="#" onclick="showFullPost('${post.title}', '${post.content}', '${post.image}')">Read More</a>
        `;

        container.appendChild(blogPost);

        // Hide the form initially
        document.getElementById("blogForm").style.display = "none";
        document.getElementById("blogFormModal").style.display = "none";

        // Load blog posts
        loadBlogPosts(blogData);
    });
}

function showFullPost(title, content, image) {
    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalImage = document.getElementById("modalImage");
    var modalContent = document.getElementById("modalContent");

    modalTitle.textContent = title;
    modalImage.src = image;

    // Replace line breaks with <br> tags in the content
    content = content.replace(/\n/g, '<br>');

    // Use innerHTML to support line breaks
    modalContent.innerHTML = content;

    modal.style.display = "block";
}


function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function addNewBlogPost() {
    var title = document.getElementById("blogTitle").value;
    var content = document.getElementById("blogContent").value.replace(/\n/g, '\\n').replace(/'/g, "\\'");
    var image = document.getElementById("blogImage").value;
    var category = document.getElementById("blogCategory").value;

    if (title && content && image && category) {
        blogData.push({ title: title, content: content, category: category, image: image });
        loadBlogPosts(blogData);
        document.getElementById("blogTitle").value = "";
        document.getElementById("blogContent").value = "";
        document.getElementById("blogImage").value = "";
        document.getElementById("blogCategory").value = "";
        closeModal();
    } else {
        alert("Please enter title, content, category, and image URL.");
    }
}


function filterByCategory() {
    var selectedCategory = document.getElementById("categoryFilter").value;

    if (selectedCategory === "all") {
        loadBlogPosts(blogData);
    } else {
        var filteredData = blogData.filter(post => post.category === selectedCategory);
        loadBlogPosts(filteredData);
    }
}

function toggleBlogForm() {
    var modal = document.getElementById("blogFormModal");

    // Display the modal
    modal.style.display = "block";
}

function closeBlogFormModal() {
    var modal = document.getElementById("blogFormModal");

    // Close the modal
    modal.style.display = "none";
}

function loadBlogPosts(data) {
    var container = document.getElementById("blogContainer");

    container.innerHTML = "";

    data.forEach(post => {
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";

        blogPost.innerHTML = `
            <img src="${post.image}" alt="Blog Image">
            <h2>${post.title}</h2>
            <p>${post.content.substring(0, 100)}...</p>
            <p>Category: ${post.category}</p>
            <a href="#" onclick="showFullPost('${post.title}', '${post.content}', '${post.image}')">Read More</a>
        `;

        container.appendChild(blogPost);
    });
}