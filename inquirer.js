const inquirer = require('inquirer');
require('colors');




const preguntas=[
{
type:"list",
name:"opcion",
message:"Que desea hacer?",
choices:[
{
value:"1",
name:"1. Crear Tarea"
},
{
value:"2",
name:"2. Listar Tareas"
},
{
value:"3",
name:"3. Listar Tareas Completadas"
},
{
value:"4",
name:"4. Listar Tareas Pendientes"
},
{
value:"5",
name:`5. Completar Tareas`
},
{
value:"6",
name:"6. Borrar una Tarea"
},
{
value:"0",
name:"0. Salir"
},
]
}
];


const inquirerMenu = async () => {

console.clear();

console.log("====================================".green);
console.log("      Seleccione una opcion         ".yellow);
console.log("====================================\n".green);



const opcion= await inquirer.prompt(preguntas);


return opcion;

}

const pausa= async () => {

const preguntaPausa=[
{
  type:"input",
  name:"enter",
  message:`Presione ${`enter`.green} para continuar`
}
];


await inquirer.prompt(preguntaPausa);


}

module.exports={
inquirerMenu,
pausa

};
