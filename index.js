const express = require('express');
//Incluyo mis variables globales
require('dotenv').config();

//Muestro todas las variables globales (procesos)
console.log( process.env );

//Crear el servidor de express, es una buena practica declararlo como const app
const app = express();

// Directorio publico
//App use es un middleware
app.use( express.static('public'));

//Rutas
// app.get('/', (req, res) => {
//     console.log('Ruta /');
//     res.json({
//         ok:true
//     })
// });

//Incio el servidor y el puerto donde escuchara peticones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});
