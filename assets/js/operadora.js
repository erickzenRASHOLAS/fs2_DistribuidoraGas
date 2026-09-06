document.addEventListener('DOMContentLoaded', () => {
    const tablaPedidos = document.getElementById('tabla-pedidos');
    const msgBox = document.getElementById('operadora-msg');

    // NOTA: Lista de repartidores disponibles para el dropdown
    const repartidores = ['Carlos Silva', 'Luis Soto'];

    // Datos simulados de los pedidos
    const pedidosMock = [
        {
            id: 'VOL-8840',
            cliente: 'Ana Soto',
            direccion: 'Pasaje Los Héroes 33',
            producto: '1x 15 kg',
            estado: 'Pendiente',
            repartidor: ''
        },
        {
            id: 'VOL-8841',
            cliente: 'Julio Tapia',
            direccion: 'Av. Libertad 120',
            producto: '2x 20 kg',
            estado: 'Pendiente',
            repartidor: ''
        },
        {
            id: 'VOL-4444',
            cliente: 'Sergio Perez',
            direccion: 'Las Nieves 123',
            producto: '3x 20 kg',
            estado: 'Pendiente',
            repartidor: ''
        }
    ];

    // NOTA: Esta función recorre los pedidos y genera las filas de la tabla en el HTML
    function renderizarTabla() {
        let htmlFilas = '';

        pedidosMock.forEach((pedido, index) => {
            // Genera el selector de repartidores
            let opcionesRepartidor = `<option value="">Seleccione...</option>`;
            repartidores.forEach(rep => {
                opcionesRepartidor += `<option value="${rep}">${rep}</option>`;
            });

            const selectorRepartidor = pedido.estado === 'Pendiente'
                ? `<select id="select-${index}" class="border border-slate-300 rounded p-1 w-full text-sm outline-none focus:ring-2 focus:ring-yellow-400">${opcionesRepartidor}</select>`
                : `<span class="font-medium text-slate-700">${pedido.repartidor}</span>`;

            const botonAccion = pedido.estado === 'Pendiente'
                ? `<button onclick="asignarPedido(${index})" class="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-1.5 px-3 rounded text-sm transition">Asignar</button>`
                : `<span class="text-xs text-slate-400 font-bold uppercase">Asignado</span>`;

            const colorEstado = pedido.estado === 'Pendiente' ? 'bg-slate-100 text-slate-600' : 'bg-yellow-100 text-yellow-700';

            htmlFilas += `
                <tr class="hover:bg-slate-50 transition">
                    <td class="p-4 font-black text-blue-950">#${pedido.id}</td>
                    <td class="p-4">
                        <p class="font-bold text-slate-800">${pedido.cliente}</p>
                        <p class="text-xs text-slate-500">${pedido.direccion}</p>
                    </td>
                    <td class="p-4 text-sm font-medium text-slate-700">${pedido.producto}</td>
                    <td class="p-4">
                        <span class="text-xs font-bold px-2 py-1 rounded-full ${colorEstado}">${pedido.estado}</span>
                    </td>
                    <td class="p-4">${selectorRepartidor}</td>
                    <td class="p-4 text-center">${botonAccion}</td>
                </tr>
            `;
        });

        // NOTA: Inyecta el HTML generado dentro del <tbody> de tu tabla
        tablaPedidos.innerHTML = htmlFilas;
    }

    // NOTA: Función que procesa la asignación al presionar el botón "Asignar"
    window.asignarPedido = function(index) {
        const selector = document.getElementById(`select-${index}`);
        const repartidorSeleccionado = selector.value;

        msgBox.classList.remove('hidden', 'bg-red-50', 'text-red-600', 'border-red-200', 'bg-green-50', 'text-green-700', 'border-green-200');

        // Validación simple para verificar que seleccionó a un repartidor
        if (!repartidorSeleccionado) {
            msgBox.classList.add('bg-red-50', 'text-red-600', 'border-red-200');
            msgBox.innerHTML = `<i class="ph ph-warning-circle text-lg mr-1"></i> Debe seleccionar un repartidor antes de asignar.`;
            return;
        }

        // Actualiza el pedido en memoria
        pedidosMock[index].repartidor = repartidorSeleccionado;
        pedidosMock[index].estado = 'En Camino';

        // Muestra mensaje de exito
        msgBox.classList.add('bg-green-50', 'text-green-700', 'border-green-200');
        msgBox.innerHTML = `<i class="ph ph-check-circle text-lg mr-1"></i> Pedido #${pedidosMock[index].id} asignado a ${repartidorSeleccionado}.`;

        // Vuelve a pintar la tabla para reflejar los cambios
        renderizarTabla();
        // Oculta el mensaje después de 3 segundos
        setTimeout(() => { msgBox.classList.add('hidden'); }, 3000);
    };

    // NOTA: Se llama a la función al cargar el script para que renderice los pedidos de inmediato
    renderizarTabla();
});