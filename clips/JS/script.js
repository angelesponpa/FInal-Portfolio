function scrollImages(direction) {
    const gallery = document.querySelector('.img-container');
    const images = document.querySelectorAll('.image-gallery img');
    const totalImages = images.length;
    const visibleImages = 2;

    currentIndex += direction *visibleImages;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalImages - visibleImages) {
        currentIndex = totalImages - visibleImages;
    }

    const scrollDistance = -currentIndex * (100 / visibleImages);
    gallery.style.transform = `translateX(${scrollDistance}%)`;
}
