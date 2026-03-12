document.addEventListener('DOMContentLoaded', () => {
    console.log('Seguimos en Pie - Web Loaded');

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Reveal animations on scroll
    const scrollReveal = () => {
        const reveals = document.querySelectorAll('.short-card');
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;
            if (revealTop < windowHeight - revealPoint) {
                reveal.style.opacity = '1';
                reveal.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);

    // Initial state for reveal
    document.querySelectorAll('.short-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    scrollReveal();
});
