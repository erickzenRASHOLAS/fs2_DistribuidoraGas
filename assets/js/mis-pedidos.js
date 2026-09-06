document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-pedidos');

    // NOTA: Este es el arreglo de datos estáticos simulando lo que devolvería una base de datos.
    // No hay backend real, así que usamos estos objetos para dibujar la interfaz.
    const pedidosMock = [
        {
            id: 'VOL-8832',
            fecha: '05 Septiembre 2026',
            estado: 'En Camino',
            cilindro: 'Cilindro 15 kg',
            cantidad: 1,
            direccion: 'Av. Brasil 456, Depto 12, Chillán',
            total: '$23.500'
        },
        {
            id: 'VOL-7105',
            fecha: '20 Agosto 2026',
            estado: 'Entregado',
            cilindro: 'Cilindro 11 kg',
            cantidad: 2,
            direccion: 'Av. Brasil 456, Depto 12, Chillán',
            total: '$35.000'
        },
        {
            id: 'VOL-5422',
            fecha: '15 Julio 2026',
            estado: 'Entregado',
            cilindro: 'Cilindro 15 kg',
            cantidad: 1,
            direccion: 'Av. Brasil 456, Depto 12, Chillán',
            total: '$23.500'
        }
    ];

    // NOTA: Si no hay pedidos, mostramos un mensaje vacío. Si los hay, generamos el HTML por cada uno.
    if (pedidosMock.length === 0) {
        contenedor.innerHTML = `
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
        <i class="ph ph-receipt text-4xl text-slate-300 mb-3 block"></i>
        <p class="text-slate-500 font-medium">Aún no tienes pedidos registrados.</p>
      </div>`;
        return;
    }

    // NOTA: Recorremos el arreglo de pedidos y creamos una "tarjeta" visual para cada uno usando Tailwind.
    let htmlPedidos = '';
    pedidosMock.forEach(pedido => {
        // Definir colores según estado
        const colorEstado = pedido.estado === 'En Camino'
            ? 'bg-yellow-100 text-yellow-700 border-yellow-200'
            : 'bg-green-100 text-green-700 border-green-200';

        const iconoEstado = pedido.estado === 'En Camino'
            ? 'ph-truck'
            : 'ph-check-circle';

        htmlPedidos += `
      <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition hover:shadow-md">
        
        <div class="flex-grow">
          <div class="flex items-center gap-3 mb-2">
            <span class="font-black text-blue-950 text-lg">#${pedido.id}</span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-md border flex items-center gap-1 ${colorEstado}">
              <i class="ph ${iconoEstado}"></i> ${pedido.estado}
            </span>
          </div>
          <p class="text-sm text-slate-500 mb-1"><i class="ph ph-calendar-blank mr-1"></i> ${pedido.fecha}</p>
          <p class="text-sm text-slate-700 font-medium"><i class="ph ph-map-pin mr-1"></i> ${pedido.direccion}</p>
        </div>

        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 w-full sm:w-auto text-left sm:text-right min-w-[150px]">
          <p class="text-xs text-slate-500 font-bold uppercase mb-1">${pedido.cantidad}x ${pedido.cilindro}</p>
          <p class="text-xl font-black text-blue-900">${pedido.total}</p>
        </div>
        
      </div>
    `;
    });

    contenedor.innerHTML = htmlPedidos;
});