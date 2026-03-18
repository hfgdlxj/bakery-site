document.addEventListener('DOMContentLoaded', () => {
    
    const heroWrapper = document.querySelector('.hero__img-wrapper');
    if (heroWrapper) {
        setTimeout(() => {
            heroWrapper.classList.add('is-active');
        }, 50); 
    }
    

    const toggleBtn = document.getElementById('js-nav-toggle');
    const navMenu = document.getElementById('js-nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
            document.body.style.overflow = navMenu.classList.contains('is-active') ? 'hidden' : '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleBtn.classList.remove('is-active');
            navMenu.classList.remove('is-active');
            document.body.style.overflow = ''; 
        });
    });


    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});

