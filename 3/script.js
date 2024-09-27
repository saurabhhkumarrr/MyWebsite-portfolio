// Get elements
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeModal = document.getElementById('closeModal');
const galleryImages = document.querySelectorAll('.gallery img');

// Function to open modal
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        fullscreenImage.src = img.src; // Set the source of the fullscreen image
        fullscreenModal.style.display = 'flex'; // Show modal

        // Add the transition effect for smooth scaling
        fullscreenImage.style.transform = 'scale(0)'; // Start from scale 0
        setTimeout(() => {
            fullscreenImage.style.transform = 'scale(1)'; // Scale to 1 (full size)
        }, 10); // Small delay to allow the first scale to apply
    });
});

// Close modal when clicking close button
closeModal.addEventListener('click', () => {
    fullscreenModal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of image
fullscreenModal.addEventListener('click', (e) => {
    if (e.target === fullscreenModal) {
        fullscreenModal.style.display = 'none'; // Hide modal
    }
});