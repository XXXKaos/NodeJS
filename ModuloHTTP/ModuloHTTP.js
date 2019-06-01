//Trabajaremos con peticiones y protocolos HTTP

//Importamos el modulo http:
const http = require('http');

//Creamos un server
const handleServer = function(req, res){
    res.write('Esto es un simple texto');
    res.end //terminamos respuesta para recibir mas peticiones
}

const server = http.createServer(handleServer);

server.listen(3000, function{
    console.log('Server on port 3000');
});