document.addEventListener('DOMContentLoaded', () => {
    const formRepartidor = document.getElementById('form-repartidor');
    const msgErrorBox = document.getElementById('repartidor-error');
    const msgErrorText = document.getElementById('repartidor-error-text');
    const msgExitoBox = document.getElementById('repartidor-exito');


    // NOTA: Datos simulados del pedido actual asignado al repartidor
    const pedidoActivoMock = {
        cliente: 'María González',
        telefono: '+56 9 8765 4321',
        producto: '2x Cilindro GLP 15 kg ($32.000)',
        direccion: 'Av. Brasil 456, Depto 12, Chillán'
    };


    // NOTA: Cargamos los datos estáticos en la vista
    if (document.getElementById('rep-cliente')) {
        document.getElementById('rep-cliente').textContent = pedidoActivoMock.cliente;
        document.getElementById('rep-telefono').textContent = pedidoActivoMock.telefono;
        document.getElementById('rep-producto').textContent = pedidoActivoMock.producto;
        document.getElementById('input-nueva-direccion').value = pedidoActivoMock.direccion;
    }


    if (formRepartidor) {
        formRepartidor.addEventListener('submit', (e) => {
            e.preventDefault();


            const nuevaDireccion = document.getElementById('input-nueva-direccion').value.trim();


            // Ocultar mensajes previos
            msgErrorBox.classList.add('hidden');
            msgExitoBox.classList.add('hidden');


            // NOTA: Validaciones simples para evitar que el repartidor borre la dirección por accidente
            if (!nuevaDireccion) {
                mostrarError('La dirección de entrega no puede estar vacía.');
                return;
            }


            if (nuevaDireccion.length < 5) {
                mostrarError('Por favor, ingresa una dirección más detallada.');
                return;
            }


            // Si pasa las validaciones, mostramos el mensaje de éxito
            msgExitoBox.classList.remove('hidden');


            // NOTA: Ocultamos el mensaje de éxito después de 3 segundos para limpiar la pantalla
            setTimeout(() => {
                msgExitoBox.classList.add('hidden');
            }, 3000);
        });
    }


    function mostrarError(mensaje) {
        msgErrorText.textContent = mensaje;
        msgErrorBox.classList.remove('hidden');
    }
});

