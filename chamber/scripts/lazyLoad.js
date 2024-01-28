document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('.lazy-image');

    const lazyLoad = () => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');

                    img.setAttribute('src', src);
                    img.classList.add('fade-in');

                    // Unobserve the image once it's loaded
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            io.observe(img);
        });
    };

    lazyLoad();
});
