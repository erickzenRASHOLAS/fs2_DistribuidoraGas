document.addEventListener('DOMContentLoaded', () => {
    const contenedorRutas = document.getElementById('contenedor-rutas');


    // NOTA: Datos simulados de los pedidos que este repartidor debe entregar hoy.
    const pedidosEnCursoMock = [
        {
            id: 'VOL-8832',
            cliente: 'María González',
            direccion: 'Av. Brasil 456, Depto 12',
            comuna: 'Chillán',
            estado: 'Pendiente'
        },
        {
            id: 'VOL-8835',
            cliente: 'Pedro Rojas',
            direccion: 'Los Pinos 1024, Parcela 3',
            comuna: 'Chillán Viejo',
            estado: 'Pendiente'
        },
        {
            id: 'VOL-8840',
            cliente: 'Ana Soto',
            direccion: 'Pasaje Los Héroes 33, Villa Lindo',
            comuna: 'Chillán',
            estado: 'Pendiente'
        }
    ];


    let htmlRutas = '';


    pedidosEnCursoMock.forEach(pedido => {
        // NOTA: El botón "Gestionar" apunta directamente a "repartidor.html".
        // En un sistema real con backend, el enlace sería algo como href="./repartidor.html?id=${pedido.id}" para cargar dinámicamente los datos de ese pedido en la siguiente pantalla.
        htmlRutas += `
     <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
      
       <div class="mb-6">
         <div class="flex justify-between items-start mb-4">
           <span class="font-black text-blue-950 text-xl">#${pedido.id}</span>
           <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-yellow-200">
             <i class="ph ph-clock"></i> ${pedido.estado}
           </span>
         </div>
        
         <div class="space-y-2">
           <p class="font-bold text-slate-800"><i class="ph ph-user text-slate-400 mr-2"></i>${pedido.cliente}</p>
           <div>
             <p class="text-sm text-slate-700 font-medium"><i class="ph ph-map-pin text-slate-400 mr-2"></i>${pedido.direccion}</p>
             <p class="text-xs text-slate-500 font-bold uppercase ml-6 mt-1">${pedido.comuna}</p>
           </div>
         </div>
       </div>
      
       <a href="./repartidor.html" class="w-full bg-slate-50 hover:bg-slate-100 text-blue-950 font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 border border-slate-200 shadow-sm">
         Gestionar Entrega <i class="ph ph-arrow-right text-lg"></i>
       </a>
      
     </div>
   `;
    });


    contenedorRutas.innerHTML = htmlRutas;
});

