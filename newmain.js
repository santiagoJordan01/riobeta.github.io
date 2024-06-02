

document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.formulario').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    // Ocultar el formulario inicialmente
    document.querySelector('.formulario').style.display = 'none';

    // Mostrar el formulario cuando se hace clic en el enlace "Ingresa"
    document.querySelector('.ingresar').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        document.querySelector('.formulario').style.display = 'block';
    });

    // Cerrar el formulario cuando se hace clic en el botón de cierre
    document.querySelector('.close-button').addEventListener('click', function() {
        document.querySelector('.formulario').style.display = 'none';
    });
});




// Borde negro en su contenedor tras oprimir el input de buscar productos
const inputBuscar = document.getElementById('buscar-productos');
const navMenuRight = document.querySelector('.nav-menu-right');

inputBuscar.addEventListener('click', function() {
    navMenuRight.classList.add('borde-negro');
});

// Remover la clase cuando el input pierda el foco
inputBuscar.addEventListener('blur', function() {
    navMenuRight.classList.remove('borde-negro');
});




// header carrusel
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carrusel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('button-next');
    const prevButton = document.getElementById('button-prev');
    const indicators = document.getElementById('carrusel-indicators').children;

    let currentSlide = 0;

    const updateIndicators = () => {
        Array.from(indicators).forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    };

    const moveToSlide = (targetIndex) => {
        track.style.transform = `translateX(-${targetIndex * 100}%)`;
        currentSlide = targetIndex;
        updateIndicators();
    };

    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
            moveToSlide(0);
        } else {
            moveToSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            moveToSlide(slides.length - 1);
        } else {
            moveToSlide(currentSlide - 1);
        }
    };

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    Array.from(indicators).forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            moveToSlide(index);
        });
    });

    setInterval(nextSlide, 5000); // Cambia cada 5 segundos
});

// Función para transición en el formulario de sign in
