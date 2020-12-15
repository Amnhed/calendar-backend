/* 
    Importo express para el helper y 
    hago una desestructuracion de express pra obtener el reponse 
*/
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


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

        //generar JWT 
        const token = await generarJWT(usuario.id, usuario.name);
        
        res.status(201).json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:true,
            msg: ''
        });
    }

}

const loginUsuario = async(req, res = response) => {
    const { email, password } = req.body; 
    //const errors = validationResult( req );
    //console.log(errors);
        // if ( !errors.isEmpty() ){
        //     return res.status(400).json({
        //         ok:false,
        //         errors: errors.mapped()
        //     });
        // }
    

    try {
        let usuario = await Usuario.findOne({ email });
        //El usuario no existe, 
        if( !usuario ){
            return res.status(400).json({
                ok:false,
                msg: 'El usuario no existe con ese email'
            });
        }
        
        //compara la contraseña del request con la contraseña en la bd
        const validPassword = bcrypt.compareSync( password, usuario.password );
    
        // SI el pasword del request es NO ES IGUAL al password de la bd
        if ( !validPassword ){
            return res.status(400).json({
                ok:false,
                msg: 'Password incorecto'
            })
        }
        const token = await generarJWT(usuario.id, usuario.name);


        res.status(200).json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Login incorrecto'
        })
        
    }

}

const revalidarToken = async(req, res = response) => {
    const { uid,name  } = req;
    const token = await generarJWT(uid, name);

    res.json({
        ok:true,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}


