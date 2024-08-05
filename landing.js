// Scroll Event for Navbar Background and Active Link Highlighting
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTopButton = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY;

    // Navbar background change on scroll
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
        backToTopButton.style.display = 'block';
    } else {
        navbar.classList.remove('scrolled');
        backToTopButton.style.display = 'none';
    }

    // Highlighting active link
    sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop - navbar.offsetHeight &&
            scrollPosition < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Smooth scroll to sections
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
