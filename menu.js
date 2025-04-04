document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    body.appendChild(overlay);
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    overlay.addEventListener('click', function() {
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});