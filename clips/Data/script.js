function scrollImages(direction) {
    const gallery = document.querySelector('.image-gallery');
    const images = document.querySelectorAll('.image-gallery img');
    const totalImages = images.length;
    const visibleImages = 3; // Number of images to show at a time

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalImages - visibleImages) {
        currentIndex = totalImages - visibleImages;
    }

    const scrollDistance = -currentIndex * (100 / visibleImages);
    gallery.style.transform = `translateX(${scrollDistance}%)`;
}
