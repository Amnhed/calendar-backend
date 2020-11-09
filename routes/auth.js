/*
    Rutas de usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

//Rutas

router.post('/new', 
    [//middlewares de express validator
        check('name', 'EL nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser de 6 carcteres').isLength({ min:6 })
    ],
    crearUsuario);

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser de 6 carcteres').isLength({ min:6 })
    ],
    loginUsuario);

router.get('/renew', revalidarToken);

//Realizo la exportacion
module.exports = router;