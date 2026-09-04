// NOTA Escuchar el evento 'DOMContentLoaded' asegura que el HTML cargó completamente
// antes de buscar elementos en el DOM (ayuda de la ia)
document.addEventListener('DOMContentLoaded', () => {


    // 1. CONTROL DEL MENÚ MÓVIL (Pauta: Comportamiento responsive desde 360px)
    const btnMenu = document.getElementById('btn-menu-mobi');
    const menuMobi = document.getElementById('menu-mobi');

    // NOTA Comprobar que los elementos existen evita que el script falle en páginas donde no haya menú hamburguesa.
    if (btnMenu && menuMobi) {
        btnMenu.addEventListener('click', () => {
            // Alterno la clase 'hidden' de Tailwind para mostrar u ocultar el menú desplegable en pantallas pequeñas
            menuMobi.classList.toggle('hidden');
        });
    }

    // 2. VALIDACIÓN DE FORMULARIO EXPRESS (Pauta: Mensajes contextuales y JS)
    const formPedido = document.getElementById('form-pedido-express');
    const inputCelular = document.getElementById('input-celular');
    const selectCilindro = document.getElementById('select-cilindro');
    const errorCelular = document.getElementById('error-celular');
    const errorCilindro = document.getElementById('error-cilindro');

    if (formPedido) {
        formPedido.addEventListener('submit', (e) => {
            // NOTA e.preventDefault() evita que la página se recargue inmediatamente al presionar el botón.
            e.preventDefault();
            let esValido = true;

            // NOTA Reiniciar los campos de error ocultos antes de hacer cada nueva validación.
            limpiarError(errorCelular);
            limpiarError(errorCilindro);

            //VALIDACIÓN DE CAMPO CELULAR
            const valorCelular = inputCelular.value.trim();
            // Celular entre 8 y 9 digitos
            const regexCelular = /^[0-9]{8,9}$/;

            if (!valorCelular) {
                mostrarError(errorCelular, 'Por favor ingrese su número de celular para continuar.');
                esValido = false;
            } else if (!regexCelular.test(valorCelular)) {
                mostrarError(errorCelular, '¡¡¡ERROR!!! Ingresa un número válido de 8 a 9 dígitos (ej: 987654321).');
                esValido = false;
            }

            //VALIDACIÓN DE SELECCIÓN DE CILINDRO
            if (!selectCilindro.value) {
                mostrarError(errorCilindro, 'Debes seleccionar un formato de cilindro.');
                esValido = false;
            }

            //RESULTADO DE LA VALIDACIÓN
            if (esValido) {
                // NOTA Si no hay errores aquí se procesa la solicitud o se envía a la siguiente pantalla.
                alert(`¡Pedido recibido con éxito!\nTeléfono: +56 9 ${valorCelular}\nCilindro seleccionado: ${selectCilindro.value}`);
                formPedido.reset();
            }
        });
    }

    // FUNCIONES AUXILIARES PARA MENSAJES DE ERROR DINÁMICOS
    // NOTA Inyecta el texto del error en el <p> correspondiente y le quita la clase 'hidden' para mostrarlo.
    //ayuda de la ia
    function mostrarError(elementoHTML, mensajeTextual) {
        if (elementoHTML) {
            elementoHTML.textContent = mensajeTextual;
            elementoHTML.classList.remove('hidden');
        }
    }

    // NOTA Vuelve a ocultar el <p> de error limpiando su contenido.
    function limpiarError(elementoHTML) {
        if (elementoHTML) {
            elementoHTML.textContent = '';
            elementoHTML.classList.add('hidden');
        }
    }

});