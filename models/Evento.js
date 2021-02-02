const { Schema, model } = require('mongoose');

const EventoSchema = Schema ({
    title: {
        type:String,
        required: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required:true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
    }
});

//El objeto que regresa monggo por defecto es toJson
//Puedo modificar el nombre de los campos de lo que retorna 
//pero no la estructura de la bd

EventoSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('Evento', EventoSchema);