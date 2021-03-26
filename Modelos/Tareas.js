const Tarea = require('./Tarea');

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



}




module.exports = Tareas;
