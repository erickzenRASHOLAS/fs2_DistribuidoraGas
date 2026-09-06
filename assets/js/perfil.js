

document.addEventListener('DOMContentLoaded', () => {
    // NOTA: Objeto simulado para representar la información del usuario actual.
    const usuarioMock = {
        nombre: 'Juan Pérez',
        nombreCompleto:"Juan Pedro Pérez Silva",
        correo: 'juan.perez@correo.cl',
        telefono: '+56 9 1234 5678',
        direccion: 'Av. Brasil 456, Depto 12, Chillán'
    };

    // NOTA: Inyectamos los datos en el HTML usando los IDs correspondientes.
    document.getElementById('perfil-nombre').textContent = usuarioMock.nombre;
    document.getElementById('perfil-nombreCompleto').textContent = usuarioMock.nombreCompleto;
    document.getElementById('perfil-correo').textContent = usuarioMock.correo;
    document.getElementById('perfil-telefono').textContent = usuarioMock.telefono;
    document.getElementById('perfil-direccion').textContent = usuarioMock.direccion;

    // NOTA: Capturamos el botón de modificar para simular la acción sin backend.
    const btnModificar = document.getElementById('btn-modificar');
    if (btnModificar) {
        btnModificar.addEventListener('click', () => {
            alert('Funcionalidad en desarrollo: Aquí se abrirá un formulario para editar tus datos personales.');
            window.location.href = './editar-perfil.html'
        });
    }
});