const blocDeTareas = [];
let opcion = "";
// Función para obtener la fecha y hora actual en la zona horaria local del usuario
function obtenerFechaHoraLocal() {
    const fechaActual = new Date();
    const formatoFechaHoraLocal = fechaActual.toLocaleString();
    return formatoFechaHoraLocal;
}
// Función para agregar una nueva tarea al bloc de tareas con fecha y hora local
function agregarTareaNueva(nuevaTarea) {
    const fechaHoraLocal = obtenerFechaHoraLocal();
    const tareaConFecha = `Nueva tarea agregada el ${fechaHoraLocal}:\n${nuevaTarea}\n`;
    blocDeTareas.push(tareaConFecha);
    alert("¡Nueva tarea agregada!");
}
// Función para editar una tarea en el bloc de tareas
function editarTarea(indice, nuevaTarea) {
    const indiceArreglo = indice - 1;
    if (indiceArreglo >= 0 && indiceArreglo < blocDeTareas.length) {
        const fechaHoraLocal = obtenerFechaHoraLocal();
        blocDeTareas[indiceArreglo] = `${fechaHoraLocal}: ${nuevaTarea}`;
        alert(`Tarea en la posición ${indice} editada.`);
    } else {
        alert("El número de tarea ingresado es incorrecto.");
    }
}
// Función para eliminar una tarea del bloc de tareas
function eliminarTarea(indice) {
    const indiceArreglo = indice - 1;
    if (indiceArreglo >= 0 && indiceArreglo < blocDeTareas.length) {
        const tareaEliminada = blocDeTareas.splice(indiceArreglo, 1)[0];
        alert(`¡Tarea eliminada: ${tareaEliminada}!`);
    } else {
        alert("El número de tarea ingresado es incorrecto.");
    }
}
// Función para mostrar todas las tareas en el bloc de tareas
function mostrarTodasLasTareas() {
    let mensaje = "Todas las tareas en el bloc de tareas:\n\n";
    blocDeTareas.forEach((tarea, index) => {
        mensaje += `${index + 1}. ${tarea}\n`;
    });
    alert(mensaje);
}
do {
    opcion = prompt(`ELEGIR UNA OPCIÓN:
    1. Agregar Tarea
    2. Editar Tarea
    3. Eliminar Tarea
    4. Mostrar Todas las Tareas
    5. Salir del Programa`);
    if (opcion === "1") {
        const nuevaTarea = prompt("Ingrese una nueva tarea:");
        agregarTareaNueva(nuevaTarea);
    } else if (opcion === "2") {
        const indiceEditar = parseInt(prompt("Ingrese el número de la tarea a editar:"));
        const nuevaTareaEditar = prompt("Ingrese la nueva tarea:");
        editarTarea(indiceEditar, nuevaTareaEditar);
    } else if (opcion === "3") {
        const indiceEliminar = parseInt(prompt("Ingrese el número de la tarea a eliminar:"));
        eliminarTarea(indiceEliminar);
    } else if (opcion === "4") {
        mostrarTodasLasTareas();
    }
} while (opcion !== "5");
alert("Saliendo del programa");