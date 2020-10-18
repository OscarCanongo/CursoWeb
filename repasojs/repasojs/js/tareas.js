//export const nombreTarea = "Hacer Lenguajes";

//export const crearTarea = (tarea, urgencia) => {
  //  return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
//}



export default class Tarea {
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}



//let tarea1 = new Tarea("Aprendes Js", "Alta");

//tarea1.mostrar();

//let compra1 = new ComprasPendientes("Jabones", "Alta", 3);
//compra1.mostrar();
//compra1.hola();