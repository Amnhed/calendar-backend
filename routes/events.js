/*
    Rutas de usuarios / events
    host + /api/events
*/

const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// Todas tienen que pasar por la validacion de  jwt
router.use( validarJWT );

//obtener eventos
router.get('/', getEventos);

//Crear evento
router.post('/', crearEvento);

//Actualizar evento
router.put('/:id', actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);

//Realizo la exportacion
module.exports = router;

