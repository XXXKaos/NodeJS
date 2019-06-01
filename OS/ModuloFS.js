//Trabajando con el Modulu File Sistem
//Permite interactuar con el sistema de archivos

//Declaramos la instancia del modulo file systen
const fs = require('fs');
const fs2 = require('fs');

//Trabajando con el Modulu File Sistem
//Permite interactuar con el sistema de archivos

/*
    Esta funcion es para que nodejs le pida
    al os que cree el archivo, y el os lo crea
 */


fs.writeFile('./texto.txt', 'linea uno', function (err){
    //Esta funcion sirve para saber si ha funcionado
    if(err){
        console.log(err);
    }

    console.log('Archivo creado exitosamente');
}); //Fin de la funcion

console.log('Ultima linea de codigo');







