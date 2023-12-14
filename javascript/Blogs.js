var blogData = [
    { title: "Humber College, Canada", content: "Among the highest-rated is Humber College with its campuses spread throughout the city of Toronto. Also known as the Humber Institute of Technology and Advanced Learning, it is a publically-funded university and three campuses called Humber North Campus, Lakeshore Campus, and Humber Orangeville Campus.The college provides more than 200 programs at bachelor, post-graduate certificate and apprenticeship levels. Humber also holds training programs in the fields of information technology and engineering and is the receiver of Silver Rating for Sustainability Tracking Assessment System. With six highly renowned faculties of applied sciences and technology, business, media and creative arts, liberal arts and sciences and innovative learning, social and community services, and health sciences and wellness, there is a scope for almost all kinds of academic background to get enrolled. The North Campus, situated close to the Humber River, has a large number of students, some of who are residents in the campus. The campus provides full and part-time program options in Media Studies, Health Sciences, Liberal Arts, Business, Hospitality and Tourism and has a newly opened Learning Resource Centre (LRC).", category: "Technology", image: "https://humber.ca/brand/sites/default/files/styles/photo_of_campus/public/images/campus/32911.jpg?itok=RnsbpXyu" },
    { title: "Roaming Around the World", content: "Full content of blog 2", category: "Travel", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/375px-Shaqi_jrvej.jpg" },
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

        document.getElementById("blogForm").style.display = "none";
        document.getElementById("blogFormModal").style.display = "none";

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

    content = content.replace(/\n/g, '<br>');

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