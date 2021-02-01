/*
    Rutas de usuarios / events
    host + /api/events
*/

const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

//obtener eventos
router.get('/',validarJWT, getEventos);

//Crear evento
router.post('/',validarJWT, crearEvento);

//Actualizar evento
router.put('/:id',validarJWT, actualizarEvento);

//Borrar evento
router.delete('/:id',validarJWT, eliminarEvento);

//Realizo la exportacion
module.exports = router;

