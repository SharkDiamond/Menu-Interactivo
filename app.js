require('colors');
const Tarea = require('./Modelos/Tarea');
const Tareas = require('./Modelos/Tareas');
//const {mostrarMenu,pausa} = require('./Helpers/mensajes.js');
const {inquirerMenu,pausa,leerEntrada}= require('./inquirer.js');
const {guardarDB,leerDB}= require('./Helpers/saveFile.js');



const main= async () => {

console.clear();
let a="0";
const tareas=new Tareas();


const TareasDb=leerDB();

if (TareasDb) {



  
}
await pausa();
do{

const {opcion} = await inquirerMenu();

switch (opcion) {

  case "1":
//1. Crear Tarea
const descripcion=await leerEntrada("Descripcion:");

//console.log(descripcion);
tareas.crearTarea(descripcion);


    break;

  case "2":
//2. Listar Tareas
console.log(tareas.listadoArr);

    break;

  case "3":
//3. Listar Tareas Completadas

    break;

  case "4":
//4. Listar Tareas Pendientes

    break;

  case "5":
//5. Completar Tareas

    break;

  case "6":
//6. Borrar una Tarea

    break;

default:


}

console.log(opcion);

//guardarDB(tareas.listadoArr);

await pausa();

a=opcion;



} while (a!=="0");



}




main();
