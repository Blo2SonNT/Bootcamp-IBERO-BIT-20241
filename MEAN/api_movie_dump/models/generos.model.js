const mongoose = require('mongoose');

const generosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Genero', generosSchema);