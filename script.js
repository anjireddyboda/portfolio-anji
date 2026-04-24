// script.js for smooth scrolling, mobile menu toggle, and interactive features

// Smooth scrolling effect
const smoothScroll = (target, duration) => {
    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, start + distance * progress);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.menu');

mobileMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Interactive features (example)
const interactiveElements = document.querySelectorAll('.interactive');

interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});

// Event listener for smooth scrolling on anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"];);

anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        smoothScroll(target, 1000);
    });
});
