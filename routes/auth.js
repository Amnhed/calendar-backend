/*
    Rutas de usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const router = Router();

//Rutas
// Asi la llamo localhost:4000/api/auth/
router.get('/', (req, res) => {
    console.log('Ruta /');
    res.json({
        ok:true
    })
});

//Realizo la exportacion
module.exports = router;