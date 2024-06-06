document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form[name='form']");
    const nombreInput = form.querySelector("input[name='nombre']");
    const emailInput = form.querySelector("input[name='email']");
    const asuntoInput = form.querySelector("input[name='asunto']");
    const mensajeTextarea = form.querySelector("textarea[name='mensaje']");
    
    const nombreError = document.getElementById("nombre-error");
    const emailError = document.getElementById("email-error");
    const asuntoError = document.getElementById("asunto-error");
    const mensajeError = document.getElementById("mensaje-error");

    form.addEventListener("submit", function(event) {
        // Inicializar la validez del formulario y los mensajes de error
        let valid = true;

        nombreError.textContent = "";
        emailError.textContent = "";
        asuntoError.textContent = "";
        mensajeError.textContent = "";

        // Validación del campo Nombre
        if (nombreInput.value.length < 3) {
            valid = false;
            nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
        }

        // Validación del campo Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value) || emailInput.value.length > 30) {
            valid = false;
            emailError.textContent = "El email debe ser válido y tener un máximo de 30 caracteres.";
        }

        // Validación del campo Asunto
        if (asuntoInput.value.length < 10) {
            valid = false;
            asuntoError.textContent = "El asunto debe tener al menos 10 caracteres.";
        }

        // Validación del campo Mensaje
        if (mensajeTextarea.value.length < 10) {
            valid = false;
            mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
        }

        // Si alguna validación falla, prevenir el envío del formulario
        if (!valid) {
            event.preventDefault();
        }
    });
});
