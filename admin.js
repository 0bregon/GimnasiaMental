const tbody = document.querySelector("tbody");

const buscarFecha = document.getElementById("buscarFecha");

const btnBuscar = document.getElementById("btnBuscar");

const btnTodas = document.getElementById("btnTodas");


//==============================
// CARGAR TODAS LAS CITAS
//==============================

async function cargarCitas(){

    tbody.innerHTML="";

    const {data,error}=await supabase

    .from("citas")

    .select("*")

    .order("fecha",{ascending:true})

    .order("hora",{ascending:true});

    if(error){

        alert(error.message);

        return;

    }

    mostrarTabla(data);

}



//==============================
// MOSTRAR TABLA
//==============================

function mostrarTabla(lista){

    tbody.innerHTML="";

    lista.forEach(cita=>{

        tbody.innerHTML +=`

<tr>

<td>${cita.acudiente}</td>

<td>${cita.estudiante}</td>

<td>${cita.programa}</td>

<td>${cita.fecha}</td>

<td>${cita.hora.substring(0,5)}</td>

<td>${cita.telefono}</td>

<td>${cita.correo}</td>

<td>

<button onclick="eliminar('${cita.id}')">

Eliminar

</button>

</td>

</tr>

`;

    });

}



//==============================
// BUSCAR POR FECHA
//==============================

btnBuscar.addEventListener("click",async()=>{

    const fecha=buscarFecha.value;

    if(fecha==""){

        alert("Seleccione una fecha");

        return;

    }

    const {data,error}=await supabase

    .from("citas")

    .select("*")

    .eq("fecha",fecha)

    .order("hora");

    if(error){

        alert(error.message);

        return;

    }

    mostrarTabla(data);

});



//==============================
// MOSTRAR TODAS
//==============================

btnTodas.addEventListener("click",()=>{

    cargarCitas();

});



//==============================
// ELIMINAR
//==============================

async function eliminar(id){

    if(!confirm("¿Eliminar esta cita?")){

        return;

    }

    const {error}=await supabase

    .from("citas")

    .delete()

    .eq("id",id);

    if(error){

        alert(error.message);

        return;

    }

    cargarCitas();

}



//==============================
// INICIO
//==============================

cargarCitas();
