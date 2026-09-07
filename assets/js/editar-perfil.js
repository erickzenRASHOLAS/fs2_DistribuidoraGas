document.addEventListener('DOMContentLoaded', () => {
    const formEditar = document.getElementById('form-editar-perfil');
    const msgErrorBox = document.getElementById('edit-error');
    const msgErrorText = document.getElementById('edit-error-text');

    // NOTA: Simulo los datos del usuario para rellenar los inputs automáticamente al cargar la página.
    const usuarioMock = {
        nombre: 'Juan Pérez',
        correo: 'juan.perez@correo.cl',
        telefono: '12345678', // Solo los números para el input
        direccion: 'Av. Brasil 456, Depto 12, Chillán'
    };

    // NOTA: Inyectar los valores iniciales en los campos.
    if (document.getElementById('edit-nombre')) {
        document.getElementById('edit-nombre').value = usuarioMock.nombre;
        document.getElementById('edit-correo').value = usuarioMock.correo;
        document.getElementById('edit-telefono').value = usuarioMock.telefono;
        document.getElementById('edit-direccion').value = usuarioMock.direccion;
    }

    if (formEditar) {
        formEditar.addEventListener('submit', (e) => {
            e.preventDefault(); // NOTA: Evita que la página se recargue al enviar el formulario.

            // Capturar valores ingresados, quitando espacios al inicio y final
            const nombre = document.getElementById('edit-nombre').value.trim();
            const correo = document.getElementById('edit-correo').value.trim();
            const telefono = document.getElementById('edit-telefono').value.trim();
            const direccion = document.getElementById('edit-direccion').value.trim();

            msgErrorBox.classList.add('hidden'); // Ocultar errores previos

            // NOTA: Validaciones simples solicitadas por regla de negocio.
            if (!nombre || !correo || !telefono || !direccion) {
                mostrarError('Ningún campo puede quedar en blanco.');
                return;
            }

            if (nombre.length < 3) {
                mostrarError('El nombre debe tener al menos 3 caracteres.');
                return;
            }

            if (!correo.includes('@') || !correo.includes('.')) {
                mostrarError('Por favor ingresa un correo electrónico válido.');
                return;
            }

            const regexTel = /^[0-9]{8,9}$/;
            if (!regexTel.test(telefono)) {
                mostrarError('El teléfono debe contener entre 8 y 9 números.');
                return;
            }

            // NOTA: Si todo es correcto, simulamos el éxito y redirigimos de vuelta al perfil.
            alert(`¡Datos actualizados con éxito!\nNuevo nombre: ${nombre}`);
            window.location.href = './perfil.html';
        });
    }

    function mostrarError(mensaje) {
        msgErrorText.textContent = mensaje;
        msgErrorBox.classList.remove('hidden');

    }
});