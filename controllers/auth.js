/* 
    Importo express para el helper y 
    hago una desestructuracion de express pra obtener el reponse 
*/
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');


const crearUsuario = async(req, res = response) => {
    // console.log( req );
    const { email, password } = req.body
    try {
        //Si encuentra el email del req.body regresa el registro(objeto), otra cosa regresa null
        let usuario = await Usuario.findOne({ email });

        if( usuario ){
            return res.status(400).json({
                ok:false,
                msg: 'Un usuario existe con este correo'
            });
        }

        usuario = new Usuario( req.body );
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();//default 10 rounds
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();
        
        res.status(201).json({
            ok:true,
            uid: usuario.id,
            name: usuario.name
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


