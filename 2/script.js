// Select all images in the gallery
const galleryImages = document.querySelectorAll('.gallery img');
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeModal = document.getElementById('closeModal');

// Add click event to each image
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        fullscreenImage.src = image.src; // Set the source of the fullscreen image
        fullscreenModal.style.display = 'flex'; // Show the modal
    });
});

// Close the fullscreen modal when clicking the close button
closeModal.addEventListener('click', () => {
    fullscreenModal.style.display = 'none'; // Hide the modal
});

// Close the fullscreen modal when clicking outside of the image
fullscreenModal.addEventListener('click', (event) => {
    if (event.target !== fullscreenImage) {
        fullscreenModal.style.display = 'none'; // Hide the modal
    }
});