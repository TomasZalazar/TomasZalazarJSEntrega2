

const blocDeNotas = [];
let opcion = "";
// Función para obtener la fecha y hora actual en la zona horaria local del usuario
function obtenerFechaHoraLocal() {
    const fechaActual = new Date();
    const formatoFechaHoraLocal = fechaActual.toLocaleString();
    return formatoFechaHoraLocal;
}
// Función para agregar una nueva idea al array de blocDeNotas con fecha y hora local
function agregarNotaNueva(nuevaNota) {
    const fechaHoraLocal = obtenerFechaHoraLocal();
    const notaConFecha = `${fechaHoraLocal}: ${nuevaNota}`;
    blocDeNotas.push(notaConFecha);
    console.log("La NOTA NUEVA agregada es: " + notaConFecha);
}
//funcion para editar una idea de nuestro arrray de blocDeNotas
function editarIdea(i, editarNota) {
    const indiceArreglo = i - 1;
    if (indiceArreglo >= 0 && indiceArreglo < blocDeNotas.length) {
        const fechaHoraLocal = obtenerFechaHoraLocal();
        blocDeNotas[indiceArreglo] = `${fechaHoraLocal}: ${editarNota}`;
        console.log(`La nueva nota EDITADA en la posición ${i} es: ${editarNota}`);
    } else {
        console.log("El índice ingresado es incorrecto");
    }
}
//funcion para eliminar una idea agregada a nuestro array de blocDeNotas
function eliminarIdea(i) {
    const indiceArreglo = i - 1;
    if (indiceArreglo >= 0 && indiceArreglo < blocDeNotas.length) {
        const notaEliminada = blocDeNotas.splice(indiceArreglo, 1)[0];
        console.log("La idea fue eliminada: " + notaEliminada);
    } else {
        console.log("El índice ingresado es incorrecto");
    }
}
// Función para mostrar todas las ideas en el bloc de notas
function mostrarTodasLasIdeas() {
    console.log("Todas las ideas en el bloc de notas:");
    blocDeNotas.forEach((idea, index) => {
        console.table(`${index + 1}. ${idea}`);
    });
}
// Bucle para ofrecer opciones al usuario
while (opcion !== "5") {
    alert(`ELEGIR UNA OPCIÓN:
    1. Agregar tarea
    2. Editar Tarea
    3. Eliminar Tarea
    4. Mostrar todas las tareas
    5. Salir del programa`);
    
    opcion = prompt("Ingrese la opción a realizar");

    switch (opcion) {
        case "1":
            const nuevaTarea = prompt("Ingrese una nueva tarea:");
            agregarNotaNueva(nuevaTarea);
            break;
        case "2":
            const indiceEditar = parseInt(prompt("Ingrese el índice de la tarea a editar:"));
            const nuevaNotaEditar = prompt("Ingrese la nueva tarea:");
            editarIdea(indiceEditar, nuevaNotaEditar);
            break;
        case "3":
            const indiceEliminar = parseInt(prompt("Ingrese el índice de la tarea a eliminar:"));
            eliminarIdea(indiceEliminar);
            break;
        case "4":
            console.table(mostrarTodasLasIdeas());
            break;
        case "5":
            console.log("Saliendo del programa");
            break;
        default:
            alert("La opción elegida es incorrecta");
    }
}