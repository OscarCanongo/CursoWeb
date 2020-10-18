//import {nombreTarea, crearTarea} from './tareas.js'
import Tarea from './tareas.js'

//console.log(nombreTarea);

//const tarea1 = crearTarea("Pasear al perro", "Media");
//console.log(tarea1);

const tarea1 = new Tarea("Aprender Js", "Urgente");
console.log(tarea1);
tarea1.mostrar();