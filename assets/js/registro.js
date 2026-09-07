document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('form-registro');
    const msgBox = document.getElementById('registro-msg');


    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();


        const nombre = document.getElementById('reg-nombre').value.trim();
        const direccion = document.getElementById('reg-direccion').value.trim();
        const telefono = document.getElementById('reg-telefono').value.trim();
        const pass1 = document.getElementById('reg-pass1').value;
        const pass2 = document.getElementById('reg-pass2').value;


        msgBox.className = 'mb-4 text-sm font-semibold p-3 rounded-xl border flex items-start gap-2'; // reset clases


        // NOTA: Validación simple de campos vacíos según rúbrica.
        if (!nombre || !direccion || !telefono || !pass1 || !pass2) {
            msgBox.classList.add('bg-red-50', 'text-red-600', 'border-red-200');
            msgBox.innerHTML = `<i class="ph ph-warning-circle text-lg"></i> Completa todos los campos.`;
            return;
        }


        // NOTA: Validación de coincidencia y largo de contraseña.
        if (pass1.length < 6) {
            msgBox.classList.add('bg-red-50', 'text-red-600', 'border-red-200');
            msgBox.innerHTML = `<i class="ph ph-warning-circle text-lg"></i> La contraseña debe tener al menos 6 caracteres.`;
            return;
        }


        if (pass1 !== pass2) {
            msgBox.classList.add('bg-red-50', 'text-red-600', 'border-red-200');
            msgBox.innerHTML = `<i class="ph ph-warning-circle text-lg"></i> Las contraseñas no coinciden.`;
            return;
        }


        // NOTA: Simulación de éxito y redirección.
        msgBox.classList.add('bg-green-50', 'text-green-700', 'border-green-200');
        msgBox.innerHTML = `<i class="ph ph-check-circle text-lg"></i> Registro exitoso. Redirigiendo...`;


        setTimeout(() => {
            window.location.href = './perfil.html'; // Redirige al erfil tras 2 segundos.
        }, 2000);
    });
});
