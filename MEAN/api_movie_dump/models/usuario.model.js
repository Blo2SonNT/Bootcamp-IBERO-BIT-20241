const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioSchema);


/*
{
	"nombre": "",
	"apellido": "",
	"email": "",
	"fecha_nacimiento": "",
	"password": ""
}
*/
