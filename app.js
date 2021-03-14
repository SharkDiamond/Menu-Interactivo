require('colors');
const Tarea = require('./Modelos/Tarea');
const Tareas = require('./Modelos/Tareas');
//const {mostrarMenu,pausa} = require('./Helpers/mensajes.js');
const {inquirerMenu,pausa}= require('./inquirer.js');

const main= async () => {

console.clear();
let a="0";

do{

const {opcion} = await inquirerMenu();
console.log(opcion);
await pausa();
a=opcion;

const tarea=new Tarea("Comprar Comida");
const tareas=new Tareas();
console.log(tareas);

} while (a!=="0");



}




main();
