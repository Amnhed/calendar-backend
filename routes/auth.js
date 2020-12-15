/*
    Rutas de usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');



const router = Router();

//Rutas

router.post('/new', 
    [//middlewares de express validator
        check('name', 'EL nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser de 6 carcteres').isLength({ min:6 }),
        validarCampos
    ],
    crearUsuario);

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser de 6 carcteres').isLength({ min:6 }),
        validarCampos
    ],
    loginUsuario);

    // Si solo ocupo un middleware (validarJWT), lo mando como variable de lo contrario en un arreglo
router.get('/renew', validarJWT, revalidarToken);

//Realizo la exportacion
module.exports = router;