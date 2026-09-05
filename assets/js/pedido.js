document.addEventListener('DOMContentLoaded', () => {
    const formPedido = document.getElementById('form-crear-pedido');
    const msgErrorBox = document.getElementById('pedido-error');
    const msgErrorText = document.getElementById('pedido-error-text');

    if (formPedido) {
        formPedido.addEventListener('submit', (e) => {
            e.preventDefault();

            // NOTA: Capturo los valores y limpio los espacios extra al inicio y final con trim()
            const nombre = document.getElementById('input-nombre').value.trim();
            const telefono = document.getElementById('input-tel').value.trim();
            const direccion = document.getElementById('input-direccion').value.trim();
            const tipoGas = document.getElementById('select-tipo-gas').value;
            const cantidad = parseInt(document.getElementById('input-cantidad').value);

            msgErrorBox.classList.add('hidden'); // Ocultar error previo por defecto

            // NOTA: Aplico las validaciones del negocio paso a paso.
            if (!nombre || !telefono || !direccion || !tipoGas) {
                mostrarError('Debes completar todos los campos obligatorios.');
                return;
            }

            // Validar formato de teléfono chileno (8 o 9 dígitos)
            const regexTel = /^[0-9]{8,9}$/;
            if (!regexTel.test(telefono)) {
                mostrarError('El teléfono debe tener entre 8 y 9 números (Ej: 987654321).');
                return;
            }

            // Validar cantidad lógica
            if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
                mostrarError('La cantidad debe ser un número entre 1 y 10 cilindros.');
                return;
            }

            // NOTA: Si pasa todas las validaciones (if), el flujo llega hasta aquí.
            alert(`¡Pedido confirmado, ${nombre}!\nSe despacharán ${cantidad} cilindro(s) de ${tipoGas} a la dirección:\n${direccion}.`);
            formPedido.reset();

            // Opcional: Redirigir al inicio tras pedir
            // window.location.href = './index.html';
        });
    }

    function mostrarError(mensaje) {
        msgErrorText.textContent = mensaje;
        msgErrorBox.classList.remove('hidden');
    }
});