const Tarea = require('./Tarea');
require('colors');

class Tareas {

  listado={};

  constructor() {

this.listado={};

  }

LeerTarea(data){

data.forEach((item, i) => {

this.listado[item.id]=data[i];

});

}


get listadoArr() {

const listado=[];

Object.keys(this.listado).forEach((item, indice) => {

const tarea=this.listado[item];

listado.push(tarea);

});

return listado;
}

crearTarea(descripcion) {

const tarea=new Tarea(descripcion);

this.listado[tarea.id]=tarea;

}


listarTareas(){

this.listadoArr.forEach((item, i) => {

let indiceCorrecto=i+1;

let test;

let completadoOno="";

if (item.completadoEn==null){

test=indiceCorrecto.toString().red;
completadoOno="::Pendiente".red;

}

else if (item.completadoEn!=null){

test=indiceCorrecto.toString().green;
completadoOno="::Completado".green;

}

console.log(test,item.desc,completadoOno+"\n");

});

}

listarTareasCompletadasoPendietes(data,CoP){
let contador=0;
data.forEach((item, i) => {

if (item.completadoEn!=null && CoP==="Completada"){

  contador=contador+1;
  console.log(contador+1,item.desc,item.completadoEn.green,CoP.green);

}

else if (item.completadoEn==null && CoP==="Pendiente"){

contador=contador+1;
console.log(contador,item.desc,CoP.red);

}

});




}


borrarTarea(id){

if (this.listado[id]) delete this.listado[id];

else {
  console.log("Correcto no se eliminara la tarea");
}


}

toggleCompletadas(ids){

  ids.forEach((item, i) => {

    const tarea=this.listado[item];

    if (tarea.completadoEn==null) {

      tarea.completadoEn=new Date().toISOString();

    }

  });

this.listadoArr.forEach((item, i) => {


if (!ids.includes(item.id)) {

const tarea = this.listado[item.id];

tarea.completadoEn=null;


}

});


}


}


module.exports = Tareas;
