const express = require('express');
const app = express();
 
app.get('/', (req, res)=> {
  res.send('Hello World');
})

app.get('/hola-mundo', (req, res)=> {
    res.send('EL mundo te saludo :D');
  })
 
app.get('*', (req, res)=> {
    res.send('Not found 404');
 })

app.listen(8080)