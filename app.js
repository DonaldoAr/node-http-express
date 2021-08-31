// It's package from note
const http = require('http');

// Here create a server
http.createServer((req,res)=>{
    res.write('Hola mundo');
    // For say node that it finish to write this response
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto', 8080);