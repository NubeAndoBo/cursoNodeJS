// importamos la dependecia express
var express = require('express');

// invocamos a la funcion express para crear un servidor web
var app = express();
//levantamos al servidor en el puerto
app.listen(8080);
//definir rutas de mi proyecto
app.get("/inicio",function(req, res){
  //req = REQUEST de la peticion web
  //res = RESPONSE de la peticion webs
  //en esta funcion se ejecuta el codigo de la ruta localhost:8080/inicio
  res.send("hola mundo");
});
app.get("/informes",function(req, res){
  //req = REQUEST de la peticion web
  //res = RESPONSE de la peticion webs
  //en esta funcion se ejecuta el codigo de la ruta localhost:8080/informes
  res.send("informes aqui!");
});
