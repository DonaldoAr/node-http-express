// It's package from note
const http = require('http');

// Here create a server
http.createServer((req,res)=>{
    console.log(req);
    //res.write('Hola mundo');
    // For say node that it finish to write this response
    //res.writeHead(200,{ 'Content-Type': 'application/json'} );
    res.setHeader('content-Disposition', 'attatchment; filename=lista.csv');
    res.writeHead(200,{ 'Content-Type': 'application/csv'} );
    res.write( 'id, nombre\n' );
    res.write( '1, Luis\n' );
    res.write( '2, Donaldo\n' );
    /*
    const persona = {
        id: 1,
        nombre: 'Luis'
    }*/
    // res.write( JSON.stringify( persona ) );
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto', 8080);