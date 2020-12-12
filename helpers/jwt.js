const jwt = require('jsonwebtoken');

//callback generarJWT
const generarJWT = (uid, name) => {
    //Retorno Promise para firmar el jwt
    return new Promise( (resolve, reject) => {
        const payload = {uid, name};
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) =>{
            //callback para manejar el error al firma el token, mostrandolo en consola
            if( err ){
                console.log(err);
                reject('No se puedo generar el token');
            }
            // en caso de estar todo bien 
            resolve( token );
        })
    })
}

module.exports = {
    generarJWT
}