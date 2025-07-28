// This file contains JavaScript for interactive elements on the landing page.

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
        valid = false;
    } else if (!validateEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        valid = false;
    }

    return valid;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Event listener para el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Previene el envío si la validación falla
        return;
    }
    event.preventDefault(); // Previene el envío real (solo frontend)
    alert('¡Gracias por tu mensaje! Pronto me pondré en contacto contigo.');
    this.reset();
});

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});