document.addEventListener('DOMContentLoaded', () => {
    const tablaUsuarios = document.getElementById('tabla-usuarios');
    const formUsuario = document.getElementById('form-usuario');
    const msgBox = document.getElementById('admin-msg');

    // NOTA: Datos precargados de prueba que deben renderizarse en la tabla
    let usuariosMock = [
        { id: 1, nombre: 'Ana Martínez', rol: 'Operadora', activo: true },
        { id: 2, nombre: 'Carlos Silva', rol: 'Repartidor', activo: true },
        { id: 3, nombre: 'Luis Soto', rol: 'Repartidor', activo: false }
    ];

    function renderizarTabla() {
        let htmlFilas = '';
        usuariosMock.forEach((user, index) => {
            const colorEstado = user.activo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
            const textoEstado = user.activo ? 'Activo' : 'Inactivo';
            const textoBoton = user.activo ? 'Desactivar' : 'Activar';
            const colorBoton = user.activo ? 'bg-red-100 hover:bg-red-200 text-red-700' : 'bg-green-100 hover:bg-green-200 text-green-700';

            htmlFilas += `
                <tr class="hover:bg-slate-50 transition">
                    <td class="p-4 font-bold text-slate-800">${user.nombre}</td>
                    <td class="p-4 text-sm font-medium text-slate-600">${user.rol}</td>
                    <td class="p-4">
                        <span class="text-xs font-bold px-2 py-1 rounded-full ${colorEstado}">${textoEstado}</span>
                    </td>
                    <td class="p-4 text-center">
                        <button onclick="cambiarEstado(${index})" class="${colorBoton} font-bold py-1 px-3 rounded text-xs transition">
                            ${textoBoton}
                        </button>
                    </td>
                </tr>
            `;
        });
        tablaUsuarios.innerHTML = htmlFilas;
    }

    // NOTA: Cambia el estado del usuario al hacer clic en el botón
    window.cambiarEstado = function(index) {
        usuariosMock[index].activo = !usuariosMock[index].activo;
        renderizarTabla();
    };

    // NOTA: Agregar un nuevo usuario mediante el formulario
    formUsuario.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre-user').value.trim();
        const rol = document.getElementById('rol-user').value;

        msgBox.className = 'mb-6 text-sm font-semibold p-4 rounded-xl flex items-start gap-2 border';

        if (!nombre || !rol) {
            msgBox.classList.add('bg-red-50', 'text-red-600', 'border-red-200');
            msgBox.innerHTML = `<i class="ph ph-warning-circle text-lg mr-1"></i> Todos los campos son obligatorios.`;
            return;
        }

        usuariosMock.push({ id: Date.now(), nombre, rol, activo: true });

        msgBox.classList.add('bg-green-50', 'text-green-700', 'border-green-200');
        msgBox.innerHTML = `<i class="ph ph-check-circle text-lg mr-1"></i> Usuario creado exitosamente.`;

        formUsuario.reset();
        renderizarTabla();

        setTimeout(() => { msgBox.classList.add('hidden'); }, 3000);
    });

    // NOTA: Llamada obligatoria para pintar los datos de la lista inicial
    renderizarTabla();
});