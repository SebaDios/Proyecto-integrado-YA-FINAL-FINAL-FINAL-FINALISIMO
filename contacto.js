document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación 
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            if (!nombre || !email || !mensaje) {
                alert('Por favor completa todos los campos requeridos');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Por favor ingresa un correo electrónico válido');
                return;
            }
            
            // Simular envío 
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
    
    // validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    
    
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
    
    // Cerrar menú al hacer clic 
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});