const express = require('express');
//Incluyo mis variables globales
require('dotenv').config();

const { dbConection } = require('./database/config');

//Muestro todas las variables globales (procesos)
// console.log( process.env );

//Crear el servidor de express, es una buena practica declararlo como const app
const app = express();

//base de datos
dbConection();

// Directorio publico
//App use es un middleware
app.use( express.static('public'));

//Lectura y parseo del body
app.use( express.json() );


//Rutas
//Todo lo que el archivo auth exporte, utilizara la ruta /api/auth
app.use('/api/auth', require('./routes/auth'));

//Incio el servidor y el puerto donde escuchara peticones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});
