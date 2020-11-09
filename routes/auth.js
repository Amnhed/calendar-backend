/*
    Rutas de usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

//Rutas

router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

//Realizo la exportacion
module.exports = router;