const mongoose = require('mongoose');

const PeliculasSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    duracion: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    clasificacionR: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Pelicula', PeliculasSchema);

/*
{
	"titulo" :"",
	"genero" :"",
	"duracion" :"",
	"director" :"",
	"clasificacionR" : true
}

*/