const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;

// Handlebars for partial register
var hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");

//TOD0: require('hbs');
app.set("view engine", "hbs");

// Servir contenido estatico: middleware
app.use(express.static("public"));

/* This line doesn't execute because content statis it's execute
app.get('/', (req, res)=> {
  res.send('Hello World');
})
*/
/*
app.get('/hola-mundo', (req, res)=> {
    res.send('EL mundo te saludo :D');
  })
 */
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Luis Donaldo Arias Garcia",
    titulo: "Enviado desde el controlador",
  });
});

app.get('/elements', (req, res)=> {
  res.render(__dirname + '/views/elements.hbs',{

  });
})

app.get('/generic', (req, res)=> {
  res.render(__dirname + '/views/generic.hbs',{
    
  });
})


/*
app.get('/generic', (req, res)=> {
  res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', (req, res)=> {
  res.sendFile(__dirname + '/public/elements.html');
})

app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/hola-mundo/404.html');
 })
*/
app.listen(port, () => {
  console.log(`Example app listen at http://localhost:${port}`);
});
