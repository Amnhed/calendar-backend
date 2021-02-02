/*
    Rutas de usuarios / events
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');


const router = Router();

// Todas tienen que pasar por la validacion de  jwt
router.use( validarJWT );

//obtener eventos
router.get('/', getEventos);

//Crear evento
router.post('/',
            [
                check('title','El titulo es obligatorio').not().isEmpty(),
                check('start','Fecha de inicio es obligatoria').custom( isDate ),
                check('end','Fecha de final es obligatoria').custom( isDate ),
                validarCampos
            ],
            crearEvento);

//Actualizar evento
router.put('/:id', actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);

//Realizo la exportacion
module.exports = router;

