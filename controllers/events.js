//Controller
/* 
    Importo express para el helper y 
    hago una desestructuracion de express pra obtener el reponse 
*/
const { response } = require('express');
//exportacion por defecto no necesito llaves
const Evento = require('../models/Evento');

//tarea asincrona
const getEventos = async(req, res = response) => {
    // console.log( req );
    //const { email, password } = req.body
    const evento = new Evento( req.body );
    try {
        const eventoGuardado = await evento.save();
        res.status(201).json({
            ok:true,
            msg: 'Obtener eventos',
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        });
    }

}

const crearEvento = async(req, res = response) => {
    //console.log( req.body);
    //const { email, password } = req.body
    const evento = new Evento( req.body );
    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();
        res.status(201).json({
            ok:true,
            msg: 'Obtener eventos',
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        });
    }
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
    console.log( req.body);
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