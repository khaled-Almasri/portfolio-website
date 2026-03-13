document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Intersection Observer for Fade-In Effects
    const faders = document.querySelectorAll('.fade-in');

    // Add appearance options
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                // Unobserve once animated to keep the style applied
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Attach observer to each fader
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
