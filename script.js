// JavaScript to handle category thumbnail display

// Thumbnails for each category
const thumbnailsData = {
    documentary: [
        "documentry (1).jpg", "documentry (1).png", "documentry (2).jpg", "documentry (2).png",
        "documentry (3).jpg", "documentry (3).png", "documentry (4).jpg", "documentry (4).png",
        "documentry (5).jpg", "documentry (5).png", "documentry (6).jpg", "documentry (7).jpg",
        "documentry (8).jpg", "documentry (9).jpg", "podcast (1).jpg", "podcast (1).png"
    ],
    vlogging: [
        "vlogging (1).jpg", "vlogging (1).png", "vlogging (2).jpg", "vlogging (2).png",
        "vlogging (3).jpg", "vlogging (3).png", "vlogging (4).jpg", "vlogging (4).png",
        "vlogging (5).jpg", "vlogging (6).jpg", "vlogging (7).jpg", "vlogging (8).jpg",
        "vlogging (9).jpg", "vlogging (10).jpg", "vlogging (11).jpg", "vlogging (12).jpg"
    ],
    techEducational: [
        "tech1.jpg", "tech2.jpg", "tech3.jpg", "tech4.jpg", "tech5.jpg", "tech6.jpg", "tech7.jpg"
    ],
    vines: [
        "vines1.jpg", "vines2.jpg", "vines3.jpg", "vines4.jpg", "vines5.jpg"
    ],
    others: [
        "others1.jpg", "others2.jpg", "others3.jpg", "others4.jpg", "others5.jpg"
    ]
};

// Function to display thumbnails based on the selected category
function displayThumbnails(category) {
    const thumbnailsSection = document.getElementById("category-thumbnails");

    // Clear any existing thumbnails
    thumbnailsSection.innerHTML = "";

    // Get thumbnails for the selected category
    const categoryThumbnails = thumbnailsData[category];

    // Create and append thumbnails to the section
    categoryThumbnails.forEach(thumb => {
        const imgElement = document.createElement("img");
        imgElement.src = thumb;
        imgElement.alt = `${category} thumbnail`;
        imgElement.classList.add("thumbnail-item");
        thumbnailsSection.appendChild(imgElement);
    });

    // Make the thumbnails section visible
    thumbnailsSection.style.visibility = "visible";
}

// Add event listeners for category clicks
document.getElementById("documentary").addEventListener("click", function() {
    displayThumbnails("documentary");
});

document.getElementById("vlogging").addEventListener("click", function() {
    displayThumbnails("vlogging");
});

document.getElementById("techEducational").addEventListener("click", function() {
    displayThumbnails("techEducational");
});

document.getElementById("vines").addEventListener("click", function() {
    displayThumbnails("vines");
});

document.getElementById("others").addEventListener("click", function() {
    displayThumbnails("others");
});
