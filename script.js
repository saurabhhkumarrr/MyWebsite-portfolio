// Select all images in the gallery
const images = document.querySelectorAll('.gallery img');
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeModal = document.getElementById('closeModal');

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        fullscreenImage.src = image.src; // Set the clicked image as the source for fullscreen
        fullscreenModal.style.display = 'flex'; // Show the modal
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    fullscreenModal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside the image
fullscreenModal.addEventListener('click', (event) => {
    if (event.target === fullscreenModal) {
        fullscreenModal.style.display = 'none'; // Hide the modal
    }
});