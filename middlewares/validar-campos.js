const { response } = require('express');
const { validationResult } = require('express-validator');


const validarCampos = (req, res = response, next) => {
    const errors = validationResult( req );
    //console.log(errors);
    if ( !errors.isEmpty() ){
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        });
    }
    //Si no existen errores, se llama al siguiente middle hasta llegar al controlador
    next();
}

module.exports = {
    validarCampos
}