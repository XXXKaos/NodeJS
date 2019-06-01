//Declaramos Objeto Math
const Math = {}; //este es un objeto 

//Declaramos funciones

function add(n1, n2) {
    console.log('Suma');
   return  n1 + n2;
}

function sub(n1, n2) {
    console.log('Resta');
    return  n1 - n2;
}

function mul(n1, n2) {
    console.log('Multiplicacion');
   return  n1 * n2;
}

function div(n1, n2) {
    console.log('Division');
   if(n2 == 0){
       console.log('No se puede dividir entre 0');
   }else
       return  n1 / n2;
}


//Exportamos las funciones a traves del objeto llamado: Math

Math.add = add;
Math.sub = sub;
Math.mul = mul;
Math.div = div;

//Exportamos este objeto para ser utilizado en otro fichero
 module.exports = Math;


