//Programa para leer un archivo

//Invocando el modulo y guardandolo en fs
const fs = require('fs');

//Funcion para leer el archivo texto.txt
fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }

    console.log(data);

});