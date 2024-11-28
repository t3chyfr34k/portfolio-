// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Add fade-in class to elements
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Mobile menu toggle with animation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks?.contains(e.target) && !menuToggle?.contains(e.target)) {
        navLinks?.classList.remove('active');
    }
});

// Smooth scroll with animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking
            navLinks?.classList.remove('active');
        }
    });
});

// Add animation classes to elements on load
window.addEventListener('load', () => {
    // Add reveal class to sections
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
        section.classList.add('reveal');
    });

    // Add pop-in animation to tech items and project cards
    document.querySelectorAll('.tech-item, .project-card').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add hover animation classes dynamically
document.querySelectorAll('.tech-item, .project-card').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '2';
    });
    
    item.addEventListener('mouseleave', function() {
        setTimeout(() => {
            this.style.zIndex = '1';
        }, 300);
    });
});

// Hire me button email functionality
document.querySelector('.cta-button.primary')?.addEventListener('click', (e) => {
    e.preventDefault();
    const subject = "Interested in Working Together";
    const body = "Hi T3chy Fr34k,\n\nI came across your portfolio and I'm interested in discussing a potential project.\n\nBest regards,";
    window.location.href = `mailto:t3chyfr34k@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
