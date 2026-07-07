// ===============================
// REFERENCIAS
// ===============================

const formulario = document.getElementById("formAgenda");
const fechaInput = document.getElementById("fecha");
const horaSelect = document.getElementById("hora");
const mensaje = document.getElementById("mensaje");

// ===============================
// CARGAR HORARIOS
// ===============================

function cargarHorarios() {

    horaSelect.innerHTML = "";

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

    mensaje.innerHTML = "";

    // Obtener todas las citas del día
    const { data, error } = await supabase
        .from("citas")
        .select("hora")
        .eq("fecha", fecha);

    if (error) {

        mensaje.innerHTML = error.message;
        return;

    }

    // Máximo de citas por día
    if (data.length >= MAX_CITAS_DIA) {

        horaSelect.innerHTML = "";

        mensaje.innerHTML =
            "<p style='color:red'><strong>Lo sentimos.</strong><br>Ya no hay cupos para este día.</p>";

        return;

    }

    // Mostrar horarios disponibles
    horaSelect.innerHTML = "";

    HORARIOS.forEach(hora => {

        const ocupado = data.some(cita => cita.hora.substring(0,5) === hora);

        if (!ocupado) {

            const opcion = document.createElement("option");

            opcion.value = hora;
            opcion.textContent = hora;

            horaSelect.appendChild(opcion);

        }

    });

}

// ===============================
// GUARDAR CITA
// ===============================

formulario.addEventListener("submit", async function(e){

    e.preventDefault();

    const acudiente = document.getElementById("acudiente").value;
    const estudiante = document.getElementById("estudiante").value;
    const edad = parseInt(document.getElementById("edad").value);
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const programa = document.getElementById("programa").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const observaciones = document.getElementById("observaciones").value;

    // Verificar nuevamente el límite de citas
    const { data: citas } = await supabase
        .from("citas")
        .select("id")
        .eq("fecha", fecha);

    if(citas.length >= MAX_CITAS_DIA){

        mensaje.innerHTML =
        "<p style='color:red'>Ya no quedan cupos disponibles para ese día.</p>";

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

        mensaje.innerHTML =
        "<p style='color:red'>" + error.message + "</p>";

        return;

    }

    mensaje.innerHTML =
    "<p style='color:green'><strong>✅ Cita registrada correctamente.</strong></p>";

    formulario.reset();

    cargarHorarios();

});

// ===============================
// EVENTOS
// ===============================

fechaInput.addEventListener("change", verificarDisponibilidad);

// ===============================
// INICIO
// ===============================

cargarHorarios();
