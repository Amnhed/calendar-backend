const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

//obtener eventos
router.get('/',validarJWT, getEventos);

//Crear evento
router.post('/',validarJWT, crearEvento);

//Actualizar evento
router.put('/',validarJWT, actualizarEvento);

//Borrar evento
router.get('/',validarJWT, eliminarEvento);

//Realizo la exportacion
module.exports = router;

