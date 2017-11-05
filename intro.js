console.log('hola mundo');

var curso = "node.js";
var duracion= 15.5;

//objeto de javascript
var persona = {
  nombre: "angel",
  edad: 7
};
persona.trabajo= "estudiante";

// forma 2 de objeto javascript
var persona2= new Object();
persona2.nombre= "angel";
persona2.edad= 7;

console.log("edad persona2 = "+ persona2.edad);

//declaracion de funciones

function sumar(a,b){
  return a+b;
}

var multiplicar= function(a,b){
  return a*b;
}

//declaracion de funcion en cadena
function operacion(miFuncion, a, b){
  return miFuncion(a,b);
}

//LLamada funcion normal
console.log("1+2 = " + sumar(1,2));
console.log("2*3 = " + multiplicar(2,3));
//LLamada funcion en cadena
console.log("resultado = " + operacion(sumar,1,2));
