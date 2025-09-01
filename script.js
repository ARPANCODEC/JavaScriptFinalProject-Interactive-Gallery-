// Initialize the gallery on page load
function initGallery() {
    console.log("Gallery initialized.");

    // Select all gallery images
    let images = document.querySelectorAll(".gallery img");

    // Add tabindex to each image for keyboard accessibility
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to:", images[i].alt);
    }
}

// Function when mouse over / focus on an image
function upDate(previewPic) {
    console.log("Preview updated with:", previewPic.alt, previewPic.src);

    let displayArea = document.getElementById("image");
    let textOverlay = document.getElementById("image-text");

    displayArea.style.backgroundImage = "url('" + previewPic.src + "')";
    textOverlay.innerHTML = previewPic.alt;
}

// Function when mouse leaves / blur event
function undo() {
    console.log("Preview reset.");

    let displayArea = document.getElementById("image");
    let textOverlay = document.getElementById("image-text");

    displayArea.style.backgroundImage = "url('')";
    textOverlay.innerHTML = "Hover over an image below to display here.";
}
