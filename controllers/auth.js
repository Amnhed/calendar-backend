/* 
    Importo express para el helper y 
    hago una desestructuracion de express pra obtener el reponse 
*/
const { response } = require('express');


const crearUsuario = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'registro usuario'
    })
}

const loginUsuario = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'login'
    })
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok:true,
        msg: 'Revalidar token'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}

