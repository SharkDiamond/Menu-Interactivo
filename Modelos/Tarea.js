const {v4:uudiv4} = require('uuid');

class Tarea {

id=``;
desc=``;
completadoEn=null;

  constructor(descripcion) {
    this.desc=descripcion;
    this.id = uudiv4();
}



}


module.exports = Tarea;
