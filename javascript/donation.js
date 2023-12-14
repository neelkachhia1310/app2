function openDonationModal(name, description, target, amountRaised, image) {
    var modal = document.getElementById('donationModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalContent = document.getElementById('modalContent');
    var donationForm = document.getElementById('donationForm');
    var thankYouMessage = document.getElementById('thankYouMessage');

    modalTitle.innerText = name + ' Details';

    modalContent.innerHTML = `
        <img src="${image}" alt="${name}" style="max-width: 100%; height: auto; border-radius: 8px;">
        <p>${description}</p>
        <p>Target: $${target}</p>
        <p>Amount Raised: $${amountRaised}</p>
        <div class="progress-bar" style="width: ${calculateProgress(amountRaised, target)}%;"></div>
        <p>Progress: ${calculateProgress(amountRaised, target)}% of $${target} goal</p>
        <h3>Recent Donors</h3>
        <ul id="recentDonors"></ul>
    `;

    displayRecentDonors();

    donationForm.style.display = 'block';
    thankYouMessage.style.display = 'none';

    modal.style.display = 'block';
}

function closeDonationModal() {
    var modal = document.getElementById('donationModal');
    modal.style.display = 'none';
}

var donationData = [
    {
        name: "Scholarship Fund",
        image: "https://example.com/scholarship.jpg",
        amountRaised: 5000,
        donors: 100,
        category: "Academic",
        description: "Support students in pursuing higher education by contributing to our Scholarship Fund.",
        progress: 60,
        target: 10000
    },
];

document.addEventListener("DOMContentLoaded", function () {
    loadDonationCauses(donationData);
});

function loadDonationCauses(data) {
    var container = document.getElementById("donationContainer");
    container.innerHTML = "";

    data.forEach(cause => {
        var donationCause = document.createElement("section");
        donationCause.className = "donation-cause";
        donationCause.setAttribute("data-category", cause.category);

        donationCause.innerHTML = `
            <div class="cause-info">
                <img src="${cause.image}" alt="${cause.name}" height="100px" width="100px">
                <h3>${cause.name}</h3>
                <p>Amount Raised: $${cause.amountRaised}</p>
                <p>Donors: ${cause.donors}</p>
                <p>Category: ${cause.category}</p>
                <p>Description: ${cause.description}</p>
                <div class="progress-bar" style="width: ${cause.progress}%;"></div>
                <p>Progress: ${cause.progress}% of $${cause.target} goal</p>
            </div>
            <div class="donate-btn">
                <button onclick="openDonationModal('${cause.name}', '${cause.description}', ${cause.target}, ${cause.amountRaised}, '${cause.image}')">Donate Now</button>
                <span class="share-icon" onclick="shareCause('${cause.name}')">Share</span>
            </div>
        `;

        container.appendChild(donationCause);
    });
}

function filterByCategory(category) {
    var causes = document.getElementsByClassName("donation-cause");
    for (var i = 0; i < causes.length; i++) {
        var cause = causes[i];
        if (category === "All" || cause.getAttribute("data-category") === category) {
            cause.style.display = "block";
        } else {
            cause.style.display = "none";
        }
    }
}

function shareCause(causeName) {

    alert("Sharing cause: " + causeName);
}

function openDonationModal(name, description, target, amountRaised) {
    var modal = document.getElementById('donationModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalContent = document.getElementById('modalContent');
    var donationForm = document.getElementById('donationForm');
    var thankYouMessage = document.getElementById('thankYouMessage');

    modalTitle.innerText = name + ' Details';

    modalContent.innerHTML = `
        <p>${description}</p>
        <p>Target: $${target}</p>
        <p>Amount Raised: $${amountRaised}</p>
        <div class="progress-bar" style="width: ${calculateProgress(amountRaised, target)}%;"></div>
        <p>Progress: ${calculateProgress(amountRaised, target)}% of $${target} goal</p>
        <h3>Recent Donors</h3>
        <ul id="recentDonors"></ul>
    `;

    displayRecentDonors();

    donationForm.style.display = 'block';
    thankYouMessage.style.display = 'none';

    modal.style.display = 'block';
}

function submitDonation() {
    var donationAmount = document.getElementById('donationAmount').value;

    showThankYouMessage();
}

function showThankYouMessage() {
    var donationForm = document.getElementById('donationForm');
    var thankYouMessage = document.getElementById('thankYouMessage');

    donationForm.style.display = 'none';
    thankYouMessage.style.display = 'block';
}

function displayRecentDonors() {

    var recentDonors = ['John Doe', 'Jane Smith', 'Sam Wilson'];

    var recentDonorsList = document.getElementById('recentDonors');
    recentDonorsList.innerHTML = "";

    recentDonors.forEach(donor => {
        var donorItem = document.createElement('li');
        donorItem.innerText = donor;
        recentDonorsList.appendChild(donorItem);
    });
}

function calculateProgress(amountRaised, target) {
    return (amountRaised / target) * 100;
}

function openCreateDonationForm() {
    var createDonationModal = document.getElementById('createDonationModal');
    createDonationModal.style.display = 'block';
}

function closeCreateDonationModal() {
    var createDonationModal = document.getElementById('createDonationModal');
    createDonationModal.style.display = 'none';
}

function createDonationCause() {
    var causeName = document.getElementById('causeName').value;
    var causeDescription = document.getElementById('causeDescription').value;
    var causeTarget = document.getElementById('causeTarget').value;

    if (!causeName || !causeDescription || !causeTarget) {
        alert('Please fill in all the fields.');
        return;
    }


    var newCause = {
        name: causeName,
        description: causeDescription,
        target: parseFloat(causeTarget),
        amountRaised: 0,
        donors: 0,
        category: "Custom",
        image: "https://example.com/placeholder-image.jpg", // You can use a placeholder image
        progress: 0 // Initialize progress to 0
    };

    // Push the new cause to the donationData array
    donationData.push(newCause);

    // Reload donation causes to include the new one
    loadDonationCauses(donationData);

    // Close the create donation modal
    closeCreateDonationModal();
}


