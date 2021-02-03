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
    const evento = await Evento.find()
                                .populate('user','name');

    try {
        res.status(201).json({
            ok:true,
            msg: 'Obtener eventos',
            evento: evento
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
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
    const eventoId = req.params.id;
    const uid = req.uid;

    try{
        const evento = await Evento.findById( eventoId );

        if ( !evento ) {
            //no encontro el id
            res.status(404).json({
                ok:true,
                msg: 'El evento no existe por ese id'
            })
        }
        
        if ( evento.user.toString() !== uid ) {
            // si el evento no pertenece al usuario
            //El 401 indica que no tiene privilegio
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

            //desestructuro la request del body
            // Agrego el user por que no viene en la request
            const nuevoEvento = {
                ...req.body,
                user: uid
            }
            //( eventoId, nuevoEvento)// si no le pongo el true, no MUESTRA la modificacion
            const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new:true });
            if(eventoActualizado){
                res.status(201).json({
                    ok: true,
                    eventoActualizado
                })
            }
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        });
    }
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