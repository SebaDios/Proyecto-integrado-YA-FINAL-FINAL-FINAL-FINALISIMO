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

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-images');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    const totalSlides = slides.length;
    let interval;
    
    // Función para mover el carrusel
    function moveToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        
        currentIndex = index;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
    
    // Función para iniciar el auto-avance
    function startAutoSlide() {
        interval = setInterval(function() {
            moveToSlide(currentIndex + 1);
        }, 5000);
    }
    
    // Iniciar auto-avance
    startAutoSlide();
    
    // Event listeners para los botones
    prevBtn.addEventListener('click', function() {
        clearInterval(interval);
        moveToSlide(currentIndex - 1);
        startAutoSlide();
    });
    
    nextBtn.addEventListener('click', function() {
        clearInterval(interval);
        moveToSlide(currentIndex + 1);
        startAutoSlide();
    });
    
    // Pausar auto-avance cuando el mouse está sobre el carrusel
    carousel.addEventListener('mouseenter', function() {
        clearInterval(interval);
    });
    
    carousel.addEventListener('mouseleave', function() {
        startAutoSlide();
    });
    
    // Para dispositivos táctiles
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        clearInterval(interval);
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            moveToSlide(currentIndex + 1); // Swipe izquierda
        }
        if (touchEndX > touchStartX + 50) {
            moveToSlide(currentIndex - 1); // Swipe derecha
        }
    }
    
    // Ajustar altura del carrusel al cargar y redimensionar
    function adjustCarouselHeight() {
        const carouselContainer = document.querySelector('.carousel-container');
        if (window.innerWidth >= 768) {
            // Altura fija para tabletas y desktop
            return;
        }
        
        // Para móviles, altura proporcional al ancho (relación 16:9)
        const width = carouselContainer.offsetWidth;
        carouselContainer.style.height = `${width * 0.5625}px`;
        
        // Ajustar todas las imágenes
        const images = document.querySelectorAll('.carousel-images img');
        images.forEach(img => {
            img.style.height = `${width * 0.5625}px`;
        });
    }
    
    // Ejecutar al cargar y al redimensionar
    adjustCarouselHeight();
    window.addEventListener('resize', adjustCarouselHeight);
});