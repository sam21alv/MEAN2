const express = require('express');
const conectarDB = require('./config/db');

//Creamos el servidor
const app = express();

//Conectarmos a la BD
conectarDB();

app.use('/api/productos', require('./routes/producto'));

//Definimos ruta principal
/*app.get('/', (req, res) => {
    res.send('Hola mundo');
})*/

app.listen(4000, () => {
    console.log('el servidor esta corriendo perfectamente')
})