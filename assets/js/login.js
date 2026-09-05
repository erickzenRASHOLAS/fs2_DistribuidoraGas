document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');
    const inputUsuario = document.getElementById('input-usuario');
    const inputPassword = document.getElementById('input-password');
    const msgErrorBox = document.getElementById('login-error');
    const msgErrorText = document.getElementById('login-error-text');

    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página

            // Obtenemos los valores ingresados eliminando espacios vacíos
            const usuario = inputUsuario.value.trim();
            const password = inputPassword.value.trim();

            // NOTA Validación básica para asegurar que los campos no estén vacíos
            if (usuario === '' || password === '') {
                mostrarError('Por favor, completa todos los campos.');
                return;
            }

            // NOTA Validación hardcodeada con un IF
            if (usuario === 'admin' && password === 'admin123') {
                // Credenciales correctas Ocultar error (si lo hubiera) y simular redirección
                msgErrorBox.classList.add('hidden');
                alert('¡Bienvenido, Administrador! Redirigiendo a tu panel...');

                //el ".." SOLO por ahora, luego debe ser el del usuario
                window.location.href = "../perfil.html";

                // Aquí iría la redirección real, por ejemplo:
                // window.location.href = 'dashboard.html';
            } else {
                // Credenciales incorrectas
                mostrarError('Usuario o contraseña incorrectos.');
            }
        });
    }

    // Función para manejar la visibilidad del mensaje de error
    function mostrarError(mensaje) {
        msgErrorText.textContent = mensaje;
        msgErrorBox.classList.remove('hidden');
    }
});
