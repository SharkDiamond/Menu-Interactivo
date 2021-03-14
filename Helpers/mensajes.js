require('colors');

const mostrarMenu =() => {



return new Promise(function(resolve, reject) {

  //console.clear();
  console.log("====================================".green);
  console.log("      Seleccione una opcion         ".yellow);
  console.log("====================================\n".green);

  console.log(`${`1.`.green} Crear Tarea`);
  console.log(`${`2`.green}  Listar Tareas`);
  console.log(`${`3.`.green} Listar Tareas Completadas`);
  console.log(`${`4.`.green} Listar Tareas Pendientes`);
  console.log(`${`5.`.green} Completar Tareas`);
  console.log(`${`6.`.green} Borrar una Tarea`);
  console.log(`${`0.`.green} Salir\n`);




  const readline = require('readline').createInterface({

  input:process.stdin,
  output:process.stdout

});

  readline.question(`Seleccione una opcion:`,(opt) => {

  resolve(opt);
  //console.log({opt});
  readline.close();

  });



});


}


const pausa = () => {


return new Promise(function(resolve, reject) {


      const readline = require('readline').createInterface({

        input:process.stdin,
        output:process.stdout

    });

    readline.question(`\n Presione ${`ENTER`.blue} para continuar`,(opt) => {

      readline.close();

  resolve();
      });




});


}





module.exports= {

mostrarMenu,
pausa

}
