//IMPORTS
require('colors');
const Tarea = require('./Modelos/Tarea');
const Tareas = require('./Modelos/Tareas');

const {inquirerMenu,pausa,leerEntrada,listadoTareasBorradas,mosrtarListadoChklist}= require('./inquirer.js');
const {guardarDB,leerDB}= require('./Helpers/saveFile.js');


//METHOD MAIN
const main= async () => {

//CLEAR THE CONSOLE
console.clear();

//VAR OUT OF SCOPE
let a="0";

//CREATING A OBJECT OF TYPE TAREAS
const tareas=new Tareas();

const archivoDb=leerDB();

if(archivoDb) tareas.LeerTarea(leerDB());

do{

const {opcion} = await inquirerMenu();

switch (opcion) {

//1. CREATING CHORES
  case "1":

const descripcion=await leerEntrada("Descripcion:");

tareas.crearTarea(descripcion);

    break;

//2. TO LIST CHORES
  case "2":


tareas.LeerTarea(leerDB());

//SHOW THE CHORES
console.log("\n");
tareas.listarTareas();

    break;

  case "3":
//3. Listar Tareas Completadas

tareas.listarTareasCompletadasoPendietes(tareas.listadoArr,"Completada");

    break;

  case "4":
//4. Listar Tareas Pendientes

tareas.listarTareasCompletadasoPendietes(tareas.listadoArr,"Pendiente");

    break;
//5. COMPLETE SHORES
  case "5":
const a = await mosrtarListadoChklist(tareas.listadoArr);

tareas.toggleCompletadas(a);

    break;
//6. DELETE AN SHORES
  case "6":

const id = await listadoTareasBorradas(tareas.listadoArr);

tareas.borrarTarea(id);

    break;

default:


}

//SAVE THE CHORES
guardarDB(tareas.listadoArr);

//DOING AN PAUSE
await pausa();

a=opcion;

} while (a!=="0");



}//KEY FINAL OF METHOD MAIN



//CALL THE METHOD MAIN
main();
