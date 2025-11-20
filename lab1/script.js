document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const privacy = document.getElementById('privacy').checked;
    
    // Obtener intereses seleccionados
    const intereses = [];
    const checkboxes = document.querySelectorAll('input[name="intereses"]:checked');
    checkboxes.forEach(checkbox => {
        intereses.push(checkbox.value);
    });
    
    // Validar que se acepte la política de privacidad
    if (!privacy) {
        alert('Debes aceptar la política de privacidad para continuar');
        return;
    }
    
    // Crear objeto con los datos del formulario
    const formData = {
        email: email,
        nombre: nombre,
        intereses: intereses,
        privacyAccepted: privacy,
        fecha: new Date().toISOString()
    };
    
    // Mostrar los datos en consola
    console.log('Datos del formulario:', formData);
    
    // Mostrar mensaje de éxito
    alert(`¡Gracias por suscribirte, ${nombre || 'amigo'}!\n\nRevisa tu correo: ${email}\n\n¡Recibirás tu código de descuento pronto!`);
    
    // Limpiar el formulario
    this.reset();
});

// Añadir animación al hacer hover en los checkboxes
const checkboxLabels = document.querySelectorAll('.checkbox-label');
checkboxLabels.forEach(label => {
    label.addEventListener('mouseenter', function() {
        this.style.color = '#667eea';
    });
    
    label.addEventListener('mouseleave', function() {
        this.style.color = '#333';
    });
});

// Validación en tiempo real del email
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    if (this.value && !this.validity.valid) {
        this.style.borderColor = '#e74c3c';
    } else if (this.value) {
        this.style.borderColor = '#52c234';
    }
});

emailInput.addEventListener('input', function() {
    if (this.style.borderColor === 'rgb(231, 76, 60)') {
        this.style.borderColor = '#ddd';
    }
});