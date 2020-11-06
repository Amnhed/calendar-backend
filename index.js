const express = require('express');

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
app.listen( 4000, () => {
    console.log(`Servidor corriendo en el puerto ${ 4000 }`);
});
