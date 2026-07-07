// ===============================
// REFERENCIAS
// ===============================

const formulario = document.getElementById("formAgenda");
const fechaInput = document.getElementById("fecha");
const horaSelect = document.getElementById("hora");
const mensaje = document.getElementById("mensaje");

// ===============================
// VALIDACIONES
// ===============================

function validarTelefono(telefono) {
    // Ajusta el patrón según tu país
    const patron = /^[0-9]{7,15}$/;
    return patron.test(telefono);
}

function validarCorreo(correo) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
}

function esFechaValida(fecha) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const fechaSeleccionada = new Date(fecha + "T00:00:00");
    return fechaSeleccionada >= hoy;
}

// ===============================
// CARGAR HORARIOS
// ===============================

function cargarHorarios() {
    horaSelect.innerHTML = "";
    
    if (typeof HORARIOS === "undefined") {
        console.error("HORARIOS no está definido");
        return;
    }

    HORARIOS.forEach(hora => {
        const opcion = document.createElement("option");
        opcion.value = hora;
        opcion.textContent = hora;
        horaSelect.appendChild(opcion);
    });
}

// ===============================
// VERIFICAR DISPONIBILIDAD
// ===============================

async function verificarDisponibilidad() {
    const fecha = fechaInput.value;

    if (!fecha) return;

    // Validar que la fecha no sea pasada
    if (!esFechaValida(fecha)) {
        horaSelect.innerHTML = "";
        mensaje.innerHTML = "<p style='color:red'>No puedes agendar en fechas pasadas.</p>";
        return;
    }

    mensaje.innerHTML = "";
    horaSelect.innerHTML = "<option value=''>Cargando horarios...</option>";

    try {
        const { data, error } = await supabase
            .from("citas")
            .select("hora")
            .eq("fecha", fecha);

        if (error) {
            console.error("Error consultando citas:", error);
            horaSelect.innerHTML = "";
            mensaje.innerHTML = "<p style='color:red'>No se pudo consultar la disponibilidad: " + error.message + "</p>";
            return;
        }

        const citasDelDia = Array.isArray(data) ? data : [];

        if (citasDelDia.length >= MAX_CITAS_DIA) {
            horaSelect.innerHTML = "";
            mensaje.innerHTML = "<p style='color:red'><strong>Lo sentimos.</strong><br>Ya no hay cupos para este día.</p>";
            return;
        }

        const horasOcupadas = citasDelDia
            .map(cita => (cita && typeof cita.hora === "string") ? cita.hora.substring(0, 5) : null)
            .filter(Boolean);

        horaSelect.innerHTML = "";

        HORARIOS.forEach(hora => {
            const ocupado = horasOcupadas.includes(hora);
            if (!ocupado) {
                const opcion = document.createElement("option");
                opcion.value = hora;
                opcion.textContent = hora;
                horaSelect.appendChild(opcion);
            }
        });

        if (!horaSelect.options.length) {
            mensaje.innerHTML = "<p style='color:red'>No quedan horarios disponibles para este día.</p>";
        }

    } catch (err) {
        console.error("Error inesperado verificando disponibilidad:", err);
        horaSelect.innerHTML = "";
        mensaje.innerHTML = "<p style='color:red'>Ocurrió un error inesperado al cargar los horarios. Intenta de nuevo o elige otra fecha.</p>";
    }
}

// ===============================
// GUARDAR CITA
// ===============================

formulario.addEventListener("submit", async function(e){
    e.preventDefault();

    const acudiente = document.getElementById("acudiente").value.trim();
    const estudiante = document.getElementById("estudiante").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const programa = document.getElementById("programa").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const observaciones = document.getElementById("observaciones").value.trim();

    // Validaciones adicionales
    if (!validarTelefono(telefono)) {
        mensaje.innerHTML = "<p style='color:red'>Ingresa un teléfono válido (solo números, 7-15 dígitos).</p>";
        return;
    }

    if (!validarCorreo(correo)) {
        mensaje.innerHTML = "<p style='color:red'>Ingresa un correo electrónico válido.</p>";
        return;
    }

    if (!esFechaValida(fecha)) {
        mensaje.innerHTML = "<p style='color:red'>La fecha no puede ser pasada.</p>";
        return;
    }

    if (!hora) {
        mensaje.innerHTML = "<p style='color:red'>Selecciona un horario antes de agendar.</p>";
        return;
    }

    const btn = formulario.querySelector("button[type='submit']");
    const textoOriginal = btn ? btn.textContent : "";
    if (btn) { 
        btn.disabled = true; 
        btn.textContent = "Guardando...";
    }

    try {
        // Verificar nuevamente el límite de citas
        const { data: citas, error: errorConsulta } = await supabase
            .from("citas")
            .select("id")
            .eq("fecha", fecha);

        if (errorConsulta) {
            console.error("Error verificando cupos:", errorConsulta);
            mensaje.innerHTML = "<p style='color:red'>No se pudo verificar la disponibilidad: " + errorConsulta.message + "</p>";
            return;
        }

        const citasDelDia = Array.isArray(citas) ? citas : [];

        if (citasDelDia.length >= MAX_CITAS_DIA) {
            mensaje.innerHTML = "<p style='color:red'>Ya no quedan cupos disponibles para ese día.</p>";
            return;
        }

        // Guardar
        const { error } = await supabase
            .from("citas")
            .insert([{
                acudiente,
                estudiante,
                edad,
                telefono,
                correo,
                programa,
                fecha,
                hora,
                observaciones
            }]);

        if(error){
            console.error("Error guardando cita:", error);
            mensaje.innerHTML = "<p style='color:red'>" + error.message + "</p>";
            return;
        }

        mensaje.innerHTML = "<p style='color:green'><strong>✅ Cita registrada correctamente.</strong></p>";
        formulario.reset();
        cargarHorarios();

    } catch (err) {
        console.error("Error inesperado agendando la cita:", err);
        mensaje.innerHTML = "<p style='color:red'>Ocurrió un error inesperado. Intenta de nuevo.</p>";
    } finally {
        if (btn) { 
            btn.disabled = false; 
            btn.textContent = textoOriginal;
        }
    }
});

// ===============================
// EVENTOS
// ===============================

fechaInput.addEventListener("change", verificarDisponibilidad);

// ===============================
// INICIO
// ===============================

cargarHorarios();