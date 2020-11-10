/* 
    Importo express para el helper y 
    hago una desestructuracion de express pra obtener el reponse 
*/
const { response } = require('express');
const Usuario = require('../models/Usuario');


const crearUsuario = async(req, res = response) => {
    // console.log( req );
    // const {name, email, password} = req.body
    try {
        const usuario = new Usuario( req.body );
        await usuario.save();
        
        res.status(201).json({
            ok:true,
            msg: 'registro'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:true,
            msg: ''
        });
    }

}

const loginUsuario = (req, res = response) => {
    //const errors = validationResult( req );
    //console.log(errors);
        // if ( !errors.isEmpty() ){
        //     return res.status(400).json({
        //         ok:false,
        //         errors: errors.mapped()
        //     });
        // }
    res.status(200).json({
        ok:true,
        msg: 'Login correcto'
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


