const moment = require('moment');

//const isDate = ( value, rest ) => { //con esto imprimo el body
const isDate = ( value ) => {
    //console.log(rest)
    console.log(value)
    if ( !value ) {
        return false;
    }

    const fecha = moment( value );
    if (fecha.isValid()) {
        return true;
    } else {
        return false;
    }

    
}

module.exports = { isDate }