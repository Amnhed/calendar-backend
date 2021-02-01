//Controller
/* 
    Importo express para el helper y 
    hago una desestructuracion de express pra obtener el reponse 
*/
const { response } = require('express');

const getEventos = async(req, res = response) => {
    // console.log( req );
    //const { email, password } = req.body
    try {
        res.status(201).json({
            ok:true,
            msg: 'Obtener eventos'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:true,
            msg: ''
        });
    }

}

const crearEvento = async(req, res = response) => {
    // console.log( req );
    //const { email, password } = req.body

        res.status(201).json({
            ok:true,
            msg: 'Crear evento'
        })
}

const actualizarEvento = async(req, res = response) => {
    // console.log( req );
    //const { email, password } = req.body

    res.status(201).json({
        ok:true,
        msg: 'Actualizar evento'
    })
}

const eliminarEvento = async(req, res = response) => {
    // console.log( req );
    //const { email, password } = req.body
    try {
        res.status(201).json({
            ok:true,
            msg: 'Eliminar evento'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:true,
            msg: ''
        });
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}