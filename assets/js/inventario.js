document.addEventListener('DOMContentLoaded', () => {
    const tablaInventario = document.getElementById('tabla-inventario');
    const btnGuardar = document.getElementById('btn-guardar');
    const msgErrorBox = document.getElementById('inventario-error');
    const msgErrorText = document.getElementById('inventario-error-text');

    // NOTA: Datos extraídos literalmente de tu Excel "DSY1104 - Forma C - Catalogo Distribuidora Gas El Volcan.xlsx".
    // Agregué algunos productos extra para tener más variedad.
    const inventarioMock = [
        { codigo: 'CL001', categoria: 'Cilindros de Gas', nombre: 'Cilindro GLP 5 kg', precio: '$6.500', stock: 80 },
        { codigo: 'CL002', categoria: 'Cilindros de Gas', nombre: 'Cilindro GLP 11 kg', precio: '$12.000', stock: 200 },
        { codigo: 'CL003', categoria: 'Cilindros de Gas', nombre: 'Cilindro GLP 15 kg', precio: '$16.000', stock: 90 },
        { codigo: 'CL004', categoria: 'Cilindros de Gas', nombre: 'Cilindro GLP 45 kg', precio: '$45.000', stock: 30 },
        { codigo: 'RG001', categoria: 'Reguladores', nombre: 'Regulador doméstico estándar', precio: '$8.990', stock: 45 },
        { codigo: 'RG002', categoria: 'Reguladores', nombre: 'Regulador de alta presión', precio: '$18.990', stock: 12 },
        { codigo: 'MG001', categoria: 'Mangueras', nombre: 'Manguera gas 1.5 m', precio: '$3.990', stock: 80 }
    ];

    // NOTA: Generar las filas de la tabla dinámicamente
    let htmlFilas = '';
    inventarioMock.forEach(item => {
        htmlFilas += `
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4 font-bold text-slate-500">${item.codigo}</td>
        <td class="p-4 text-slate-600 text-sm">${item.categoria}</td>
        <td class="p-4 font-medium text-slate-800">${item.nombre}</td>
        <td class="p-4 text-slate-700">${item.precio}</td>
        <td class="p-4">
          <!-- NOTA: Asigno una clase 'input-stock' para capturar todos los campos al guardar -->
          <input type="number" class="input-stock w-full border border-slate-300 rounded-lg p-2 text-center focus:ring-2 focus:ring-yellow-400 outline-none font-bold text-blue-900" 
            data-codigo="${item.codigo}" data-nombre="${item.nombre}" value="${item.stock}">
        </td>
      </tr>
    `;
    });
    tablaInventario.innerHTML = htmlFilas;

    // NOTA: Lógica para guardar y validar el inventario
    btnGuardar.addEventListener('click', () => {
        const inputsStock = document.querySelectorAll('.input-stock');
        let hayError = false;

        msgErrorBox.classList.add('hidden'); // Ocultar errores previos

        // Recorrer todos los inputs de stock en la tabla
        for (let input of inputsStock) {
            const valor = parseInt(input.value);
            const nombreProducto = input.getAttribute('data-nombre');

            // NOTA: Validación simple solicitada: stock no puede estar vacío ni ser negativo
            if (isNaN(valor) || valor < 0) {
                mostrarError(`El stock para el producto "${nombreProducto}" no es válido. No puede quedar vacío ni ser negativo.`);
                hayError = true;
                input.classList.add('border-red-500', 'bg-red-50'); // Resaltar el campo con error
                break; // Detenemos la validación al primer error
            } else {
                input.classList.remove('border-red-500', 'bg-red-50'); // Limpiar estilos de error si los tuviera
            }
        }

        if (!hayError) {
            alert('¡Inventario actualizado correctamente!');
        }
    });

    function mostrarError(mensaje) {
        msgErrorText.textContent = mensaje;
        msgErrorBox.classList.remove('hidden');
    }
});