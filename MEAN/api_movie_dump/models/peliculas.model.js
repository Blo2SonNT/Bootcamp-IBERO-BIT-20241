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
    clasificacion: {
        type: String,
        required: true,
        default: false
    },
    imagen: {
        type: String,
        required: true,
        default: "https://via.placeholder.com/50x50"
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
